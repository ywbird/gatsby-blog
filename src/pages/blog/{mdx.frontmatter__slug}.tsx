import { graphql, HeadFC } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

interface DataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: `${string} ${number}, ${number}`;
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
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);
export default BlogPost;
