import { graphql, PageProps, Link, HeadFC } from 'gatsby';
import Giscus, { GiscusProps } from '@giscus/react';

import Layout from '@/components/layout';
import { IPost } from '@/global';
import Article from '@/components/article';
import ToTop from '@/components/toTop';

import './blog-post.scss';
import Seo from '@/components/seo';
import SeriesBox from '@/components/seriesBox';
import TOC from '@/components/toc';

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
      giscus: GiscusProps;
    };
  };
}

interface ContextProps {
  series: String;
}

const BlogPostTemplate = ({
  data,
  pageContext,
}: PageProps<DataProps, ContextProps>) => {
  const {
    series: { nodes: series, count },
    markdownRemark: {
      html,
      fields: { slug },
      frontmatter: { title, date, tags },
      tableOfContents,
    },
    site: {
      siteMetadata: { giscus },
    },
  } = data;

  const current = series.findIndex((s) => slug === s.fields.slug) || 0;
  const seriesObj = {
    count,
    current,
    next: series[current + 1]?.fields.slug,
    previous: series[current - 1]?.fields.slug,
    others: series,
    name: pageContext.series,
  };

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
      <TOC content={tableOfContents} />
      <hr />
      <div className="comment">
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
      </div>
      <ToTop />
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
      sort: { frontmatter: { date: DESC } }
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
      tableOfContents
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
