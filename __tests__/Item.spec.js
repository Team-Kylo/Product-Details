/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { shallow } from '../enzyme';
import Item from '../client/components/Item';
//
describe('Item component tests', () => {
  it('component renders', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renderes item specs', () => {
    const price = 12;
    const seller = 'Philip';
    const desc = 'this is a item description';
    const wrapper = shallow(<Item sellerName={seller} itemPrice={price} itemDesc={desc} />);
    expect(wrapper.find('.product')).toBeDefined();
  });
  it('should render passed in props', () => {
    const StyledText = styled.div`
  color: palevioletred;
`;
    const a = 'John';
    const b = 'Some description';
    const c = 800;
    const wrapper = shallow(<Item sellerName={a} itemDesc={b} itemPrice={c} />);
    expect(wrapper.find(<StyledText>{a}</StyledText>)).toBeTruthy();
    expect(wrapper.find(<div className="desc">{b}</div>)).toBeTruthy();
    expect(wrapper.find(<div className="price">{`$${c}.00`}</div>)).toBeTruthy();
  });
});
