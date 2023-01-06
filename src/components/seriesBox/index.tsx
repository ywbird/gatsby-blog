import { IPost } from '@/global';
import { FC, useEffect, useState } from 'react';
import { Link } from 'gatsby';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--mdi"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
            ></path>
          </svg>
        </Link>
      ) : (
        <div className="prevnext mute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--mdi"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
            ></path>
          </svg>
        </div>
      )}
      <span>
        {current + 1}/{count}
      </span>
      {next ? (
        <Link className="prevnext" to={next || `#`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--mdi"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
            ></path>
          </svg>
        </Link>
      ) : (
        <div className="prevnext mute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--mdi"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
            ></path>
          </svg>
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
    setIsOpen((prev) => {
      if (!isWindow) return !prev;
      window.localStorage.setItem(`list-open`, !prev ? `1` : `0`);
      return !prev;
    });
  };

  useEffect(() => {
    if (!isWindow) return;
    setIsOpen(window.localStorage.getItem(`list-open`) === `1`);
  }, []);

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--mdi"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 10l6 6l6-6l-1.4-1.4l-4.6 4.6l-4.6-4.6L6 10Z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--mdi"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M7.4 15.4l4.6-4.6l4.6 4.6L18 14l-6-6l-6 6l1.4 1.4Z"
              ></path>
            </svg>
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
