import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { exportAllDeclaration } from '@babel/types';

describe('<App />', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });

  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
