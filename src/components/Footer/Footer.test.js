import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Footer from './Footer';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<Footer someProp="value" />);
  expect(asFragment()).toMatchSnapshot();
});
