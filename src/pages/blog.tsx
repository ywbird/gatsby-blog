import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

interface DataProps {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        slug: string;
        date: `${string} ${number}, ${number}`;
      };
      id: string;
      excerpt: string;
    }[];
  };
}

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
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
          slug
          title
          date(formatString: "MMM D, YYY")
        }
        id
        excerpt(pruneLength: 90)
      }
    }
  }
`;
