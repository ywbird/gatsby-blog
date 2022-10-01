import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useColorMode } from 'theme-ui';

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
  color: var(--theme-ui-colors-text);
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
    color: var(--theme-ui-colors-text);
    pointer-events: none;
  }
  /* &:last-child::after {
    content: '';
  } */
`;

const NavLink = styled(Link)`
  color: var(--theme-ui-colors-text);
  font-family: var(--main-font);
  /* padding-right: 2rem;
  padding-left: 2rem; */
  text-decoration: none;
`;

const NavLinkA = styled.a`
  color: var(--theme-ui-colors-text);
  font-family: var(--main-font);
  /* padding-right: 2rem;
  padding-left: 2rem; */
  text-decoration: none;
`;

const HeaderElement = styled.div`
  border-bottom: 1px solid var(--theme-ui-colors-border);
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
  background-color: var(--theme-ui-colors-background);
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
  const [colorTheme, setColorTheme] = useColorMode();
  const nextColorMode = colorTheme === 'light' ? 'dark' : 'light';

  // const isWindow: boolean = typeof window !== 'undefined';
  // const isDocument: boolean = typeof document !== 'undefined';
  // const [colorTheme, setColorTheme] = useState<string>('dark');
  // useEffect(() => {
  //   setColorTheme(
  //     (isWindow && window.localStorage.getItem('darkMode')) || 'true'
  //   );

  //   if (isDocument && isWindow) {
  //     const darkMode = window.localStorage.getItem('darkMode');
  //     if (darkMode === 'true') {
  //       document.body.className = 'dark-mode';
  //     } else if (darkMode === 'false') {
  //       document.body.className = 'light-mode';
  //     }
  //   }
  // }, []);
  const toggle = () => {
    setColorTheme(nextColorMode);
    // if (isDocument && isWindow) {
    //   const mode = window.localStorage.getItem('darkMode') || 'false';
    //   if (mode === 'false') {
    //     setColorTheme('true');
    //     window.localStorage.setItem('darkMode', 'true');
    //     document.body.className = 'dark-mode';
    //   } else if (mode === 'true') {
    //     setColorTheme('false');
    //     window.localStorage.setItem('darkMode', 'false');
    //     document.body.className = 'light-mode';
    //   } else {
    //     window.localStorage.setItem('darkMode', 'true');
    //   }
    // }
  };
  // const toggle = () => {};

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
                {item?.url?.startsWith('https://') ? (
                  <NavLinkA href={item?.url ?? '/'}>{item?.name}</NavLinkA>
                ) : (
                  <NavLink to={item?.url ?? '/'}>{item?.name}</NavLink>
                )}
              </NavItem>
            ))}
          </NavLinks>
        </nav>
        <ToggleColorTheme onClick={toggle}>
          {colorTheme === 'dark'
            ? 'Dark'
            : colorTheme === 'light'
            ? 'Light'
            : 'Init'}
        </ToggleColorTheme>
      </HeaderLinks>
    </HeaderElement>
  );
};

export default Header;
