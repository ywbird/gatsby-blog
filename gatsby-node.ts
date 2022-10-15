import { GatsbyNode } from 'gatsby';
import path from 'path';

interface IData {
  data: {
    posts: {
      edges: {
        node: {
          frontmatter: {
            slug: string;
            series?: string;
          };
          id: string;
          html: string;
        };
      }[];
      tag: {
        name: string;
        totalCount: number;
      }[];
      series: {
        name: string;
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
      posts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { type: { ne: "about" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              series
            }
            id
            html
          }
        }
        tag: group(field: frontmatter___tag) {
          name: fieldValue
          totalCount
        }
        series: group(field: frontmatter___series) {
          name: fieldValue
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
  const numPages = Math.ceil(data.posts.edges.length / postPerPage);

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

  data.posts.edges.forEach(({ node }) => {
    const html = node.html;
    const slug = node.frontmatter.slug;
    const series = node.frontmatter.series;

    createPage({
      path: `/post/${slug}`,
      component: path.resolve('./src/templates/blogPost.tsx'),
      context: {
        id: node.id,
        seriesName: series,
        series: data.posts.series.find((s) => s.name === series),
        html,
      },
    });
  });

  // create tag page
  data.posts.tag.forEach((tag) => {
    const postPerPage = 18;
    const tagNumPages = Math.ceil(tag.totalCount / postPerPage);
    Array.from({ length: tagNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tag/${tag.name}` : `/tag/${tag.name}/${i + 1}`,
        component: path.resolve('./src/templates/tag.tsx'),
        context: {
          limit: postPerPage,
          skip: i * tagNumPages,
          tagNumPages,
          currentPage: i + 1,
          tag: tag.name,
        },
      });
    });
  });

  // create sereis page
  data.posts.series.forEach((series) => {
    const postPerPage = 18;
    const seriesNumPages = Math.ceil(series.totalCount / postPerPage);
    Array.from({ length: seriesNumPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/series/${series.name}`
            : `/series/${series.name}/${i + 1}`,
        component: path.resolve('./src/templates/series.tsx'),
        context: {
          limit: postPerPage,
          skip: i * seriesNumPages,
          seriesNumPages,
          currentPage: i + 1,
          series: series.name,
        },
      });
    });
  });

  // create tags page
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags.tsx'),
    context: {
      tags: data.posts.tag,
    },
  });

  // create tags page
  createPage({
    path: '/series',
    component: path.resolve('./src/templates/seriez.tsx'),
    context: {
      series: data.posts.series,
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
