import React, { useState, useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PostList from '../components/postList';

interface DataProps {
  allMarkdownRemark: {
    nodes: IPost[];
  };
}

interface PageContextProps {
  limit: number;
  skip: number;
  numPages: number;
}

const CategoryPage = ({
  pageContext,
  data,
}: PageProps<DataProps, PageContextProps>) => {
  const { numPages } = pageContext;

  // const [posts, setPosts] = useState<IPosts[]>([]);

  const pagenation = {
    numPages,
  };

  return (
    <Layout pageTitle="">
      <PostList posts={data.allMarkdownRemark.nodes} {...pagenation} />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default CategoryPage;

export const pageQuery = graphql`
  query PostsPage($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { ne: "about" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          tag
        }
        excerpt
        id
      }
    }
  }
`;
