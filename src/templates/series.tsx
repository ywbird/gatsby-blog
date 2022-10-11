import React, { useState, useEffect } from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import PostList from '../components/postList';

interface DataProps {
  allMarkdownRemark: {
    nodes: IPost[];
  };
}

interface PageContextProps {
  limit: number;
  skip: number;
  series: string;
  seriesNumPages: number;
}

const CategoryPage = ({
  pageContext,
  data,
}: PageProps<DataProps, PageContextProps>) => {
  const { seriesNumPages } = pageContext;

  // const [posts, setPosts] = useState<IPosts[]>([]);
  const pagenation = {
    numPages: seriesNumPages,
  };

  return (
    <Layout pageTitle={pageContext.series}>
      <PostList
        posts={data.allMarkdownRemark.nodes}
        series={pageContext.series}
        {...pagenation}
      />
    </Layout>
  );
};

export const Head: HeadFC<{}, PageContextProps> = ({ pageContext }) => (
  <Seo title={pageContext.series} />
);

export default CategoryPage;

export const pageQuery = graphql`
  query SeriesPage($series: String!, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { series: { eq: $series } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          slug
          tag
        }
        excerpt
        id
      }
    }
  }
`;
