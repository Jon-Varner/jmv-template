import React from 'react';
import { mount } from 'enzyme';

import SampleApiCall from './SampleApiCall';

describe('SampleApiCall renders props correctly', () => {
  let props;
  let mountedSampleApiCall;

  const sampleForm = () => {
    if (!mountedSampleApiCall) {
      mountedSampleApiCall = mount(<SampleApiCall {...props} />);
    }
    return mountedSampleApiCall;
  };

  beforeEach(() => {
    props = {
      user: {
        id: undefined,
        name: undefined
      },
      userFetched: jest.fn()
    };

    mountedSampleApiCall = undefined;
  });

  it('always renders a user id and name', () => {
    const para = sampleForm().find('p');
    expect(para.text()).toBe('API returned User ID: 0 and Name: Unavailable.');
  });

  it('renders user id and name from props', () => {
    props = {
      user: {
        id: 1,
        name: 'first name'
      },
      userFetched: jest.fn()
    };

    const para = sampleForm().find('p');
    expect(para.text()).toBe('API returned User ID: 1 and Name: first name.');
  });
});
