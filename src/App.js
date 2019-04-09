import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

import Layout from './containers/Layout/Layout';

const app = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default app;
