import { graphql, Link, useStaticQuery, StaticQueryDocument } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { globalHistory } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';

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
  font-size: 2rem;
  color: gray;
  font-weight: 700;
  margin: 1rem auto 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SiteTitleLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  font-family: var(--main-font);
`;

const SiteLogo = styled(Link)`
  display: flex;
  flex-direction: column;
  padding-right: 7px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavItem = styled.li`
  margin: 0 2rem 0 0;
  &:first-child {
    padding-left: 0;
  }
  &::after {
    content: '|';
    margin: 0 0 0 2rem;
    white-space: pre;
    color: var(--font-color);
    pointer-events: none;
  }
  /* &:last-child::after {
    content: '';
  } */
`;

const NavLink = styled(Link)`
  color: var(--font-color);
  font-family: var(--main-font);
  /* padding-right: 2rem;
  padding-left: 2rem; */
  text-decoration: none;
`;

const HeaderElement = styled.div`
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  opacity: 90%;
`;

const HeaderLinks = styled.header`
  margin: auto;
  max-width: 1000px;
  /* max-height: 60px; */
  margin-top: 1rem;
  display: flex;
  /* align-content: center; */
  flex-direction: row;
  background-color: var(--background-color);
  z-index: 1;
  /* justify-content: space-between; */
  align-items: baseline;
`;

const ToggleColorTheme = styled.div`
  font-family: var(--main-font);
  width: 2.5em;
  cursor: pointer;
`;

const Header = () => {
  const [colorTheme, setColorTheme] = useState<string>('dark');
  const isWindow: boolean = typeof window !== 'undefined';
  // const isDocument: boolean = typeof document !== 'undefined';
  useEffect(() => {
    setColorTheme((isWindow && window.localStorage.getItem('mode')) || 'dark');
    if (typeof document !== 'undefined')
      document.body.className =
        ((isWindow && window.localStorage.getItem('mode')) || 'light') +
        '-mode';
  }, [colorTheme]);
  const toggle = () => {
    const mode = (isWindow && window.localStorage.getItem('mode')) || 'light';
    if (mode === 'light') {
      isWindow && window.localStorage.setItem('mode', 'dark');
      setColorTheme('dark');
      if (typeof document !== 'undefined')
        document.body.className = 'dark-mode';
    } else if (mode === 'dark') {
      isWindow && window.localStorage.setItem('mode', 'light');
      setColorTheme('light');
      if (typeof document !== 'undefined')
        document.body.className = 'light-mode';
    }
  };

  const data: Queries.HeaderQuery = useStaticQuery(graphql`
    query Header {
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
    <HeaderElement>
      <HeaderLinks>
        <SiteTitle>
          <SiteLogo to="/">
            <StaticImage src="../images/logo.svg" alt="logo" width={40} />
          </SiteLogo>
          <SiteTitleLink to="/">{data.site?.siteMetadata?.title}</SiteTitleLink>
        </SiteTitle>
        <nav>
          <NavLinks>
            {data.site?.siteMetadata?.navigation?.map((item, i) => (
              <NavItem key={i}>
                <NavLink to={item?.url ?? '/'}>{item?.name}</NavLink>
              </NavItem>
            ))}
          </NavLinks>
        </nav>
        <ToggleColorTheme onClick={toggle}>
          {colorTheme === 'dark' ? 'Dark' : 'Light'}
        </ToggleColorTheme>
      </HeaderLinks>
    </HeaderElement>
  );
};

export default Header;
