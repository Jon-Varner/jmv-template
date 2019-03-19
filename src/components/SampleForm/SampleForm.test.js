import React from 'react';
import { mount } from 'enzyme';

import SampleForm from './SampleForm';

describe('SampleForm renders props correctly', () => {
  let props;
  let mountedSampleForm;

  const sampleForm = () => {
    if (!mountedSampleForm) {
      mountedSampleForm = mount(<SampleForm {...props} />);
    }
    return mountedSampleForm;
  };

  beforeEach(() => {
    props = {
      sampleData: 'test data',
      dispatchedSample: jest.fn()
    };

    mountedSampleForm = undefined;
  });

  it('always renders a paragraph and input', () => {
    const para = sampleForm().find('p');
    const input = sampleForm().find('input');

    expect(para.length).toBe(1);
    expect(input.length).toBe(1);
  });

  it('renders sampleData from props', () => {
    const para = sampleForm()
      .find('p')
      .first();

    const input = sampleForm()
      .find('input')
      .first();

    expect(para.text()).toBe('test data');
    expect(input.props().value).toBe('test data');
  });

  it('calls sampleData dispatch function on input change', () => {
    sampleForm()
      .find('input')
      .first()
      .simulate('change', {
        target: {
          value: 'new data'
        }
      });

    expect(props.dispatchedSample).toBeCalledWith('new data');
  });
});
