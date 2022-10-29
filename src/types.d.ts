interface IPost {
  frontmatter: {
    title: string;
    date: `${string} ${number}, ${number}`;
    tag?: string[];
  };
  fields: {
    slug: string;
  };
  excerpt?: string;
  rawMarkdownBody?: string;
  html?: string;
  id: string;
}
