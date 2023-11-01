import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

test('renders without crashing', () => {
  shallow(<Login />);
});

test('renders 2 input tags and 2 label tags', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
});

