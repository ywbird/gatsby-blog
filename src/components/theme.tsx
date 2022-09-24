import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import '../themes/prism-dracula.css';
import { HeadFC } from 'gatsby';
import Font from './fonts';

const Style = styled.div<{
  fonts: { main: string; code: string };
  colors: {
    light: { text: string; background: string; border: string };
    dark: { text: string; background: string; border: string };
  };
}>`
  margin: 0;
  color: var(--font-color);
  background: var(--background-color);
  /* padding-left: calc(100vw - 100%); */
  /* height: 100%; */
`;

interface IColorTheme {
  text: string;
  content: string;
  link: string;
  background: string;
  border: string;
  primary: string;
  heading: string;
  button: string;
}

const GlobalStyle = createGlobalStyle<{
  fonts: { main: string; code: string };
  colors: {
    light: IColorTheme;
    dark: IColorTheme;
  };
}>`
  :root {
    
    --main-font: ${(props) => props.fonts.main};
    --code-font: ${(props) => props.fonts.code};
  }
  .light-mode {
    --font-color: ${(props) => props.colors.light.text};
    --content-color: ${(props) => props.colors.light.content};
    --link-color: ${(props) => props.colors.light.link};
    --background-color: ${(props) => props.colors.light.background};
    --border-color: ${(props) => props.colors.light.border};
    --primary-color: ${(props) => props.colors.light.primary};
    --heading-color: ${(props) => props.colors.light.heading};
    --button-color: ${(props) => props.colors.light.button};
  }
  .dark-mode {
    --font-color: ${(props) => props.colors.dark.text};
    --content-color: ${(props) => props.colors.dark.content};
    --link-color: ${(props) => props.colors.dark.link};
    --background-color: ${(props) => props.colors.dark.background};
    --border-color: ${(props) => props.colors.dark.border};  
    --primary-color: ${(props) => props.colors.dark.primary};
    --heading-color: ${(props) => props.colors.dark.heading};
    --button-color: ${(props) => props.colors.dark.button};
  }
  body {
    margin: 0;
    position: relative;
    background-color: var(--background-color);
  }
  html{
    height: 100%;
  }
`;

const Theme: React.FC<{
  theme: any;
  children: React.ReactNode;
}> = ({ theme, children }) => {
  const isWindow: boolean = typeof window !== 'undefined';
  const mode = (isWindow && window.localStorage.getItem('mode')) || 'light';
  if (typeof document !== 'undefined') document.body.className = mode + '-mode';
  return (
    <Style {...theme}>
      <GlobalStyle {...theme} />
      {children}
    </Style>
  );
};

// export const Head: HeadFC = () => <Font fonts={} />;

export default Theme;
