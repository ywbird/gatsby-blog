interface IPost {
  frontmatter: {
    title: string;
    slug: string;
    date: `${string} ${number}, ${number}`;
    tag?: string;
  };
  excerpt?: string;
  html: string;
  id: string;
}
