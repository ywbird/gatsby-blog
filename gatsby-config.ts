import type { GatsbyConfig } from 'gatsby';
import metaConfig from './gatsby-meta-config';
import theme from './src/gatsby-plugin-theme-ui/index';

const config: GatsbyConfig = {
  siteMetadata: metaConfig,
  pathPrefix: metaConfig.baseUrl || '',
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
        name: `assets`,
        path: `${__dirname}/assets/`,
      },
      __key: `assets`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: metaConfig.title,
        short_name: metaConfig.shortTitle || metaConfig.title,
        start_url: metaConfig.baseUrl || '/',
        background_color: theme.colors.background,
        theme_color: theme.colors.primary,
        display: `standalone`,
        icon: metaConfig.favicon || 'src/images/logo.png',
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
              theme: {
                default: 'One Dark Pro',
                parentSelector: {
                  'body.dark': 'One Dark Pro',
                  'body.light': 'GitHub Plus',
                },
              },
              extensions: ['material-theme', 'github-plus-theme'],
              inlineCode: {
                marker: '^%',
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
