import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

interface DataProps {
  allMdx: {
    edges: {
      node: {
        frontmatter: {
          slug: string;
        };
      };
    }[];
  };
}

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.edges.map((edge, i) => (
          <li key={i}>{edge.node.frontmatter.slug}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const pageQuery = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`;
