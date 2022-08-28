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
  color: black;
  text-decoration: none;
  /* padding: 0.3em; */
  &:visited {
    color: black;
  }
`;

const Card = styled.article`
  width: 450px;
  height: 200px;
  margin: 1em;
  border: 1px solid black;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  flex-direction: row;
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);
  &:hover {
    /* box-shadow: 15px 15px 0px 0px rgba(0, 0, 0, 1); */
    transform: translate(0px, -5px);
  }
`;

const Frontmatter = styled.div<{ image?: boolean }>`
  padding: 0 0.5em;
  border-left: 1px solid black;
  width: ${(props) => (props.image ? '230' : '450')}px;

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
  height: 130px;
  margin: 0px 0 0 0;
`;

const Posted = styled.p`
  margin: 8px 0;
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
      <Link to={`/blog/${slug}`}>
        {image && <GatsbyImage image={image} alt="cover image" />}
      </Link>
      <Frontmatter image={!!image}>
        <PostLinkItem to={`/blog/${slug}`}>
          <h2>{title}</h2>
          <Posted>Posted: {date}</Posted>
          <Excerpt>{excerpt}</Excerpt>
        </PostLinkItem>
      </Frontmatter>
    </Card>
  );
};

export default PostCard;
