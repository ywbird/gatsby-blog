import React, { createContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Font from './fonts';
import Fonts from '../fonts';
import { useColorMode } from 'theme-ui';
import { ThemeProvider } from './contexts';

const Style = styled.div`
  margin: 0;
  color: var(--theme-ui-colors-text);
  background: var(--theme-ui-colors-background);
  /* padding-left: calc(100vw - 100%); */
  /* height: 100%; */
`;

const GlobalStyle = createGlobalStyle<{
  fonts: { main: string; code: string };
}>`
  :root{
    --main-font: ${(props) => props.fonts.main};
    --code-font: ${(props) => props.fonts.code};
  }
  body {
    margin: 0;
    position: relative;
    background-color: var(--theme-ui-colors-background);
  }
  html{
    height: 100%;
  }
  * {font-weight: 300 !important;}
  * strong {font-weight: 500 !important}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400 !important;
  }
`;

const Theme: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // const isWindow: boolean = typeof window !== 'undefined';
  // const darkMode: string =
  //   (isWindow && window.localStorage.getItem('darkMode')) || 'none';
  // if (darkMode === 'none')
  //   isWindow && window.localStorage.setItem('darkMode', 'true');
  // if (typeof document !== 'undefined')
  //   document.body.className =
  //     (darkMode === 'true' ? 'dark' : 'light') + '-mode';
  return (
    <Style>
      <ThemeProvider>
        <GlobalStyle fonts={Fonts} />
        {children}
      </ThemeProvider>
    </Style>
  );
};

// export const Head: HeadFC = () => <Font fonts={} />;

export default Theme;
