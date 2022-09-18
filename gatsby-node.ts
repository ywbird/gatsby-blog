import { GatsbyNode } from 'gatsby';
import path from 'path';

interface IData {
  data: {
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            slug: string;
          };
          id: string;
          body: string;
          internal: {
            contentFilePath: string;
          };
        };
      }[];
    };
  };
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const { data } = (await graphql(`
    query PostsPage {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)) as IData;
  // console.log(data);
  const postPerPage = 10;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/posts.tsx'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
