import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Nav from './Nav';

afterEach(cleanup);

const toggleMenu = jest.fn();

it('renders', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Nav menuOpen={false} toggleMenu={toggleMenu} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('defaults to closed menu', () => {
  const { container } = render(
    <MemoryRouter>
      <Nav menuOpen={false} toggleMenu={toggleMenu} />
    </MemoryRouter>
  );

  const menu = container.querySelector('nav');

  expect(menu.classList.contains('is-open')).toBe(false);
});

it('shows menu if prop value is true', () => {
  const { container } = render(
    <MemoryRouter>
      <Nav menuOpen={true} toggleMenu={toggleMenu} />
    </MemoryRouter>
  );

  const menu = container.querySelector('nav');

  expect(menu.classList.contains('is-open')).toBe(true);
});
