import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: IGatsbyImageData;
}

const PostLinkItem = styled(Link)`
  color: var(--font-color);
  text-decoration: none;
  /* padding: 0.3em; */
  &:visited {
    color: var(--font-color);
  }
`;

const Card = styled.article`
  /* width: 450px; */
  height: 200px;
  /* margin: 1em; */
  /* border: 2px solid var(--border-color); */

  background-color: var(--button-color);
  border-radius: 5px;
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

const Frontmatter = styled.div<{ image?: boolean }>`
  padding: 0.2em 0.5em;
  /* border-left: 1px solid black; */
  /* width: ${(props) => (props.image ? '230' : '450')}px; */
  font-family: var(--main-font);

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
  height: 125px;
  margin: 0px 0 0 0;
`;

const Posted = styled.p`
  margin: 8px 0;
`;

const Image = styled(GatsbyImage)`
  width: 200px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  /* border-right: 1px solid var(--border-color); */
`;

const PostCard: React.FC<PostCardProps> = ({
  slug,
  title,
  date,
  excerpt,
  cover,
}) => {
  const image: IGatsbyImageData | undefined = getImage(cover);
  return (
    <Card>
      <Link to={`/post/${slug}`}>
        {image && <Image image={image} alt="cover image" />}
      </Link>
      <Frontmatter image={!!image}>
        <PostLinkItem to={`/post/${slug}`}>
          <h2>{title}</h2>
          <Posted>Posted: {date}</Posted>
          <Excerpt>{excerpt}</Excerpt>
        </PostLinkItem>
      </Frontmatter>
    </Card>
  );
};

export default PostCard;
