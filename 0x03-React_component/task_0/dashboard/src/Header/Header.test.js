import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

test('renders without crashing', () => {
  shallow(<Header />);
});

test('renders img and h1 tags', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('img')).toHaveLength(1);
  expect(wrapper.find('h1')).toHaveLength(1);
});

