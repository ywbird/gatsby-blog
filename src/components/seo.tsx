import * as React from 'react';
import { graphql, useStaticQuery, HeadFC } from 'gatsby';

const Seo: React.FC<{ title: string }> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} - {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
