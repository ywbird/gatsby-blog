import React, { useState, useEffect } from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import PostList from '../components/postList';

interface IPosts {
  frontmatter: {
    title: string;
    slug: string;
    date: `${string} ${number}, ${number}`;
    description: string;
    tag?: string;
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  id: string;
}

interface DataProps {
  allMarkdownRemark: {
    nodes: IPosts[];
  };
}

interface PageContextProps {
  limit: number;
  skip: number;
  tag: string;
  tagNumPages: number;
}

const CategoryPage = ({
  pageContext,
  data,
}: PageProps<DataProps, PageContextProps>) => {
  const { tagNumPages } = pageContext;

  // const [posts, setPosts] = useState<IPosts[]>([]);

  let posts;

  if (typeof document === 'object') {
    const params = new URLSearchParams(document.location.search);
    const page = parseInt(params.get('page') ?? '1');
    // const tag = params.get('tag') ?? '';
    posts = data.allMarkdownRemark.nodes
      // .filter((node) => (tag ? node.frontmatter.tag === tag : true))
      .slice(
        (page - 1) * pageContext.limit,
        (page - 1) * pageContext.limit + pageContext.limit
      );
  }
  const pagenation = {
    numPages: tagNumPages,
  };

  return (
    <Layout pageTitle={pageContext.tag}>
      <PostList data={posts || []} tag={pageContext.tag} {...pagenation} />
    </Layout>
  );
};

export const Head: HeadFC<{}, PageContextProps> = ({ pageContext }) => (
  <Seo title={pageContext.tag} />
);

export default CategoryPage;

export const pageQuery = graphql`
  query CategoryPage($tag: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tag: { eq: $tag } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          slug
          description
          tag
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
