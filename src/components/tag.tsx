import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
const TagEl = styled.h2`
  margin: 1em 0.1em;
  font-size: 20px;
`;

const LinkText = styled(Link)`
  color: var(--font-color);
  text-decoration: none;

  transition: 0.08s cubic-bezier(0.9, 0.03, 0.31, 1.36);
  &:visited {
    color: var(--font-color);
  }
  &:hover {
    /* animation: link-line 0.1s ease-in; */
    color: var(--content-color);
  }
`;

const Tag: React.FC<{ tag: { tag: string; totalCount: number } }> = ({
  tag,
}) => {
  return (
    <TagEl>
      <LinkText to={`/tag/${tag.tag}`}>
        {tag.tag} • {tag.totalCount}
      </LinkText>
    </TagEl>
  );
};

export default Tag;
