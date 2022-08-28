import React from 'react';
import styled from 'styled-components';
import Header from './header';
import light from '../themes/light';
import Theme from './theme';
import '../themes/prism-dark.css';

interface DataProps {
  pageTitle: string;
  maxWidth?: number;
  aside?: { node: React.FC<any>; props: Object };
  children: React.ReactNode;
}

const Container = styled.div`
  margin: auto;
  max-width: 1000px;
  /* height: 3000vh; */
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

const Main = styled.main<{ maxWidth?: number }>`
  max-width: ${(props) => props.maxWidth ?? '1000'}px;
  margin: auto;
`;

const Layout: React.FC<DataProps> = ({
  pageTitle,
  maxWidth,
  aside,
  children,
}) => {
  return (
    <Theme theme={light}>
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
