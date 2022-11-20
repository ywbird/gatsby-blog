import { IPost } from '@/global';
import { Link } from 'gatsby';
import { FC } from 'react';

import './article.scss';

const Article: FC<{ post: IPost }> = ({ post }) => {
  const {
    frontmatter: { title },
    excerpt,
    fields: { slug },
  } = post;
  return (
    <article className="post-card">
      <Link to={slug}>
        <h2 className="post-card-title">{title}</h2>
        <p className="post-card-excerpt">{excerpt}</p>
      </Link>
    </article>
  );
};

export default Article;
