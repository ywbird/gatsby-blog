import { graphql, HeadFC, PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import PostList from '../components/postList';
import Seo from '../components/seo';

interface DataProps {
  allMarkdownRemark: {
    nodes: IPost[];
  };
}

const SearchInput = styled.input`
  background-color: transparent;
  border: 0;
  /* border-bottom: 1px solid var(--theme-ui-colors-text); */
  color: var(--theme-ui-colors-text);
  font-family: var(--theme-ui-fonts-main);
  font-size: 1em;
  width: 380px;
  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: var(--theme-ui-colors-mute);
    opacity: 80%;
    font-style: italic;
  }
`;

const SearchDiv = styled.div`
  width: 380px;
  position: relative;
  display: flex;
  &::after {
    content: ' ';
    background-color: var(--theme-ui-colors-text);
    transform: translateX(0px);
    width: 381px;
    height: 1px;
    bottom: -4px;
    position: absolute;
  }
`;

const SearchWapper = styled.div`
  display: grid;
  place-items: center;
  padding: 3em 0;
`;

const Search = ({ data }: PageProps<DataProps>) => {
  const [result, setResult] = useState<IPost[]>();
  useEffect(() => {
    setResult((prev) => (prev = data.allMarkdownRemark.nodes));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const SearchFilter = (node: {
      frontmatter: { title: string; description: string };
    }) => {
      const title = node.frontmatter.title;
      const desc = node.frontmatter.description;
      return (
        (title.toLowerCase().search(e.target.value) !== -1 &&
          title.toLowerCase().search(e.target.value) !== undefined) ||
        (desc.toLowerCase().search(e.target.value) !== -1 &&
          desc.toLowerCase().search(e.target.value) !== undefined)
      );
    };
    const temp: IPost[] = data.allMarkdownRemark.nodes.filter(SearchFilter);
    // console.log(temp);
    setResult((prev) => (prev = temp));
  };

  return (
    <Layout>
      <SearchWapper>
        <SearchDiv>
          <SearchInput
            type="text"
            onChange={onChange}
            placeholder="Search..."
          />
        </SearchDiv>
      </SearchWapper>
      <PostList posts={result} />
    </Layout>
  );
};

export default Search;

export const Head: HeadFC = () => <Seo title="Search" />;

export const pageQuery = graphql`
  query SearchPage {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          slug
          description
          tag
          cover {
            childImageSharp {
              gatsbyImageData(width: 200, height: 200)
            }
          }
        }
        id
      }
    }
  }
`;
