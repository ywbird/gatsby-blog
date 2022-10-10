import { GatsbyNode } from 'gatsby';
import path from 'path';

interface IData {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            slug: string;
            type?: 'post' | 'about';
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
    about: { html: string };
    site: { siteMetadata: { avatar?: string } };
  };
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const { data } = (await graphql(`
    query GatsbyNode {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { type: { ne: "about" } } }
      ) {
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
      about: markdownRemark(frontmatter: { type: { eq: "about" } }) {
        html
      }
      site {
        siteMetadata {
          avatar
        }
      }
    }
  `)) as IData;

  // console.log(data);
  const postPerPage = 16;
  const numPages = Math.ceil(data.allMarkdownRemark.edges.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve('./src/templates/posts.tsx'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
  // createPage({
  //   path: `/`,
  //   component: path.resolve('./src/templates/posts.tsx'),
  //   context: {
  //     limit: postPerPage,
  //     numPages,
  //   },
  // });

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
    Array.from({ length: tagNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tag/${tag.tag}` : `/tag/${tag.tag}/${i + 1}`,
        component: path.resolve('./src/templates/tag.tsx'),
        context: {
          limit: postPerPage,
          skip: i * tagNumPages,
          tagNumPages,
          currentPage: i + 1,
          tag: tag.tag,
        },
      });
    });
    // createPage({
    //   path: `/tag/${tag.tag}`,
    //   component: path.resolve('./src/templates/tag.tsx'),
    //   context: {
    //     limit: postPerPage,
    //     tagNumPages,
    //     tag: tag.tag,
    //   },
    // });
  });

  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags.tsx'),
    context: {
      tags: data.allMarkdownRemark.group,
    },
  });

  createPage({
    path: '/search',
    component: path.resolve('./src/templates/search.tsx'),
  });

  createPage({
    path: '/about',
    component: path.resolve('./src/templates/about.tsx'),
    context: {
      html: data.about.html,
      avatar: data.site.siteMetadata.avatar,
    },
  });
};
