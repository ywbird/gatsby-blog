import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import PostCard from '../../components/postCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

interface DataProps {
  allMdx: {
    nodes: {
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
  };
}

const PostList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-self: center;
`;

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="">
      <PostList>
        {data.allMdx.nodes.map((node) => (
          <PostCard
            key={node.id}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.frontmatter.description}
            cover={node.frontmatter.cover.childImageSharp.gatsbyImageData}
          />
        ))}
      </PostList>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const pageQuery = graphql`
  query MyQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM D, YYY")
          slug
          description
          cover {
            childImageSharp {
              gatsbyImageData(width: 700, height: 300)
            }
          }
        }
        id
      }
    }
  }
`;
