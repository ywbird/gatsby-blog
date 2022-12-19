import countapi from 'countapi-js';
import { FC, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import './like.scss';

const Like: FC<{ id: string; url: string }> = ({ url, id }) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const isWindow = typeof window !== `undefined`;

  const onClick = () => {
    if (!isWindow) return;
    if (!isLiked) {
      setIsLiked((prev) => !prev);
      setLikes((prev) => prev + 1);
      countapi.visits(id).then((result) => {
        setLikes(() => result.value);
      });
      const liked: string[] = JSON.parse(
        window.localStorage.getItem(`liked`) || `[]`,
      );
      liked.push(id);
      window.localStorage.setItem(`liked`, JSON.stringify(liked));
    } else {
      setIsLiked((prev) => !prev);
      setLikes((prev) => prev - 1);
      countapi.update(url, id, -1).then((result) => {
        setLikes(() => result.value);
      });
      const liked: string[] = JSON.parse(
        window.localStorage.getItem(`liked`) || `[]`,
      );
      window.localStorage.setItem(
        `liked`,
        JSON.stringify(liked.splice(liked.indexOf(id), 1)),
      );
    }
  };

  useEffect(() => {
    if (isWindow) {
      setIsLiked(() =>
        (
          JSON.parse(window.localStorage.getItem(`liked`) || `[]`) as string[]
        ).includes(id),
      );
    }
    countapi.info(url, id).then(({ status }: { status: number }) => {
      if (status !== 200) {
        countapi.create({
          key: id,
          namespace: url,
          enable_reset: true,
          update_lowerbound: -1,
          value: 0,
        });
      }
    });
    countapi.get(url, id).then((result) => {
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
