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
  /* height: 200px; */
  /* margin: 1em; */
  /* border: 2px solid var(--border-color); */

  /* background-color: var(--button-color); */
  border: 1px solid var(--theme-ui-colors-border);
  border-radius: 4px;
  transition: color 0.15s ease-out, background 0.15s ease-out,
    transform 0.15s ease-out, box-shadow 0.15s ease-out, border 0.15s ease-out;
  display: flex;
  flex-direction: row;

  @media only screen and (max-device-width: 600px) {
    /* height: 110px; */
    /* min-width: 300px; */
  }
`;

const Frontmatter = styled.div`
  padding: 0.2em 0.5em;
  font-family: var(--main-font);
  /* width: 490px; */

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
  }
`;

const Title = styled.h2`
  display: -webkit-box;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  word-break: break-all;
  color: var(--theme-ui-colors-text);
`;

const Excerpt = styled.p`
  display: -webkit-box;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  word-break: break-all;
  color: var(--theme-ui-colors-mute);
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostCard: React.FC<PostCardProps> = ({ slug, title, date, excerpt }) => {
  return (
    <Card>
      <Frontmatter>
        <PostLinkItem to={slug}>
          <Title>{title}</Title>
          <Data>
            <Excerpt>{excerpt}</Excerpt>
          </Data>
        </PostLinkItem>
      </Frontmatter>
    </Card>
  );
};

export default PostCard;
