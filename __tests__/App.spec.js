/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from '../enzyme';

import App from '../client/components/App';
import Details from '../client/components/Details';
import Item from '../client/components/Item';
//
describe('App test', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render Item and Details compnents', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Details)).toBeDefined();
    expect(wrapper.find(Item)).toBeDefined();
  });
  it('should check componentDidMount()', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getDbData');
    instance.componentDidMount();
    expect(instance.getDbData).toHaveBeenCalledTimes(1);
  });
});
