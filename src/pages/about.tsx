import { PageProps, graphql } from 'gatsby';

import Layout from '../components/layout';
import { IPost } from '@/global';

import './styles/about.scss';

interface DataProps {
  markdownRemark: IPost;
  site: { siteMetadata: { nickname: string } };
}

const AboutPage = ({ data }: PageProps<DataProps>) => {
  const {
    markdownRemark: { html },
    site: {
      siteMetadata: { nickname },
    },
  } = data;

  return (
    <Layout pageTitle={nickname}>
      <div className="about" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { about: { eq: true } }) {
      html
    }
    site {
      siteMetadata {
        nickname
      }
    }
  }
`;
