import { graphql, HeadFC } from 'gatsby';
import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import TableOfContent from '../../components/toc';
import styled from 'styled-components';

interface IItem {
  url: string;
  title: string;
  items: IItem[];
}

interface DataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: `${string} ${number}, ${number}`;
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      toc: boolean;
    };
    tableOfContents: { items: IItem[] };
  };
}

const Content = styled.div`
  /* & pre {
    background: gray;
    color: white;
    padding: 10px;
    border-radius: 7px;
    code {
      overflow-x: auto;
      display: flex;
      word-wrap: break-word;
      word-break: normal;
    }
  } */
`;

const BlogPost: React.FC<{
  data: DataProps;
  children: React.ReactNode;
}> = ({ data, children }) => {
  const image: IGatsbyImageData | undefined = getImage(
    data.mdx.frontmatter.cover
  );

  const props = {
    aside: data.mdx.frontmatter.toc && {
      node: TableOfContent,
      props: { toc: data.mdx.tableOfContents },
    },
  };

  return (
    <Layout {...props} maxWidth={750} pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && <GatsbyImage image={image} alt="cover image" />}
      <hr />
      <Content>
        <MDXProvider>{children}</MDXProvider>
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        cover {
          childImageSharp {
            gatsbyImageData(width: 750, height: 400)
          }
        }
        toc
      }
      tableOfContents
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);
export default BlogPost;
