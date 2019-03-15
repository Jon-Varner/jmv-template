import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/Layout/Layout';

const app = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default app;
