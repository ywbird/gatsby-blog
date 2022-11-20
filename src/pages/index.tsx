import { graphql, PageProps } from 'gatsby';

import PostList from '@/components/postList';
import Layout from '@/components/layout';
import { IPost } from '@/global';

interface DataType {
  allMarkdownRemark: {
    nodes: IPost[];
  };
}

const IndexPage = ({ data }: PageProps<DataType>) => {
  const posts = data?.allMarkdownRemark.nodes;

  return (
    <Layout pageTitle="Home Page" w="wide">
      <PostList posts={posts} />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;
