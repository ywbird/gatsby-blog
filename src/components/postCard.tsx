import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const PostLinkItem = styled(Link)`
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

const Card = styled.article`
  width: 300px;
  height: 400px;
  margin: 1em;
  border: 1px solid black;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);
  &:hover {
    /* box-shadow: 15px 15px 0px 0px rgba(0, 0, 0, 1); */
    transform: translate(-10px, -10px);
  }
`;

const Frontmatter = styled.div`
  padding: 0.3em;
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
        <h2>
          <PostLinkItem to={`/blog/${slug}`}>{title}</PostLinkItem>
        </h2>
        <p>Posted: {date}</p>
        <p>{excerpt}</p>
      </Frontmatter>
    </Card>
  );
};

export default PostCard;
