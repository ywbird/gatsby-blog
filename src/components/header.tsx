import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { globalHistory } from '@reach/router';

interface IData {
  site: {
    siteMetadata: {
      title: string;
      navigation: {
        name: string;
        url: string;
      }[];
    };
  };
}

const SiteTitle = styled.h1`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0 1rem 0;
`;

const SiteTitleLink = styled(Link)`
  text-decoration: none;
  color: gray;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavItem = styled.li`
  padding: 0 1rem;
  &:first-child {
    padding-left: 0;
  }
  &::after {
    content: ' |';
    white-space: pre;
    color: black;
    pointer-events: none;
  }
  &:last-child::after {
    content: '';
  }
`;

const NavLink = styled(Link)<{ to: string; path?: string }>`
  color: ${(props) => (props.path === props.to ? 'black' : 'rebbecapurple')};
  padding-right: 2rem;
  text-decoration: none;
`;

const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Header = () => {
  const data: IData = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          navigation {
            name
            url
          }
        }
      }
    }
  `);
  return (
    <HeaderTag>
      <SiteTitle>
        <SiteTitleLink to="/">{data.site.siteMetadata.title}</SiteTitleLink>
      </SiteTitle>
      <nav>
        <NavLinks>
          {data.site.siteMetadata.navigation.map((item, i) => (
            <NavItem key={i}>
              <NavLink to={item.url} path={globalHistory.location.pathname}>
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavLinks>
      </nav>
    </HeaderTag>
  );
};

export default Header;
