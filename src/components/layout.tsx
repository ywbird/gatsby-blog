import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Theme from './theme';
import Footer from './footer';

interface DataProps {
  pageTitle?: string;
  maxWidth?: number;
  aside?: { node: React.FC<any>; props: Object };
  children: React.ReactNode;
}

const Body = styled.div`
  margin: auto;

  /* max-width: 1000px; */
  min-height: 100vh;
  /* height: 3000vh; */
`;

const Container = styled.div`
  margin: 0 1em;
  padding-bottom: 160px;
`;

const Heading = styled.h1`
  color: var(--theme-ui-colors-text);
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
    <Theme>
      <Body>
        <Header />
        <Container>
          <Main maxWidth={maxWidth}>
            <Heading>{pageTitle ?? ''}</Heading>
            {children}
          </Main>
          {aside && <aside.node {...aside.props} />}
        </Container>
        <Footer />
      </Body>
    </Theme>
  );
};

export default Layout;
