export interface IPost {
  id: string;
  rawMarkdownBody: string;
  html: string;
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: `${string}, ${number} ${string}` | `${number}-${number}-${number}`;
    tags: string[];
    series: String;
    metaDate: string;
  };
  tableOfContents: string;
}

export interface ITag {
  name: string;
  count: number;
}
