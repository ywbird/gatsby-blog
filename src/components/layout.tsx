import React from 'react';
import styled from 'styled-components';
import Header from './header';
import theme from '../themes/theme';
import Theme from './theme';

interface DataProps {
  pageTitle: string;
  maxWidth?: number;
  aside?: { node: React.FC<any>; props: Object };
  children: React.ReactNode;
}

const Container = styled.div`
  margin: auto;
  /* max-width: 1000px; */
  min-height: 100vh;
  /* height: 3000vh; */
`;

const Heading = styled.h1`
  color: var(--font-color);
  font-family: var(--main-font);
`;

const Main = styled.main<{ maxWidth?: number }>`
  max-width: ${(props) => props.maxWidth ?? '1000'}px;
  margin: auto;
  font-family: var(--main-font);
`;

const Layout: React.FC<DataProps> = ({
  pageTitle,
  maxWidth,
  aside,
  children,
}) => {
  return (
    <Theme theme={theme}>
      <Container>
        <Header />
        <Main maxWidth={maxWidth}>
          <Heading>{pageTitle}</Heading>
          {children}
        </Main>
        {aside && <aside.node {...aside.props} />}
      </Container>
    </Theme>
  );
};

export default Layout;
