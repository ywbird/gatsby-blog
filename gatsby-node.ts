import { GatsbyNode } from 'gatsby';
import path from 'path';

interface IData {
  post: {
    edges: {
      node: {
        frontmatter: {
          slug: string;
          series?: string;
          tag?: string[];
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
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const data = (
    await graphql(`
      query GatsbyNodePost {
        post: allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { type: { ne: "about" } } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                series
                tag
              }
              id
              html
            }
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
    `)
  ).data as IData;

  // console.log(data);
  const postPerPage = 16;
  const numPages = Math.ceil(data.post.edges.length / postPerPage);

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

  createPage({
    path: '/search',
    component: path.resolve('./src/templates/search.tsx'),
  });

  createPage({
    path: '/about',
    component: path.resolve('./src/templates/about.tsx'),
    context: {
      html: data.about?.html,
      avatar: data.site?.siteMetadata?.avatar,
    },
  });

  if (data.post.edges.map((e) => e.node.frontmatter.series).some((p) => !!p)) {
    const tags = (
      await graphql(`
        query GatsbyNodeTag {
          post: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { type: { ne: "about" } } }
          ) {
            tag: group(field: frontmatter___tag) {
              name: fieldValue
              totalCount
            }
          }
        }
      `)
    ).data as IData;

    // create tag page
    tags.post.tag.forEach((tag) => {
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

    // create tags page
    createPage({
      path: '/tags',
      component: path.resolve('./src/templates/tags.tsx'),
      context: {
        tags: tags.post.tag,
      },
    });
  }

  if (data.post.edges.map((e) => e.node.frontmatter.series).some((p) => !!p)) {
    const series = (
      await graphql(`
        query GatsbyNodeSeries {
          post: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { type: { ne: "about" } } }
          ) {
            series: group(field: frontmatter___series) {
              name: fieldValue
              totalCount
            }
          }
        }
      `)
    ).data as IData;
    // create sereis page
    series.post.series.forEach((series) => {
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

    // create series list page
    createPage({
      path: '/series',
      component: path.resolve('./src/templates/seriez.tsx'),
      context: {
        series: series.post.series,
      },
    });
  }

  data.post.edges.forEach(({ node }) => {
    const html = node.html;
    const slug = node.frontmatter?.slug;
    const series = node.frontmatter?.series;

    createPage({
      path: `/post/${slug}`,
      component: path.resolve('./src/templates/blogPost.tsx'),
      context: {
        id: node.id,
        seriesName: series,
        // series: data.post.series.find((s) => s.name === series),
        html,
      },
    });
  });
};
