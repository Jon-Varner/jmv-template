import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import App from '../App';

describe('integration tests', () => {
  const delay = ms => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  let httpMock;

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
  it('renders initial state of sample form data in result list', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sample-form']}>
        <App />
      </MemoryRouter>
    );

    expect(
      wrapper
        .find('ul.returned-sample-state')
        .childAt(0)
        .text()
    ).toBe('fullName: Initial User Name');
    expect(
      wrapper
        .find('ul.returned-sample-state')
        .childAt(1)
        .text()
    ).toBe('email: Initial Email');
    expect(
      wrapper
        .find('ul.returned-sample-state')
        .childAt(2)
        .text()
    ).toBe('password: Initial Password');
    expect(
      wrapper
        .find('ul.returned-sample-state')
        .childAt(3)
        .text()
    ).toBe('age: 30');
    expect(
      wrapper
        .find('ul.returned-sample-state')
        .childAt(4)
        .text()
    ).toBe('preference: None');
    expect(
      wrapper
        .find('ul.returned-sample-state')
        .childAt(5)
        .text()
    ).toBe('pronouns: ');
    expect(
      wrapper
        .find('ul.returned-sample-state')
        .childAt(6)
        .text()
    ).toBe('optin: false');
    wrapper.unmount();
  });

  /* sample API call */
  it('renders person data for no api result', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sample-api-call']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('.api-result').text()).toBe(
      'API returned Person ID: 0 and Name: Initial Person Name.'
    );
    wrapper.unmount();
  });

  it('renders fetched person data returned from api', async () => {
    httpMock = new MockAdapter(axios);

    httpMock.onGet('https://jsonplaceholder.typicode.com/users/1').reply(200, {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    });

    const wrapper = mount(
      <MemoryRouter initialEntries={['/sample-api-call']}>
        <App />
      </MemoryRouter>
    );

    await flushAllPromises();
    wrapper.update();

    expect(wrapper.find('.api-result').text()).toBe(
      'API returned Person ID: 1 and Name: Bret.'
    );
    wrapper.unmount();
  });
});
