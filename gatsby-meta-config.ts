import { GiscusProps } from '@giscus/react';

interface MetaConfig {
  siteUrl: string;
  title: string;
  description: string;
  nickname: string;
  nav: { path: string; name: string; icon: string }[];
  github: string;
  giscus: GiscusProps;
  baseUrl?: string;
}

const meta: MetaConfig = {
  siteUrl: `https://ywbird.github.io/lotus-gatsby-theme`,
  title: `Lotus`,
  nickname: `고앵이`,
  github: `ywbird`,
  nav: [
    { name: `Home`, path: `/`, icon: `mdi:home` },
    { name: `About`, path: `/about`, icon: `mdi:account` },
  ],
  description: `Gatsby framework blog`,
  giscus: {
    repo: `ywbird/lotus-gatsby-theme`,
    repoId: `R_kgDOH2uwzg`,
    category: `Site Comment`,
    categoryId: `DIC_kwDOH2uwzs4CRvBI`,
    mapping: `title`,
    strict: `0`,
    reactionsEnabled: `1`,
    emitMetadata: `0`,
    inputPosition: `top`,
    lang: `en`,
  },
  baseUrl: `/lotus-gatsby-theme`,
};

meta.giscus.theme = `dark_dimmed`;

const metaConfig = { ...meta };

export default metaConfig;
