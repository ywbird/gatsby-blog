import type { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
// import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

import { IPost, ITag } from './src/global';

const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);
const tagTemplate = path.resolve(`./src/templates/tag.tsx`);

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const result: {
    errors?: any;
    data?: { allMarkdownRemark: { nodes: IPost[]; tags: ITag[] } } | undefined;
  } = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            series
          }
        }
        tags: group(field: { frontmatter: { tags: SELECT } }) {
          name: fieldValue
          count: totalCount
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors,
    );
    return;
  }

  const posts = result?.data?.allMarkdownRemark.nodes;
  const tags = result?.data?.allMarkdownRemark.tags;

  if (posts && posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          series: post.frontmatter.series ?? ``,
        },
      });
    });
  }

  if (tags && tags.length > 0) {
    tags.forEach((tag) => {
      createPage({
        path: `/tag/${tag.name}`,
        component: tagTemplate,
        context: tag,
      });
    });
  }
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// export const onCreateNode: GatsbyNode['onCreateNode'] = ({
//   node,
//   actions,
//   getNode,
// }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode });

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     });
//   }
// };

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    const { createTypes } = actions;

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tags: [String]
      series: String
    }
    type Fields {
      slug: String
    }
  `);
  };
