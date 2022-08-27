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

  & code {
    font-family: ${(props) => props.fonts.code};
  }
`;

const Theme = ({
  theme,
  children,
}: {
  theme: any;
  children: React.ReactNode;
}) => {
  return <Style {...theme}>{children}</Style>;
};

export default Theme;
