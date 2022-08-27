import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const PostLinkItem = styled(Link)`
  color: black;
  text-decoration: none;
  /* padding: 0.3em; */
  &:visited {
    color: black;
  }
`;

const Card = styled.article`
  width: 700px;
  height: 460px;
  margin: 1em;
  border: 1px solid black;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);
  &:hover {
    /* box-shadow: 15px 15px 0px 0px rgba(0, 0, 0, 1); */
    transform: translate(0px, -10px);
  }
`;

const Frontmatter = styled.div`
  padding: 0 0.5em;
`;

const PostCard = ({
  slug,
  title,
  date,
  excerpt,
  cover,
}: {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: IGatsbyImageData;
}) => {
  const image: IGatsbyImageData | undefined = getImage(cover);
  return (
    <Card>
      <Link to={`/blog/${slug}`}>
        {image && <GatsbyImage image={image} alt="cover image" />}
      </Link>
      <Frontmatter>
        <PostLinkItem to={`/blog/${slug}`}>
          <h2>{title}</h2>
          <p>Posted: {date}</p>
          <p>{excerpt.length >= 90 ? excerpt.slice(0, 90) + '...' : excerpt}</p>
        </PostLinkItem>
      </Frontmatter>
    </Card>
  );
};

export default PostCard;
