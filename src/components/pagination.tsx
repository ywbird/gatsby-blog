import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface DataProps {
  // currentPage: number;
  numPages: number;
  tag?: string;
  series?: string;
  // baseUrl?: string;
}

const PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
`;

const PagenationLink = styled(Link)`
  width: 30px;
  height: 30px;
  border: 0px;
  /* background-color: var(--background-color); */
  border-radius: 2px;
  border: 1px solid var(--theme-ui-colors-border);
  color: var(--theme-ui-colors-text);
  text-decoration: none;
  display: grid;
  place-items: center;
  margin: 0.15em;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const Pagenation: React.FC<DataProps> = ({
  // currentPage,
  numPages,
  tag,
  series,
  // baseUrl,
}) => {
  // const params = new URLSearchParams(document.location.search);
  // const tag = params.get('tag') ?? '';
  return (
    <PagenationWrapper>
      {Array.from({ length: numPages }).map((_, i) => (
        <PagenationLink
          key={i}
          to={
            i + 1 === 1
              ? `/${tag ? `tag/${tag}` : series ? `series/${series}` : null}`
              : `/${tag ? `tag/${tag}/` : series ? `series/${series}/` : null}${
                  i + 1
                }`
          }
        >
          {i + 1}
        </PagenationLink>
      ))}
    </PagenationWrapper>
  );
};

export default Pagenation;
