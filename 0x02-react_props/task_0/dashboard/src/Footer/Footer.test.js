import React from 'react';
import { shallow } from 'enzyme'
import Footer from './Footer';

test('renders without crashing', () => {
  shallow(<Footer />);
});

test('renders at least the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
});

