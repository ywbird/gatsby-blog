import { FC } from 'react';

import './toc.scss';

const TOC: FC<{ content: string }> = ({ content }) => {
  return (
    <aside className="toc">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </aside>
  );
};

export default TOC;
