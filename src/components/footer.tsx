import { Link } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const FooterElement = styled.footer`
  border-top: 1px solid var(--border-color);
  /* place-items: center; */
  /* padding: 2em; */
  display: grid;
  place-items: center;
  /* height: 80px; */
  width: 100%;
  height: 140px;
  z-index: 2;
  position: absolute;
  bottom: 0;
  /* isolation: isolate; */
`;

const FooterInner = styled.div`
  height: 140px;
  margin: auto;
  max-width: 1000px;
  /* display: grid; */
  /* place-items: center; */
  font-family: var(--main-font);
  font-size: 13px;
  display: flex;
  flex-direction: column;
  color: var(--font-color);
  justify-content: space-evenly;
  /* align-content: space-around; */
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 600px;
`;

const FooterLinks = styled.ol`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const FooterLink = styled.li`
  a {
    color: var(--font-color);
    text-decoration: none;
    margin-left: 1em;
    font-size: 1.2em;
  }
`;

const CopyRight = styled.div`
  display: grid;
  place-items: center;
  width: 600px;
  padding: 1em 0;
`;

const Logo = styled.div`
  font-size: 2em;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  /* font-family: var(--main-font); */
`;
const LogoImg = styled.div`
  padding-right: 5px;
`;

const Footer = () => {
  const data: Queries.FooterQuery = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          title
          github
        }
      }
    }
  `);
  return (
    <FooterElement>
      <FooterInner>
        <FooterRow>
          <Logo>
            <LogoImg>
              <StaticImage src="../images/logo.svg" alt="logo" height={40} />
            </LogoImg>
            {data.site?.siteMetadata?.title}
          </Logo>
          <FooterLinks>
            <FooterLink>
              <Link to="/sitemap/sitemap-index.xml">Sitemap</Link>
            </FooterLink>
            <FooterLink>
              <Link to={`//github.com/${data.site?.siteMetadata?.github}`}>
                Github
              </Link>
            </FooterLink>
          </FooterLinks>
        </FooterRow>
        <CopyRight>©2016-2022 Lotus. All Rights Reserved.</CopyRight>
      </FooterInner>
    </FooterElement>
  );
};

export default Footer;
