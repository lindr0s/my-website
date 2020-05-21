import React from 'react';
import { Layout, SEO } from 'components/common';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <h1>NOT FOUND</h1>
    <p>Sorry, can't find that page anywhere! 🤔</p>
  </Layout>
);
