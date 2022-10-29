import React from 'react';
import styled from 'styled-components';
import PostCard from './postCard';
import Pagenation from './pagination';

interface IData {
  posts?: IPost[];
  // pageContext: {
  //   limit: number;
  //   skip: number;
  //   numPages: number;
  //   currentPage: number;
  // };
  // currentPage: number;
  usePagination?: boolean;
  numPages?: number;
  series: string;
  // baseUrl?: string;
}

const Posts = styled.div`
  /* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
  grid-template-columns: 1fr;
  display: grid;
  gap: 20px;
  /* flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; */
  @media only screen and (max-device-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SeriesList: React.FC<IData> = ({
  posts,
  // currentPage,
  numPages,
  usePagination,
  series,
  // baseUrl,
}) => {
  return (
    <>
      <Posts>
        {posts &&
          posts.map((node, i) => (
            <PostCard
              key={node.id}
              slug={node.fields.slug}
              title={`${i + 1}. ${node.frontmatter.title}`}
              date={node.frontmatter.date}
              excerpt={node.excerpt || ''}
            />
          ))}
      </Posts>
      {usePagination === undefined && numPages ? (
        <Pagenation series={series} numPages={numPages} />
      ) : usePagination && numPages ? (
        <Pagenation series={series} numPages={numPages} />
      ) : (
        ''
      )}
    </>
  );
};

export default SeriesList;
