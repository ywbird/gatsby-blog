import { graphql, PageProps, Link, HeadFC } from 'gatsby';
import Giscus, { GiscusProps, Theme } from '@giscus/react';
import { useState, useEffect } from 'react';
import { useColorMode } from 'theme-ui';

import Layout from '@/components/layout';
import { IPost } from '@/global';
import Article from '@/components/article';
import ToTop from '@/components/toTop';
import Seo from '@/components/seo';
import SeriesBox from '@/components/seriesBox';

import './blog-post.scss';

interface DataProps {
  markdownRemark: IPost;
  series: {
    nodes: IPost[];
    count: number;
  };
  previous: IPost;
  next: IPost;
  site: {
    siteMetadata: {
      url: string;
      baseUrl: string;
      giscus: GiscusProps & { theme: { dark: Theme; light: Theme } };
    };
  };
}

interface ContextProps {
  series: String;
}

const isDocument = typeof document !== `undefined`;

const BlogPostTemplate = ({
  data,
  pageContext,
}: PageProps<DataProps, ContextProps>) => {
  const [colorMode] = useColorMode();
  const [comment, setComment] = useState<JSX.Element | null>();
  const theme = { dark: `dark_dimmed`, light: `light_tritanopia` };

  const {
    series: { nodes: series, count },
    markdownRemark: {
      html,
      fields: { slug },
      frontmatter: { title, date, tags },
      headings,
    },
    site: {
      siteMetadata: { giscus },
    },
  } = data;

  const renderComment = (
    giscus: GiscusProps & { theme: { dark: Theme; light: Theme } },
    colorMode: string,
  ) => {
    setComment(() => (
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
        theme={theme[colorMode as 'dark' | 'light']}
        lang={giscus.lang}
        loading="lazy"
      />
    ));
  };

  const current = series.findIndex((s) => slug === s.fields.slug) || 0;
  const seriesObj = {
    count,
    current,
    next: series[current + 1]?.fields.slug,
    previous: series[current - 1]?.fields.slug,
    others: series,
    name: pageContext.series,
  };

  useEffect(() => {
    setComment(() => null);
    renderComment(giscus, colorMode);
  }, [colorMode]);

  return (
    <Layout pageTitle={title}>
      <div className="meta">
        <div className="meta-date">{date}</div>
        <div>
          <ul className="meta-tags">
            {tags &&
              tags.map((tag) => (
                <li className="tag-item" key={tag}>
                  <Link className="tag-link" to={`/tag/${tag}`}>
                    {tag}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {count > 0 && (
        <div className="meta-series">
          <SeriesBox {...seriesObj} />
        </div>
      )}
      <hr />
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <div className="nextPrev">
        {data?.previous && <Article post={data.previous} />}
        {data?.next && <Article post={data.next} />}
      </div>
      <hr />
      <div className="comment">{comment}</div>
      <aside>
        <ToTop />
      </aside>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <Seo
    title={data.markdownRemark.frontmatter.title}
    date={data.markdownRemark.frontmatter.metaDate}
    description={data.markdownRemark.excerpt}
    slug={data.markdownRemark.fields.slug}
  />
);

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $series: String
  ) {
    series: allMarkdownRemark(
      filter: { frontmatter: { series: { eq: $series } } }
      sort: { frontmatter: { date: ASC } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
      count: totalCount
    }
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        metaDate: date
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      excerpt(pruneLength: 120)
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      excerpt(pruneLength: 120)
    }
    site {
      siteMetadata {
        url
        baseUrl
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
