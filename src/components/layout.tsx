import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface DataProps {
  pageTitle: string;
  children: React.ReactNode;
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

const Layout = ({ pageTitle, children }: DataProps) => {
  return (
    <Container>
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
