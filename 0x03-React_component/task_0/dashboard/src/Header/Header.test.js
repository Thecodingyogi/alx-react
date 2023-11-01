import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render a h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});

