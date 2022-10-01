import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const PostLinkItem = styled(Link)`
  color: var(--theme-ui-colors-text);
  text-decoration: none;
  /* padding: 0.3em; */
  &:visited {
    color: var(--theme-ui-colors-text);
  }
`;

const Card = styled.article`
  /* width: 450px; */
  height: 200px;
  /* margin: 1em; */
  /* border: 2px solid var(--border-color); */

  /* background-color: var(--button-color); */
  border: 1px solid var(--theme-ui-colors-border);
  border-radius: 4px;
  transition: color 0.15s ease-out, background 0.15s ease-out,
    transform 0.15s ease-out, box-shadow 0.15s ease-out, border 0.15s ease-out;
  display: flex;
  flex-direction: row;
  /* box-shadow: 5px 5px var(--border-color); */
  &:hover {
    /* box-shadow: 3px 3px var(--border-color); */
    /* transform: translate(0px, 2px); */
    /* background-color: aqua; */
  }
`;

const Frontmatter = styled.div`
  padding: 0.2em 0.5em;
  font-family: var(--main-font);
  width: 490px;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
  }
`;

const Excerpt = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  margin: 0px 0 0 0;
`;

const MetaInner = styled.p`
  margin: 8px 0;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: var(--main-font);
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
`;

const PostCard: React.FC<PostCardProps> = ({ slug, title, date, excerpt }) => {
  return (
    <Card>
      <Frontmatter>
        <PostLinkItem to={`/post/${slug}`}>
          <h2>{title}</h2>
          <Data>
            <Excerpt>{excerpt}</Excerpt>
            <Meta>
              <MetaInner>{date}</MetaInner>
            </Meta>
          </Data>
        </PostLinkItem>
      </Frontmatter>
    </Card>
  );
};

export default PostCard;
