interface IPost {
  frontmatter: {
    title: string;
    slug: string;
    date: `${string} ${number}, ${number}`;
    tag?: string;
  };
  excerpt?: string;
  rawMarkdownBody?: string;
  html?: string;
  id: string;
}
