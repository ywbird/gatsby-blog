import { IPost } from '@/global';
import { FC, useState } from 'react';
import { Link } from 'gatsby';
import { Icon } from '@iconify/react';

import './seriesBox.scss';

const SeriesNumber: FC<{
  current: number;
  count: number;
  previous: string;
  next: string;
}> = ({ current, count, previous, next }) => {
  return (
    <div className="series-number">
      {previous ? (
        <Link className="prevnext" to={previous || `#`}>
          <Icon width={22} icon="mdi:chevron-left" />
        </Link>
      ) : (
        <div className="prevnext mute">
          <Icon width={22} icon="mdi:chevron-left" />
        </div>
      )}
      <span>
        {current + 1}/{count}
      </span>
      {next ? (
        <Link className="prevnext" to={next || `#`}>
          <Icon width={22} icon="mdi:chevron-right" />
        </Link>
      ) : (
        <div className="prevnext mute">
          <Icon width={22} icon="mdi:chevron-right" />
        </div>
      )}
    </div>
  );
};

const isWindow = typeof window !== `undefined`;

const SeriesBox: FC<{
  count: number;
  current: number;
  next: string;
  previous: string;
  others: IPost[];
  name: String;
}> = ({ current, count, previous, next, name, others }) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const onClick = () => {
    if (isWindow) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="series-warpper">
      <div>
        <h2 className="series-name">{name}</h2>
        <SeriesNumber
          current={current}
          count={count}
          next={next}
          previous={previous}
        />
      </div>

      <div className="series-list">
        <div className="list-show" onClick={onClick}>
          {isOpen ? (
            <Icon width={18} icon="mdi:chevron-down-circle" />
          ) : (
            <Icon width={18} icon="mdi:chevron-up-circle" />
          )}
          Show List
        </div>
        {isOpen ? (
          <ol>
            {others.map((s, i) => (
              <li key={i}>
                <Link
                  id={
                    others[current].fields.slug === s.fields.slug
                      ? `current-post`
                      : ``
                  }
                  to={s.fields.slug}
                >
                  {s.frontmatter.title}
                </Link>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </div>
  );
};

export default SeriesBox;
