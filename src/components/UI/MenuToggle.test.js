import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import MenuToggle from './MenuToggle';

afterEach(cleanup);

const toggleMenu = jest.fn();

it('renders', () => {
  const { asFragment } = render(<MenuToggle toggleMenu={toggleMenu} />);
  expect(asFragment()).toMatchSnapshot();
});
