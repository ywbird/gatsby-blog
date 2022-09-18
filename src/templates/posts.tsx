import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import PostList from '../components/postList';

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

interface PageContextProps {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
}

const BlogPage = ({
  pageContext,
  data,
}: PageProps<DataProps, PageContextProps>) => {
  const { currentPage, numPages } = pageContext;
  const pagenation = {
    currentPage,
    numPages,
  };

  return (
    <Layout pageTitle="">
      <PostList data={data.allMdx.nodes} {...pagenation} />
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage($limit: Int!, $skip: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          slug
          description
          cover {
            childImageSharp {
              gatsbyImageData(width: 200, height: 200)
            }
          }
        }
        id
      }
    }
  }
`;
