import React from 'react';
import styled from 'styled-components';
import Header from './header';
import light from '../themes/light';
import Theme from './theme';
import { useStaticQuery, graphql } from 'gatsby';

interface DataProps {
  pageTitle: string;
  maxWidth?: number;
  children: React.ReactNode;
}

const Container = styled.div`
  margin: auto;
  max-width: 700px;
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

const Main = styled.main<{ maxWidth?: number }>`
  max-width: ${(props) => props.maxWidth ?? '700'}px;
  margin: auto;
`;

const Layout = ({ pageTitle, maxWidth, children }: DataProps) => {
  return (
    <Theme theme={light}>
      <Container>
        <Header />
        <Main maxWidth={maxWidth}>
          <Heading>{pageTitle}</Heading>
          {children}
        </Main>
      </Container>
    </Theme>
  );
};

export default Layout;
