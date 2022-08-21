// Step 1: Import React
import { HeadFC } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head: HeadFC = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
