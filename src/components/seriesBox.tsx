import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SeriesNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 1em;
`;

const LinkColor = styled(Link)`
  color: var(--theme-ui-colors-text);
  text-decoration: none;
  &:visited {
    color: var(--theme-ui-colors-text);
  }
`;

const MuteLink = styled.span`
  color: var(--theme-ui-colors-mute);
  opacity: 80%;
  cursor: no-drop;
`;

const List = styled.ol`
  padding: 0 0 0 1.5em;
  margin: 0;

  li {
    &::marker {
      font-style: italic;
      color: var(--theme-ui-colors-mute);
    }
  }
`;

const ListItem = styled(Link)`
  color: var(--theme-ui-colors-text);
  text-decoration: none;
  &:visited {
    color: var(--theme-ui-colors-text);
  }
  &:hover {
    text-decoration: underline;
  }
  &#current-post {
    color: var(--theme-ui-colors-primary);
    font-weight: 400 !important;
  }
`;

const SeriesWrapper = styled.div`
  background-color: var(--theme-ui-colors-background-secondary);
  padding: 1em;
`;

const SeriesName = styled.h2`
  margin: 0 0 0.8em 0;
`;

const SeriesNumber = ({
  current,
  totalCount,
  previous,
  next,
}: {
  current: number;
  totalCount: number;
  previous: string;
  next: string;
}) => {
  return (
    <SeriesNumberWrapper>
      {previous ? (
        <LinkColor to={'/post/' + previous || '#'}>Previous</LinkColor>
      ) : (
        <MuteLink>Previous</MuteLink>
      )}
      <span>
        {current}/{totalCount}
      </span>
      {next ? (
        <LinkColor to={'/post/' + next || '#'}>Next</LinkColor>
      ) : (
        <MuteLink>Next</MuteLink>
      )}
    </SeriesNumberWrapper>
  );
};

const PostListDetails = styled.details`
  summary::marker {
    content: '⚫';
  }
  &[open] summary::marker {
    content: '⚪';
  }
`;

const Series: React.FC<{
  name: string;
  totalCount: number;
  current: number;
  next?: string;
  previous?: string;
  other: IPost[];
  slug: string;
}> = ({ name, totalCount, current, next, previous, other, slug }) => {
  return (
    <SeriesWrapper>
      <div>
        <SeriesName>{name}</SeriesName>
        <SeriesNumber
          current={current}
          totalCount={totalCount}
          previous={previous || ''}
          next={next || ''}
        />
      </div>

      <PostListDetails>
        <summary>Show List</summary>
        <List>
          {other.map((p, i) => (
            <li key={p.id}>
              {typeof window !== 'undefined' ? (
                <ListItem
                  id={slug === p.frontmatter.slug ? 'current-post' : ''}
                  to={'/post/' + p.frontmatter.slug}
                >
                  {p.frontmatter.title}
                </ListItem>
              ) : null}
            </li>
          ))}
        </List>
      </PostListDetails>
    </SeriesWrapper>
  );
};

export default Series;
