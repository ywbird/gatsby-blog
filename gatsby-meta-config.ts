import { GiscusProps } from '@giscus/react';

interface MetaConfig {
  siteUrl: string;
  title: string;
  description: string;
  navigation: { url: string; name: string }[];
  logo: string;
  github: string;
  nickname: string;
  giscus: GiscusProps;
}

const meta: MetaConfig = {
  siteUrl: `https://ywbird.github.io/lotus-gatsby-theme`,
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
    repo: `ywbird/lotus-gatsby-theme`,
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
};

const metaConfig = { ...meta };

export default metaConfig;
