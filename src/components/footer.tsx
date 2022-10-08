import { graphql, useStaticQuery } from 'gatsby';
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
  font-size: 15px;
  display: flex;
  flex-direction: column;
  color: var(--theme-ui-colors-text);
  justify-content: space-evenly;
  /* align-content: space-around; */

  @media only screen and (max-device-width: 1000px) {
    min-width: auto;
  }
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  /* width: 600px; */
  padding: 1em 0;
`;

const Link = styled.a`
  color: var(--theme-ui-colors-primary);
  text-decoration: none;
  &:hover {
    color: var(--theme-ui-colors-primary);
  }
`;

const Footer = () => {
  const data: Queries.FooterQuery = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          title
          github
          nickname
        }
      }
    }
  `);

  return (
    <FooterElement>
      <FooterInner>
        <CopyRight>
          © 2022 
          <Link href={`https://github.com/${data.site?.siteMetadata?.github}`}>
            {data.site?.siteMetadata?.nickname}
          </Link>
           powered by <Link href="https://github.com/ywbird/lotus">Lotus</Link>.
          All Rights Reserved.
        </CopyRight>
      </FooterInner>
    </FooterElement>
  );
};

export default Footer;
