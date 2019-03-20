import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import { Layout } from './Layout';
import Home from '../../components/Home/Home';
import SampleForm from '../../components/SampleForm/SampleForm';
import SampleApiCall from '../../components/SampleApiCall/SampleApiCall';
import Error404 from '../../components/Error/Error404';

describe('Routes work as intended', () => {
  let props;
  let mountedLayout;

  const layout = initialEntries => {
    if (!mountedLayout) {
      mountedLayout = mount(
        <MemoryRouter initialEntries={[initialEntries]}>
          <Layout {...props} />
        </MemoryRouter>
      );
    }
    return mountedLayout;
  };

  beforeEach(() => {
    props = {
      sampleDate: undefined,
      user: {
        id: undefined,
        name: undefined
      },
      fetchUser: jest.fn(),
      sampleDispatch: jest.fn()
    };

    mountedLayout = undefined;
  });

  it('redirects invalid path to 404 page', () => {
    const wrapper = layout('/nonexistent');

    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(SampleApiCall)).toHaveLength(0);
    expect(wrapper.find(SampleForm)).toHaveLength(0);
    expect(wrapper.find(Error404)).toHaveLength(1);
  });

  it('routes to Home page correctly', () => {
    const wrapper = layout('/');

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(SampleApiCall)).toHaveLength(0);
    expect(wrapper.find(SampleForm)).toHaveLength(0);
    expect(wrapper.find(Error404)).toHaveLength(0);
  });

  it('routes to Sample API call correctly', () => {
    const wrapper = layout('/sample-api-call');

    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(SampleApiCall)).toHaveLength(1);
    expect(wrapper.find(SampleForm)).toHaveLength(0);
    expect(wrapper.find(Error404)).toHaveLength(0);
  });

  it('routes to Sample form correctly', () => {
    const wrapper = layout('/sample-form');

    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(SampleApiCall)).toHaveLength(0);
    expect(wrapper.find(SampleForm)).toHaveLength(1);
    expect(wrapper.find(Error404)).toHaveLength(0);
  });
});
