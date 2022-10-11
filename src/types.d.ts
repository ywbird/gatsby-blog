interface IPost {
  frontmatter: {
    title: string;
    slug: string;
    date: `${string} ${number}, ${number}`;
    tag?: string;
    series?: string;
    series_index?: number;
  };
  excerpt?: string;
  rawMarkdownBody?: string;
  html?: string;
  id: string;
}
