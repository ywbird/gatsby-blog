import { FC } from 'react';

import './footer.scss';

const Footer: FC<{ nickname: string; github?: string }> = ({
  nickname,
  github,
}) => {
  return (
    <div id="footer">
      <div>
        © 2022&nbsp;
        {github ? (
          <a
            target="_blank"
            href={`https://github.com/${github}`}
            rel="noreferrer"
          >
            {nickname}
          </a>
        ) : (
          <span>{nickname}</span>
        )}
        &nbsp;powered by&nbsp;
        <a
          target="_blank"
          href="https://github.com/ywbird/lotus"
          rel="noreferrer"
        >
          Lotus
        </a>
        . All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
