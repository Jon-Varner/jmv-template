import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Header from './Header';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<Header title="Hello World" />);
  expect(asFragment()).toMatchSnapshot();
});

it('inserts title into h1', () => {
  const { getByText } = render(<Header title="Hello World" />);
  expect(getByText('Hello World')).toBeInTheDocument();
});
