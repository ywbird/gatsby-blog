import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useColorMode } from 'theme-ui';
import { useThemeState } from './contexts';
import Image from './image';

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

const SiteTitleDiv = styled.div`
  margin: 1rem auto 1rem 0;
  @media only screen and (max-device-width: 600px) {
    margin: 0rem auto;
    height: 50px;
    width: 100%;
    /* display: flex;
    place-items: center; */
  }
  display: grid;
  place-items: center;
`;

const SiteTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: gray;
  font-weight: 700;
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
  /* @media only screen and (max-device-width: 600px) {
    position: sticky;
    width: 100%;
    top: 0;
  } */
`;

const NavItem = styled.li`
  margin: 0 2rem 0 0;
  &:first-child {
    padding-left: 0;
  }
  /* &::after {
    content: '|';
    margin: 0 0 0 2rem;
    white-space: pre;
    color: var(--theme-ui-colors-text);
    pointer-events: none;
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
  z-index: 2000;
  opacity: 90%;

  @media only screen and (max-device-width: 600px) {
    position: sticky;
    top: -57px;
  }
`;

const HeaderInner = styled.header`
  margin: auto;
  max-width: 1000px;
  /* max-height: 60px; */
  margin-top: 1rem;
  display: flex;
  /* align-content: center; */
  flex-direction: row;
  background-color: var(--theme-ui-colors-background);
  z-index: 1000;
  /* justify-content: space-between; */
  align-items: center;

  @media only screen and (max-device-width: 1000px) and (min-device-width: 601px) {
    min-width: max-content;
    padding: 0 1em;
  }

  @media only screen and (max-device-width: 600px) {
    flex-direction: column;
  }

  /* @media only screen and (max-device-width: 768px) {
    flex-direction: column;
  } */
`;

const ToggleColorTheme = styled.li`
  font-family: var(--main-font);
  margin: 0 2rem 0 0;
  width: 2.5em;
  margin-right: 0;
  cursor: pointer;
`;

const Header = () => {
  const [colorTheme, setColorTheme] = useThemeState();
  const nextColorMode = colorTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.remove(nextColorMode);
      document.body.classList.add(colorTheme);
    }
  }, [colorTheme]);

  const toggle = () => {
    setColorTheme(nextColorMode);
  };

  const data: Queries.HeaderQuery = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
          logo
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
      <HeaderInner>
        <SiteTitleDiv>
          <SiteTitle>
            <SiteLogo to="/">
              <Image
                src={data.site?.siteMetadata?.logo || ''}
                alt="logo"
                width="45"
              />
            </SiteLogo>
            <SiteTitleLink to="/">
              {data.site?.siteMetadata?.title}
            </SiteTitleLink>
          </SiteTitle>
        </SiteTitleDiv>
        {/* <HeaderLinks> */}
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
          <NavItem>
            <NavLink to="/search">Search</NavLink>
          </NavItem>
          <ToggleColorTheme onClick={toggle}>
            {colorTheme === 'dark'
              ? 'Dark'
              : colorTheme === 'light'
              ? 'Light'
              : 'Init'}
          </ToggleColorTheme>
        </NavLinks>
        {/* </HeaderLinks> */}
      </HeaderInner>
    </HeaderElement>
  );
};

export default Header;
