import { PageProps, graphql } from 'gatsby';

import Layout from '@/components/layout';
import PostList from '@/components/postList';
import { IPost } from '@/global';

interface DataProps {
  allMarkdownRemark: {
    nodes: IPost[];
  };
}

interface PageContext {
  count: number;
  name: string;
}

const TagTemplate = ({
  data,
  pageContext,
}: PageProps<DataProps, PageContext>) => {
  const posts = data?.allMarkdownRemark.nodes;
  return (
    <Layout pageTitle={`${pageContext.name} • ${pageContext.count}`} w="wide">
      <PostList posts={posts} />
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPageQuery($name: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      limit: 1000
      filter: { frontmatter: { tags: { eq: $name } } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          tags
          title
        }
        excerpt
      }
    }
  }
`;
