import { useState, ChangeEvent, FC, useEffect, ReactNode, useRef } from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/layout';
import { IPost } from '@/global';
import Article from '@/components/article';

import './styles/search.scss';
import { Icon } from '@iconify/react';

const SearchPage: FC<{ data: { allMarkdownRemark: { nodes: IPost[] } } }> = ({
  data,
}) => {
  const [result, setResult] = useState<IPost[]>([]);

  const [list, setList] = useState<ReactNode>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const SearchFilter = (node: IPost) => {
      const {
        target: { value: query },
      } = e;
      const title = node.frontmatter.title.toLowerCase();
      const excerpt = node.excerpt.toLowerCase();
      let tags: string[] = [];
      if (node.frontmatter.tags) {
        tags = node.frontmatter.tags.map((tag) => tag.toLowerCase());
      }
      const querys = query.toLowerCase().split(` `);

      if (query === ``) return false;

      const queryResult = querys
        .map((q) => {
          if (q === ``) return true;
          return title.includes(q) || excerpt.includes(q) || tags.includes(q);
        })
        .every((a) => a === true);

      return queryResult;
    };
    const temp: IPost[] = data.allMarkdownRemark.nodes.filter(SearchFilter);
    // console.log(temp);
    setResult(() => temp);
  };

  useEffect(() => {
    const posts = (
      <div className="search-result">
        {result.length > 0 ? (
          result.map((p, i) => <Article key={i} post={p} />)
        ) : (
          <div className="condition">No result...</div>
        )}
      </div>
    );
    setList(() => posts);
  }, [result]);

  const searchRef = useRef<HTMLInputElement | null>(null);

  return (
    <Layout w="wide" pageTitle="Search">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          onChange={onChange}
          placeholder="Search...(title, tag)"
          ref={searchRef}
        />
        <Icon
          className="search-icon"
          icon="fa6-solid:magnifying-glass"
          onClick={() => {
            searchRef.current?.focus();
          }}
        />
      </div>
      {list}
    </Layout>
  );
};

export default SearchPage;

export const pageQuery = graphql`
  query SearchPage {
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
        }
        excerpt
        id
      }
    }
  }
`;
