import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

const middleware = [];
const mockStore = configureStore(middleware);

it('renders without crashing', () => {
  const initialState = {
    menuToggle: {
      menuOpen: false
    },
    sampleDispatch: {
      sampleData: 'update me!'
    },
    user: {
      user: {
        id: 0,
        name: 'Initial User Name'
      },
      loading: false,
      error: null
    }
  };
  const store = mockStore(initialState);

  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
