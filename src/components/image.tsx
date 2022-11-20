import { useMemo, FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

const Image: FC<
  {
    src: string;
  } & any
> = (props) => {
  const data: {
    images: {
      edges: {
        node: {
          relativePath: string;
          extension: string;
          publicURL: string;
          childImageSharp: { gatsbyImageData: IGatsbyImageData };
        };
      }[];
    };
  } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const rest: any = { ...props };

  const match = useMemo(
    () => data.images.edges.find(({ node }) => props.src === node.relativePath),
    [data, props.src],
  );

  if (!match) return null;

  const {
    node: { childImageSharp, publicURL, extension },
  } = match;

  rest.src = publicURL;
  const supportType = [`jpg`, `jpeg`, `png`, `webp`];
  if (!supportType.includes(extension) || !childImageSharp) {
    return <img alt={publicURL} {...rest} />;
  }

  const image = getImage(childImageSharp.gatsbyImageData) as IGatsbyImageData;

  return <GatsbyImage image={image} alt={publicURL || ``} {...rest} />;
};

export default Image;
