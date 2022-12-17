import countapi from 'countapi-js';
import { FC, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import './like.scss';

const Like: FC<{ slug: string; url: string }> = ({ url, slug }) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const isWindow = typeof window !== `undefined`;

  const onClick = () => {
    if (!isWindow) return;
    if (!isLiked) {
      setIsLiked((prev) => !prev);
      setLikes((prev) => prev + 1);
      countapi.visits(slug).then((result) => {
        setLikes(() => result.value);
      });
      const liked: string[] = JSON.parse(
        window.localStorage.getItem(`liked`) || `[]`,
      );
      liked.push(slug);
      window.localStorage.setItem(`liked`, JSON.stringify(liked));
    } else {
      setIsLiked((prev) => !prev);
      setLikes((prev) => prev - 1);
      countapi.update(url, slug, -1).then((result) => {
        setLikes(() => result.value);
      });
      const liked: string[] = JSON.parse(
        window.localStorage.getItem(`liked`) || `[]`,
      );
      window.localStorage.setItem(
        `liked`,
        JSON.stringify(liked.splice(liked.indexOf(slug), 1)),
      );
    }
  };

  useEffect(() => {
    if (isWindow) {
      setIsLiked(() =>
        (
          JSON.parse(window.localStorage.getItem(`liked`) || `[]`) as string[]
        ).includes(slug),
      );
    }
    countapi.info(url, slug).then(({ status }: { status: number }) => {
      if (status !== 200) {
        countapi.create({
          key: slug,
          namespace: url,
          enable_reset: true,
          update_lowerbound: -1,
          value: 0,
        });
      }
    });
    countapi.get(url, slug).then((result) => {
      setLikes(() => result.value);
    });
  }, []);

  // ic:outline-thumb-up
  return (
    <div className="like">
      <Icon
        onClick={onClick}
        className="like-btn"
        width={32}
        icon={isLiked ? `ic:baseline-thumb-up` : `ic:outline-thumb-up`}
      />
      <p className="like-count">
        {new Intl.NumberFormat(`ko-KR`).format(likes)}
      </p>
    </div>
  );
};

export default Like;
