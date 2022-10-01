import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '../themes/prism-dracula.css';
import Font from './fonts';
import { createContext } from 'react';

const Style = styled.div<{
  fonts: { main: string; code: string };
  colors: {
    light: { text: string; background: string; border: string };
    dark: { text: string; background: string; border: string };
  };
}>`
  margin: 0;
  color: var(--theme-ui-colors-text);
  background: var(--theme-ui-colors-background);
  /* padding-left: calc(100vw - 100%); */
  /* height: 100%; */
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    position: relative;
    background-color: var(--theme-ui-colors-background);
  }
  html{
    height: 100%;
  }
`;

const Theme: React.FC<{
  theme: any;
  children: React.ReactNode;
}> = ({ theme, children }) => {
  // const isWindow: boolean = typeof window !== 'undefined';
  // const darkMode: string =
  //   (isWindow && window.localStorage.getItem('darkMode')) || 'none';
  // if (darkMode === 'none')
  //   isWindow && window.localStorage.setItem('darkMode', 'true');
  // if (typeof document !== 'undefined')
  //   document.body.className =
  //     (darkMode === 'true' ? 'dark' : 'light') + '-mode';
  return (
    <Style {...theme}>
      <GlobalStyle {...theme} />
      {children}
    </Style>
  );
};

// export const Head: HeadFC = () => <Font fonts={} />;

export default Theme;
