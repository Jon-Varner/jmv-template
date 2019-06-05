import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import SampleApiCall from './SampleApiCall';

afterEach(cleanup);

const person = { id: 0, name: 'Initial User Name' };
const personFetched = jest.fn().mockResolvedValue({ person: {} });

it('renders', () => {
  const { asFragment } = render(
    <SampleApiCall person={person} fetchPerson={personFetched} />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('displays default ID and name', async () => {
  const { getByText } = render(
    <SampleApiCall person={person} fetchPerson={personFetched} />
  );

  expect(
    getByText('API returned Person ID: 0 and Name: Initial User Name.')
  ).toBeInTheDocument();
});
