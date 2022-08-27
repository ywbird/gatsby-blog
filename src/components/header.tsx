import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface IData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
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

const SiteDesc = styled.div`
  font-size: 1.5em;
  color: gray;
  font-weight: 400;
  margin: 0.1em 0;
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
          description
        }
      }
    }
  `);
  return (
    <header>
      <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      <SiteDesc>{data.site.siteMetadata.description}</SiteDesc>
      <nav>
        <NavLinks>
          {data.site.siteMetadata.navigation.map((item, i) => (
            <NavLinkItem key={i}>
              <Link to={item.url}>
                <NavLinkText>{item.name}</NavLinkText>
              </Link>
            </NavLinkItem>
          ))}
        </NavLinks>
      </nav>
    </header>
  );
};

export default Header;
