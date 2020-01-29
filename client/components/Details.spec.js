import React from 'react';
import styled from 'styled-components';
import { shallow } from '../../enzyme';
import Details from './Details';
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