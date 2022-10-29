import { GatsbyNode } from 'gatsby';
import path from 'path';

interface IData {
  allMarkdownRemark: {
    edges: {
      node: IPost;
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

  const { data }: { error?: any; data?: IData } = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date }
        filter: { frontmatter: { type: { ne: "about" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tag
            }
            id
            rawMarkdownBody
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
  `);
  const edges = data?.allMarkdownRemark.edges;

  const getSeries = (target: string) => {
    const splitedSlug = target
      .split('/')
      [target.split('/').length - 1].split('_');
    if (splitedSlug.length >= 3) return 0;

    const seriesNum = splitedSlug[splitedSlug.length - 1].split('/').join('');
    const isNum = !/[^0-9]/g.test(seriesNum);

    if (isNum) return parseInt(seriesNum, 10);
    return 0;
  };

  if (typeof edges !== 'undefined') {
    // console.log(data);
    const postPerPage = 16;
    const numPages = Math.ceil(edges.length / postPerPage);
    const postListTemplate = path.resolve('./src/templates/posts.tsx');
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: postListTemplate,
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });

    createPage({
      path: '/search',
      component: path.resolve('./src/templates/search.tsx'),
    });

    createPage({
      path: '/about',
      component: path.resolve('./src/templates/about.tsx'),
      context: {
        html: data?.about.html,
        avatar: data?.site.siteMetadata.avatar,
      },
    });

    let tag: { name: string; totalCount: number }[] = [];
    edges
      .flatMap((x) => x.node.frontmatter.tag)
      .forEach((s) => {
        const find = tag.find((f) => f.name === s);
        if (find) {
          tag[tag.findIndex((fd) => fd.name === s)].totalCount++;
        } else {
          tag.push({ name: s || '', totalCount: 0 });
        }
      });

    // create tag page
    tag.forEach((tag) => {
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
        tags: tag,
      },
    });

    edges.forEach(({ node }) => {
      const { html } = node;
      const { slug } = node.fields;

      const series = [];
      if (getSeries(slug)) {
        const seriesEdges = edges.filter((edge) =>
          getSeries(edge.node.fields.slug)
        );
        if (seriesEdges.length) {
          for (const e of seriesEdges) {
            const num = getSeries(e.node.fields.slug);
            if (num) {
              series.push({
                slug: e.node.fields.slug,
                title: e.node.frontmatter.title,
                num,
              });
            }
          }

          series.sort((a, b) => a.num - b.num);
        }
      }

      createPage({
        path: slug,
        component: path.resolve('./src/templates/blogPost.tsx'),
        context: {
          id: node.id,
          series,
          html,
        },
      });
    });
  }
};
