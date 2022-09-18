import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface DataProps {
  currentPage: number;
  numPages: number;
}

const PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

const PagenationLink = styled(Link)`
  width: 30px;
  height: 30px;
  border: 0px;
  background-color: var(--button-color);
  border-radius: 3px;
  color: var(--text-color);
  text-decoration: none;
  display: grid;
  place-items: center;
  margin: 0.3em;
`;

const Pagenation: React.FC<DataProps> = ({ currentPage, numPages }) => {
  return (
    <PagenationWrapper>
      {Array.from({ length: numPages }).map((_, i) => (
        <PagenationLink key={i} to={i + 1 === 1 ? `/blog` : `/blog/${i + 1}`}>
          {i + 1}
        </PagenationLink>
      ))}
    </PagenationWrapper>
  );
};

export default Pagenation;
