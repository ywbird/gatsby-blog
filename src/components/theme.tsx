import React from 'react';
import styled from 'styled-components';

const Style = styled.div<{
  fonts: { main: string; code: string };
  colors: {
    light: { text: string; background: string };
    dark: { text: string; background: string };
  };
}>`
  font-family: ${(props) => props.fonts.main};
  color: ${(props) => props.colors.light.text};
  background: ${(props) => props.colors.light.background};

  &.dark {
    color: ${(props) => props.colors.dark.text};
    background: ${(props) => props.colors.dark.background};
  }

  code {
    font-family: ${(props) => props.fonts.code};
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  padding-left: calc(100vw - 100%);
`;

const Theme: React.FC<{
  theme: any;
  children: React.ReactNode;
}> = ({ theme, children }) => {
  return <Style {...theme}>{children}</Style>;
};

export default Theme;
