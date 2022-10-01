import type { GatsbyConfig } from 'gatsby';

const siteUrl = 'https://ywbird.github.io/lotus/';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://ywbird.github.io/lotus`,
    title: `Lotus`,
    description: `Gatsby framework blog`,
    navigation: [
      {
        url: `/tags`,
        name: `Tags`,
      },
      {
        url: `/about`,
        name: `About`,
      },
    ],
    logo: `/icon.png`,
    github: `ywbird`,
    nickname: '고앵이',
    giscus: {
      repo: `ywbird/lotus`,
      repoId: `R_kgDOH2uwzg`,
      category: 'Site Comment',
      categoryId: 'DIC_kwDOH2uwzs4CRvBI',
      mapping: 'title',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'dark_dimmed',
      lang: 'en',
    },
  },
  pathPrefix: '/lotus',
  trailingSlash: 'never',
  jsxRuntime: 'automatic',
  graphqlTypegen: true,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-theme-ui`, // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: 'gatsby-remark-code-titles',
    //         options: {
    //           className: 'gatsby-remark-code-title',
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 750,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-autolink-headers`,
    //         options: {
    //           // icon: false,
    //           // className: `header-link`,
    //           // offsetY: `400`,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           classPrefix: 'language-',
    //           showLineNumbers: false,
    //         },
    //       },
    //     ],
    //   },
    // },
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
        path: `${__dirname}/blog/posts`,
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
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'gatsby-remark-code-title',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // className: `header-link`,
              // offsetY: `400`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans KR\:400,400i,700,700i`,
          `Noto Sans CJK KR\:400,400i,700,700i`,
          `Nanum Gothic\:400,400i,700,700i`,
          `Source Code Pro`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: { output: '/sitemap.xml' },
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }

    //         allSitePage {
    //           nodes {
    //             path
    //           }
    //         }
    //       }
    //     `,
    //     resolveSiteUrl: () => siteUrl,
    //     serialize: ({ path }: { path: string }) => {
    //       if (path.startsWith('/blog/')) {
    //         return {
    //           url: `${siteUrl}${path}`,
    //           changefreq: `never`,
    //           priority: 0.5,
    //         };
    //       } else {
    //         return {
    //           url: `${siteUrl}${path}`,
    //           changefreq: `weekly`,
    //           priority: 0.7,
    //         };
    //       }
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
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
                      description: string;
                      date: string;
                      slug: string;
                    };
                  }[];
                };
              };
            }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.description,
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
                      description
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
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xsl`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PFPXKNM',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: 'gatsby' },

        // // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        // Defaults to false
        // enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
  ],
};

export default config;
