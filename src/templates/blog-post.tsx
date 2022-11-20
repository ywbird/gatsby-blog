import { graphql, PageProps, Link } from 'gatsby';

import Layout from '@/components/layout';
import { IPost } from '@/global';

import './blog-post.scss';
import Article from '@/components/article';

interface IData {
  markdownRemark: IPost;
  previous: IPost;
  next: IPost;
}

const BlogPostTemplate = ({ data }: PageProps<IData>) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, date, tags },
    },
  } = data;
  console.log(data);
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
      <hr />
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <div className="nextPrev">
        {data?.previous && <Article post={data.previous} />}
        {data?.next && <Article post={data.next} />}
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
  }
`;
