import React from 'react';
import { mount } from 'enzyme';

import MenuToggle from './MenuToggle';

describe('MenuToggle renders props correctly', () => {
  const props = {
    menuOpen: false,
    toggleMenu: jest.fn()
  };

  it('should render initial state', () => {
    const wrapper = mount(<MenuToggle {...props} />);

    expect(wrapper.find('button').hasClass('is-open')).toBe(false);
  });
});
