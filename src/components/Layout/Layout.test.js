import React from 'react';
import { withRouter } from 'react-router';
import { MemoryRouter, Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import store from '../../store/store';
import Layout from './Layout';

afterEach(cleanup);

const person = {};
const user = {};
const toggleMenu = jest.fn();
const fetchPerson = jest.fn();
const addUser = jest.fn();

function renderWithStoreAndRouter(ui, { route = '/' } = {}) {
  return {
    ...render(
      <MemoryRouter>
        <Provider store={store}>{ui}</Provider>
      </MemoryRouter>
    )
  };
}

it('renders', () => {
  const { asFragment } = renderWithStoreAndRouter(
    <Layout
      menuOpen={false}
      person={person}
      user={user}
      toggleMenu={toggleMenu}
      fetchPerson={fetchPerson}
      addUser={addUser}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('displays the home page by default', () => {
  const { getByText } = renderWithStoreAndRouter(
    <Layout
      menuOpen={false}
      person={person}
      user={user}
      toggleMenu={toggleMenu}
      fetchPerson={fetchPerson}
      addUser={addUser}
    />
  );

  expect(
    getByText('This template includes the following:')
  ).toBeInTheDocument();
});
