import React from 'react';
import styled from 'styled-components';
import PostCard from './postCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from './layout';
import { graphql } from 'gatsby';
import Pagenation from './pagination';

interface IData {
  data: {
    frontmatter: {
      title: string;
      slug: string;
      date: `${string} ${number}, ${number}`;
      description: string;
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
    id: string;
  }[];
  // pageContext: {
  //   limit: number;
  //   skip: number;
  //   numPages: number;
  //   currentPage: number;
  // };
  // currentPage: number;
  numPages: number;
  tag?: string;
  // baseUrl?: string;
}

const Posts = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  display: grid;
  gap: 20px;
  /* flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; */
`;

const PostList: React.FC<IData> = ({
  data,
  // currentPage,
  numPages,
  tag,
  // baseUrl,
}) => {
  return (
    // <Layout pageTitle="">
    <>
      <Posts>
        {data.map((node, i) => (
          <PostCard
            // key={node.id}
            key={i}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.frontmatter.description}
            cover={
              node.frontmatter.cover?.childImageSharp.gatsbyImageData ??
              undefined
            }
          />
        ))}
      </Posts>
      <Pagenation tag={tag} numPages={numPages} />
    </>
    // </Layout>
  );
};

export default PostList;
