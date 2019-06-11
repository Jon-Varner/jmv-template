import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import store from '../store/store';
import App from '../App';

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    history
  };
}

afterEach(cleanup);

describe('integration tests', () => {
  const delay = ms => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };

  it('updates the nav class when menu toggle button is clicked', async () => {
    const { container, getByLabelText } = renderWithRouter(<App />);

    fireEvent.click(getByLabelText('Open the menu'));
    await delay(100);
    expect(
      container.querySelector('.primary-nav').classList.contains('is-open')
    ).toBe(true);
  });

  /* sample form */
  it('renders initial state in result list', async () => {
    const { getByText } = renderWithRouter(<App />, {
      route: '/sample-form'
    });

    expect(getByText('fullName: Initial User Name')).toBeInTheDocument();
    expect(getByText('email: Initial Email')).toBeInTheDocument();
    expect(getByText('password: Initial Password')).toBeInTheDocument();
    expect(getByText('age: 30')).toBeInTheDocument();
    expect(getByText('preference: None')).toBeInTheDocument();
    expect(getByText('pronouns:')).toBeInTheDocument();
    expect(getByText('optin: false')).toBeInTheDocument();
  });

  it('updates sample form data in result list when form is submitted', async () => {
    const {
      getByText,
      getByPlaceholderText,
      getByLabelText
    } = renderWithRouter(<App />, {
      route: '/sample-form'
    });

    let input = getByPlaceholderText('Enter your full name');

    fireEvent.change(input, {
      target: { value: 'Jane Doe' }
    });

    input = getByPlaceholderText('Enter your email address');

    fireEvent.change(input, {
      target: { value: 'user@test.org' }
    });

    input = getByPlaceholderText('Enter your password');

    fireEvent.change(input, {
      target: { value: '12345678' }
    });

    input = getByPlaceholderText('Enter your age');

    fireEvent.change(input, {
      target: { value: '45' }
    });

    input = getByLabelText('Color Preference:');

    fireEvent.change(input, {
      target: { value: 'Green' }
    });

    input = getByText('Submit');

    fireEvent.click(input);
    await waitForElement(() => getByText('fullName: Jane Doe'));

    expect(getByText('fullName: Jane Doe')).toBeInTheDocument();
    expect(getByText('email: user@test.org')).toBeInTheDocument();
    expect(getByText('password: 12345678')).toBeInTheDocument();
    expect(getByText('age: 45')).toBeInTheDocument();
    expect(getByText('preference: Green')).toBeInTheDocument();
  });
});

/* sample API call */
it('renders default person data for no api result', async () => {
  const { getByText } = renderWithRouter(<App />, {
    route: '/sample-api-call'
  });

  expect(
    getByText('API returned Person ID: 0 and Name: Initial Person Name.')
  ).toBeInTheDocument();
});
