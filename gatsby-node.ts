import { GatsbyNode } from 'gatsby';
import path from 'path';

interface IData {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            slug: string;
          };
          id: string;
          html: string;
        };
      }[];
      group: {
        tag: string;
        totalCount: number;
      }[];
    };
  };
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const { data } = (await graphql(`
    query Posts {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
            html
          }
        }
        group(field: frontmatter___tag) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)) as IData;

  // console.log(data);
  const postPerPage = 16;
  const numPages = Math.ceil(data.allMarkdownRemark.edges.length / postPerPage);

  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/` : `/?page=${i + 1}`,
  //     component: path.resolve('./src/templates/posts.tsx'),
  //     context: {
  //       limit: postPerPage,
  //       skip: i * postPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // });
  createPage({
    path: `/`,
    component: path.resolve('./src/templates/posts.tsx'),
    context: {
      limit: postPerPage,
      numPages,
    },
  });

  data.allMarkdownRemark.edges.forEach(async ({ node }) => {
    const html = node.html;
    const slug = node.frontmatter.slug;

    createPage({
      path: `/post/${slug}`,
      component: path.resolve('./src/templates/blogPost.tsx'),
      context: {
        id: node.id,
        html,
      },
    });
  });

  data.allMarkdownRemark.group.forEach((tag) => {
    const postPerPage = 18;
    const tagNumPages = Math.ceil(tag.totalCount / postPerPage);
    // Array.from({ length: categoryNumPages }).forEach((_, i) => {
    //   createPage({
    //     path:
    //       i === 0
    //         ? `/category/${category.tag}`
    //         : `/category/${category.tag}/${i + 1}`,
    //     component: path.resolve('./src/templates/category.tsx'),
    //     context: {
    //       limit: postPerPage,
    //       skip: i * categoryNumPages,
    //       categoryNumPages,
    //       currentPage: i + 1,
    //       tag: category.tag,
    //     },
    //   });
    // });
    createPage({
      path: `/tag/${tag.tag}`,
      component: path.resolve('./src/templates/tag.tsx'),
      context: {
        limit: postPerPage,
        tagNumPages,
        tag: tag.tag,
      },
    });
  });

  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags.tsx'),
    context: {
      tags: data.allMarkdownRemark.group,
    },
  });
};
