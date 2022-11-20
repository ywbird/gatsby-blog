import { graphql, useStaticQuery } from 'gatsby';
import { FC, ReactNode } from 'react';

import Header from '@/components/header';
import './layout.scss';
import Footer from '../footer';

interface props {
  pageTitle: string;
  children: ReactNode;
  w?: 'wide' | 'narrow';
}

const Layout: FC<props> = ({ pageTitle, w, children }) => {
  const data: {
    site: {
      siteMetadata: {
        title: string;
        nickname: string;
        github?: string;
        nav: {
          name: string;
          path: string;
          icon?: `${string}:${string}`;
        }[];
      };
    };
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          nickname
          github
          nav {
            name
            path
            icon
          }
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { nav, title, nickname, github },
    },
  } = data;

  return (
    <div>
      <Header links={nav} siteTitle={title} />
      <main className={`container ${w}`}>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
      <Footer nickname={nickname} github={github} />
    </div>
  );
};

export default Layout;
