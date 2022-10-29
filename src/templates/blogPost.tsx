import { graphql, HeadFC, PageProps, Link } from 'gatsby';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ToTop from '../components/toTop';
import Giscus, { GiscusProps } from '@giscus/react';
import Series from '../components/seriesBox';

interface DataProps {
  post: IPost & {
    frontmatter: {
      metaDate: string;
    };
  };
  // series: {
  //   edges: {
  //     node: IPost;
  //   }[];
  //   series: {
  //     fieldValue: string;
  //     totalCount: number;
  //   }[];
  // };
  site: {
    siteMetadata: {
      giscus: GiscusProps;
    };
  };
}

const Style = {
  Content: styled.div`
    font-size: 16px;

    code {
      font-family: var(--code-font);
      border-radius: 2px;
    }

    pre[data-language] {
      /* padding: 1em; */
      margin: 0em 0 0.5em 0;
      /* overflow: ; */
      overflow-wrap: break-word;
      border-radius: 0.3em;
      line-height: 1.1;
      tab-size: 2;
      border-radius: 0;
      font-size: 15px;
      /* border-top-left-radius: 0; */

      /* &::after {
        content: ' ';
        display: block;
        width: 100%;
        height: 2.5rem;
        transform: translateY(-6rem);
        background-color: black;
      } */
    }

    *:not(pre) > code:not([data-language]) {
      background-color: var(--theme-ui-colors-background-secondary) !important;
      padding: 1px 5px;
      color: var(--theme-ui-colors-text);
      border-radius: 3px;
      font-size: 15px;
    }

    *:not(pre) > code[data-language] {
      padding: 2px 4px;
      font-size: 15px;
    }

    blockquote {
      /* padding-left: 40px; */
      border-left: 0.5em solid var(--theme-ui-colors-border);
      /* opacity: 80%; */
      background-color: var(--theme-ui-colors-background-secondary);
      color: var(--theme-ui-colors-text);
      padding: 0.1em 0 0.1em 30px;
      margin: 1em 0.5em;
      /* filter: invert(); */
    }

    /* .gatsby-highlight-code-line {
      background-color: #535547;
      display: block;
      /* margin-right: calc(-1em - 2px);
      margin-left: calc(-1em - 2px);
      margin: 0 calc(-1em - 3px);
      padding-right: 1em;
      padding-left: calc(0.75em + 2px);
      border-left: 0.3em solid #a6e22e;
    } */

    .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {
      /* background-color: #fff; */

      width: 750px;
      /* border-collapse: collapse; */
    }

    .gatsby-remark-code-title {
      display: block;
      margin-top: 0.5em;
      /* margin-bottom: -0.6rem; */
      padding: 0.6em 1.5rem;
      font-family: var(--code-font);
      font-size: 0.9em;
      font-weight: 400;

      background-color: var(--theme-ui-colors-background-secondary);
      border-bottom: 1px solid var(--theme-ui-colors-border);
      /* z-index: 0; */
    }

    /* :not(pre) > code.language-text {
    background-color: gray;
  } */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--theme-ui-colors-heading);
      &:hover {
        a.anchor {
          opacity: 100%;
          /* transform: translateX(-100%); */
        }
      }
    }

    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.35rem;
    }
    h5 {
      font-size: 1.2rem;
    }
    h6 {
      font-size: 1.05rem;
    }

    color: var(--theme-ui-colors-content);

    a {
      color: var(--theme-ui-colors-primary);
      text-decoration: none;
      transition: 0.08s cubic-bezier(0.9, 0.03, 0.31, 1.36);
      &:visited {
        color: var(--theme-ui-colors-primary);
      }
      &:hover {
        /* animation: link-line 0.1s ease-in; */
        border-bottom: 2px solid var(--theme-ui-colors-primary);
      }
      &.gatsby-resp-image-link:hover {
        border-bottom: 0;
      }
      &.anchor {
        /* transform: translateX(0); */
        opacity: 0;
        transition: 0.08s ease-in;
        fill: var(--theme-ui-colors-heading);
        &:hover {
          border-bottom: 0px;
        }
      }
    }
    table,
    td,
    th {
      border: 1px solid var(--theme-ui-colors-border);
      padding: 3px 4px;
    }
    thead {
      background-color: var(--theme-ui-colors-background-secondary);
      color: var(--theme-ui-colors-text);
      /* opacity: 80%; */
    }
    table {
      border-collapse: collapse;
      /* width: 200px; */
    }
    table > * {
      word-wrap: break-word;
      overflow-wrap: break-word;
      word-break: break-all;
    }

    img {
      max-width: 100%;
    }
  `,
  Meta: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: var(--main-font);
    p {
      color: var(--theme-ui-colors-text);
    }
  `,
};

const TagLinks = styled.p`
  display: flex;
  flex-direction: row;
  height: min-content;
`;

const TagLink = styled(Link)`
  padding: 1px 3px;
  margin: 0 2px;
  border-radius: 4px;
  border: 1px solid var(--theme-ui-colors-border);
  height: min-content;
  color: var(--theme-ui-colors-text);
  text-decoration: none;
`;

const BlogPost = ({
  data,
  pageContext,
}: PageProps<
  DataProps,
  {
    html: string;
    series: { slug: string; title: string; num: number }[];
  }
>) => {
  const {
    site: {
      siteMetadata: { giscus },
    },
  } = data;

  // const postSeries = data.series.series.find(
  //   (s) => s.fieldValue === pageContext.seriesName
  // );

  // const series = {
  //   name: postSeries?.fieldValue || '',
  //   totalCount: postSeries?.totalCount || 0,
  //   current: data.series.edges.findIndex((p) => p.node.id === data.post.id) + 1,
  //   slug: data.post.frontmatter.slug,
  //   next: data.series.edges[
  //     data.series.edges.findIndex((p) => p.node.id === data.post.id) + 1
  //   ]?.node?.frontmatter?.slug,
  //   previous:
  //     data.series.edges[
  //       data.series.edges.findIndex((p) => p.node.id === data.post.id) - 1
  //     ]?.node?.frontmatter?.slug,
  //   other: data.series.edges.map((e) => e.node),
  // };

  console.log(pageContext.series);
  const current =
    pageContext.series.find((s) => data.post.fields.slug === s.slug)?.num || 0;
  const series: {
    totalCount: number;
    current: number;
    next?: string;
    previous?: string;
    other: { title: String; slug: string }[];
    slug: string;
  } = {
    totalCount: pageContext.series.length,
    current,
    next: pageContext.series.find((s) => s.num === current + 1)?.slug,
    previous: pageContext.series.find((s) => s.num === current - 1)?.slug,
    other: pageContext.series,
    slug: data.post.fields.slug,
  };

  return (
    <Layout maxWidth={750} pageTitle={data.post.frontmatter.title}>
      {pageContext.series.length ? <Series {...series} /> : null}
      {data.post.frontmatter.date || data.post.frontmatter.tag ? (
        <Style.Meta>
          <p>{data.post.frontmatter.date}</p>
          {data.post.frontmatter.tag && (
            <TagLinks>
              {data.post.frontmatter.tag.map((tag, i) => (
                <span key={i}>
                  <TagLink to={`/tag/${tag}`}>{tag}</TagLink>
                </span>
              ))}
            </TagLinks>
          )}
        </Style.Meta>
      ) : null}
      <hr />
      <Style.Content>
        <MDXProvider>
          <div dangerouslySetInnerHTML={{ __html: pageContext.html }}></div>
        </MDXProvider>
      </Style.Content>
      <hr />
      <Giscus
        id="comment"
        repo={giscus.repo}
        repoId={giscus.repoId}
        category={giscus.category}
        categoryId={giscus.categoryId}
        mapping={giscus.mapping}
        strict={giscus.strict}
        reactionsEnabled={giscus.reactionsEnabled}
        emitMetadata={giscus.emitMetadata}
        inputPosition={giscus.inputPosition}
        theme={giscus.theme}
        lang={giscus.lang}
        loading="lazy"
      />

      <ToTop />
    </Layout>
  );
};

export const pageQuery = graphql`
  query Post($id: String) {
    post: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        metaDate: date
        tag
      }
      id
      excerpt
    }
    site {
      siteMetadata {
        giscus {
          category
          categoryId
          emitMetadata
          inputPosition
          lang
          mapping
          reactionsEnabled
          repo
          repoId
          strict
          theme
        }
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <Seo
    title={data.post.frontmatter.title}
    date={data.post.frontmatter.metaDate}
    description={data.post.excerpt}
    slug={'/post' + data.post.fields.slug}
  />
);

export default BlogPost;
