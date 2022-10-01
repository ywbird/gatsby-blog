interface IPost {
  frontmatter: {
    title: string;
    slug: string;
    date: `${string} ${number}, ${number}`;
    description: string;
    tag?: string;
  };
  html: string;
  id: string;
}
