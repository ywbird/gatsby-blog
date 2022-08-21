import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

interface DataProps {
  pageTitle: string;
  children: React.ReactNode;
}

interface IData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavLinkItem = styled.li`
  padding-right: 2rem;
`;

const NavLinkText = styled.span`
  padding-right: 2rem;
`;

const SiteTitle = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`;

const Layout = ({ pageTitle, children }: DataProps) => {
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
      <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <Link to="/">
              <NavLinkText>Home</NavLinkText>
            </Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/about">
              <NavLinkText>About</NavLinkText>
            </Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/blog">
              <NavLinkText>Blog</NavLinkText>
            </Link>
          </NavLinkItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
