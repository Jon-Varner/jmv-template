import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import App from './App';

describe('integration tests', () => {
  const delay = ms => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };

  /* nav menu toggle */
  it('does not initially add open class to nav', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('.primary-nav').hasClass('is-open')).toBe(false);
    wrapper.unmount();
  });

  it('updates the nav class when menu toggle button is clicked', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const btn = wrapper.find('.menu-toggle');
    btn.simulate('click');

    await delay(100);

    expect(wrapper.find('.primary-nav').hasClass('is-open')).toBe(true);
    wrapper.unmount();
  });

  /* sample form */
  it('renders initial state of sample form data in result paragraph and input field', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sample-form']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('p.returned-sample-state').text()).toBe('update me!');
    expect(wrapper.find('input.sample-dispatch').props().value).toBe(
      'update me!'
    );
    wrapper.unmount();
  });

  it('updates the result paragraph when input field is changed', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sample-form']}>
        <App />
      </MemoryRouter>
    );

    wrapper.find('input.sample-dispatch').getDOMNode().value = 'new value';
    wrapper.find('input').simulate('change');

    await delay(100);

    expect(wrapper.find('p.returned-sample-state').text()).toBe('new value');
    wrapper.unmount();
  });

  /* sample API call */
  it('renders initial state of user data', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sample-api-call']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('.api-result').text()).toBe(
      'API returned User ID: 0 and Name: Unavailable.'
    );
    wrapper.unmount();
  });
});
