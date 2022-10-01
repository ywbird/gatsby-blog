interface IPost {
  frontmatter: {
    title: string;
    slug: string;
    date: `${string} ${number}, ${number}`;
    description: string;
    tag?: string;
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
  html: string;
  id: string;
}
