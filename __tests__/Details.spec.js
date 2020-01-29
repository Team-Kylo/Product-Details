/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from '../enzyme';
import Details from '../client/components/Details';
//
describe('<Details> test', () => {
  it('should render', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render correct text', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.find(<div>Details Component</div>)).toBeTruthy();
  });
});
