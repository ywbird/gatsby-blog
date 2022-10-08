import type { GatsbyConfig } from 'gatsby';
import metaConfig from './gatsby-meta-config';

const config: GatsbyConfig = {
  siteMetadata: metaConfig,
  pathPrefix: '/lotus-gatsby-theme',
  trailingSlash: 'never',
  jsxRuntime: 'automatic',
  graphqlTypegen: true,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path:
          process.env.NODE_ENV === 'development'
            ? `${__dirname}/blog/`
            : `${__dirname}/blog/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              margin: 36,
              scrollOffset: 0,
              background: 'rgba(0,0,0,0.5)',
            },
          },
          // `gatsby-remark-images-zoom`,
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'gatsby-remark-code-title',
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // className: `header-link`,,
              isIconAfterHeader: true,
              // offsetY: `400`,
            },
          },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: 'language-',
          //     showLineNumbers: false,
          //     inlineCodeMarker: '%',
          //   },
          // },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'One Dark Pro',
              extensions: ['material-theme'],
              inlineCode: {
                marker: '%',
              },
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans KR\:300,300i,400,400i,500,500i`,
          `Noto Sans CJK KR\:300,300i,400,400i,500,500i`,
          `Nanum Gothic\:300,300i,500,500i`,
          `Source Code Pro`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: { output: '/sitemap.xml' },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: metaConfig.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMarkdownRemark },
            }: {
              query: {
                site: {
                  siteMetadata: {
                    title: string;
                    description: string;
                    siteUrl: string;
                  };
                };
                allMarkdownRemark: {
                  nodes: {
                    html: string;
                    frontmatter: {
                      title: string;
                      excerpt: string;
                      date: string;
                      slug: string;
                    };
                  }[];
                };
              };
            }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  excerpt: node.frontmatter.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    html
                    frontmatter {
                      excerpt
                      slug
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'RSS Feed',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/post/',
            // optional configuration to specify external rss feed, such as feedblotuslourner
            link: 'https://feeds.feedburner.com/ywbird/lotus',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: metaConfig.siteUrl,
        sitemap: `${metaConfig.siteUrl}/sitemap.xsl`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PFPXKNM',
        includeInDevelopment: false,
      },
    },
  ],
};

export default config;
