import { HeadFC, PageProps, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

interface PageContextProps {
  series: {
    name: string;
    totalCount: number;
  }[];
}

const SeriesEl = styled.h2`
  margin: 1em 0.1em;
  font-size: 20px;
`;

const LinkText = styled(Link)`
  color: var(--theme-ui-colors-text);
  text-decoration: none;

  transition: 0.08s cubic-bezier(0.9, 0.03, 0.31, 1.36);
  &:visited {
    color: var(--theme-ui-colors-text);
  }
  &:hover {
    /* animation: link-line 0.1s ease-in; */
    color: var(--theme-ui-colors-content);
  }
`;

const Series = ({ pageContext }: PageProps<{}, PageContextProps>) => {
  return (
    <Layout maxWidth={700} pageTitle="Series">
      <div>
        {pageContext.series.map((series) => (
          <SeriesEl key={series.name}>
            <LinkText to={`/series/${series.name}`}>
              {series.name} • {series.totalCount}
            </LinkText>
          </SeriesEl>
        ))}
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Series" />;

export default Series;
