import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './header';

interface DataProps {
  pageTitle: string;
  maxWidth?: number;
  children: React.ReactNode;
}

interface IData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Container = styled.div<{ maxWidth?: number }>`
  margin: auto;
  max-width: 1400px;
  font-family: sans-serif;
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

const Main = styled.main<{ maxWidth?: number }>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '700')}px;
  margin: auto;
`;

const Layout = ({ pageTitle, maxWidth, children }: DataProps) => {
  const data: IData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Header />
      <Main maxWidth={maxWidth}>
        <Heading>{pageTitle}</Heading>
        {children}
      </Main>
    </Container>
  );
};

export default Layout;
