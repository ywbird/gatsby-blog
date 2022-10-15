interface IPost {
  frontmatter: {
    title: string;
    slug: string;
    date: `${string} ${number}, ${number}`;
    tag?: string[];
    series?: string;
    blockComment: boolean;
  };
  excerpt?: string;
  rawMarkdownBody?: string;
  html?: string;
  id: string;
}
