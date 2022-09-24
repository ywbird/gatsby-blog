import { Link } from '@reach/router';
import { HeadFC, PageProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Tag from '../components/tag';

interface PageContextProps {
  tags: {
    tag: string;
    totalCount: number;
  }[];
}

const Tags = ({ pageContext }: PageProps<{}, PageContextProps>) => {
  return (
    <Layout maxWidth={700} pageTitle="Tags">
      <div>
        {pageContext.tags.map((tag) => (
          <Tag key={tag.tag} tag={tag} />
        ))}
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Tags" />;

export default Tags;
