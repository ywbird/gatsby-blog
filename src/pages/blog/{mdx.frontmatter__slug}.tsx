import { graphql, HeadFC } from 'gatsby';
import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
    };
  };
}

const BlogPost = ({
  data,
  children,
}: {
  data: DataProps;
  children: React.ReactNode;
}) => {
  const image: IGatsbyImageData | undefined = getImage(
    data.mdx.frontmatter.cover
  );
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && <GatsbyImage image={image} alt="cover image" />}
      <hr />
      <MDXProvider>{children}</MDXProvider>
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
            gatsbyImageData(width: 700, height: 400)
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);
export default BlogPost;
