import { graphql, useStaticQuery, Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const FooterElement = styled.footer`
  /* border-top: 1px solid var(--border-color); */
  /* place-items: center; */
  /* padding: 2em; */
  display: grid;
  place-items: center;
  /* height: 80px; */
  width: 100%;
  height: 140px;
  /* z-index: 2; */
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
  color: var(--theme-ui-colors-text);
  justify-content: space-evenly;
  /* align-content: space-around; */
`;

const CopyRight = styled.div`
  display: grid;
  place-items: center;
  width: 600px;
  padding: 1em 0;
`;

const Footer = () => {
  const data: Queries.FooterQuery = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          siteUrl
          title
          github
        }
      }
    }
  `);

  return (
    <FooterElement>
      <FooterInner>
        <CopyRight>
          © 2022 ywbird powered by Lotus. All Rights Reserved.
        </CopyRight>
      </FooterInner>
    </FooterElement>
  );
};

export default Footer;
