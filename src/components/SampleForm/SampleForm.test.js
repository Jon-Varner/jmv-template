import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from 'react-testing-library';
import 'jest-dom/extend-expect';

import { SampleForm } from './SampleForm';

afterEach(cleanup);

const user = {
  fullName: 'Initial User Name',
  email: 'Initial Email',
  password: 'Initial Password',
  age: '30',
  preference: 'None',
  pronouns: [],
  optin: 'false'
};

const submitForm = jest.fn();

describe('form tests', () => {
  it('renders', () => {
    const { asFragment } = render(
      <SampleForm user={user} submitForm={submitForm} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows error when name field is left empty', async () => {
    const { getByPlaceholderText, findByText } = render(
      <SampleForm user={user} submitForm={submitForm} />
    );

    const input = getByPlaceholderText('Enter your full name');

    fireEvent.blur(input);

    const inputError = await waitForElement(() =>
      findByText('Please enter your name.')
    );
    expect(inputError).toBeInTheDocument();
  });

  it('shows error when email field is malformed', async () => {
    const { getByPlaceholderText, findByText } = render(
      <SampleForm user={user} submitForm={submitForm} />
    );

    const input = getByPlaceholderText('Enter your email address');

    fireEvent.change(input, {
      target: { value: 'foo@com' }
    });

    fireEvent.blur(input);

    const inputError = await waitForElement(() =>
      findByText('Please enter a valid email address.')
    );
    expect(inputError).toBeInTheDocument();
  });

  it('shows error when password field is left empty', async () => {
    const { getByPlaceholderText, findByText } = render(
      <SampleForm user={user} submitForm={submitForm} />
    );

    const input = getByPlaceholderText('Enter your password');

    fireEvent.blur(input);

    const inputError = await waitForElement(() =>
      findByText('Please enter a password.')
    );
    expect(inputError).toBeInTheDocument();
  });

  it('shows error when password field is too short', async () => {
    const { getByPlaceholderText, findByText } = render(
      <SampleForm user={user} submitForm={submitForm} />
    );

    const input = getByPlaceholderText('Enter your password');

    fireEvent.change(input, {
      target: { value: '1234567' }
    });

    fireEvent.blur(input);

    const inputError = await waitForElement(() =>
      findByText('Password must be at least 8 characters.')
    );
    expect(inputError).toBeInTheDocument();
  });

  it('shows error when age field is left empty', async () => {
    const { getByPlaceholderText, findByText } = render(
      <SampleForm user={user} submitForm={submitForm} />
    );

    const input = getByPlaceholderText('Enter your age');

    fireEvent.blur(input);

    const inputError = await waitForElement(() =>
      findByText('Please enter your age.')
    );
    expect(inputError).toBeInTheDocument();
  });

  it('shows error when age is not a valid number', async () => {
    const { getByPlaceholderText, findByText } = render(
      <SampleForm user={user} submitForm={submitForm} />
    );

    const input = getByPlaceholderText('Enter your age');

    fireEvent.change(input, {
      target: { value: '-3.1415' }
    });

    fireEvent.blur(input);

    const inputError = await waitForElement(() =>
      findByText('Please enter a valid age.')
    );
    expect(inputError).toBeInTheDocument();
  });

  it('shows error when age is too young', async () => {
    const { getByPlaceholderText, findByText } = render(
      <SampleForm user={user} submitForm={submitForm} />
    );

    const input = getByPlaceholderText('Enter your age');

    fireEvent.change(input, {
      target: { value: '11' }
    });

    fireEvent.blur(input);

    const inputError = await waitForElement(() =>
      findByText('Age must be at least 12.')
    );
    expect(inputError).toBeInTheDocument();
  });
});
