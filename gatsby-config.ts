import type { GatsbyConfig } from 'gatsby';
import path from 'path';
import metaConfig from './gatsby-meta-config';

const config: GatsbyConfig = {
  siteMetadata: metaConfig,
  pathPrefix: metaConfig.baseUrl || ``,
  trailingSlash: `never`,
  jsxRuntime: `automatic`,
  graphqlTypegen: false,
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-slug`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: path.resolve(__dirname, `blog`, `_posts`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
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
          // `gatsby-remark-images-zoom`,
          {
            resolve: `gatsby-remark-code-titles`,
            options: {
              className: `gatsby-remark-code-title`,
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
                default: `One Dark Pro`,
                parentSelector: {
                  'body.dark': `One Dark Pro`,
                  'body.light': `JetJet-Light`,
                },
              },
              extensions: [`material-theme`, `jetjet-theme`],
              inlineCode: {
                marker: `^%`,
              },
            },
          },
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              active: true,
              class: `emoji-icon`,
              size: 64,
              styles: {
                display: `inline`,
                margin: `0`,
                'margin-top': `1px`,
                position: `relative`,
                top: `5px`,
                width: `20px`,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans KR:300,300i,400,400i,500,500i`,
          `Noto Sans CJK KR:300,300i,400,400i,500,500i`,
          `Nanum Gothic:300,300i,500,500i`,
          `Source Code Pro`,
        ],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-PFPXKNM`,
        includeInDevelopment: false,
      },
    },
    // `gatsby-remark-responsive-iframe`,
  ],
};

if (process.env.NODE_ENV === `development`) {
  config.plugins?.push({
    resolve: `gatsby-source-filesystem`,
    options: {
      path: path.resolve(__dirname, `blog`, `_drafts`),
      name: `markdown-pages`,
    },
  });
}

export default config;
