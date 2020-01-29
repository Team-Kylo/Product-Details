import React from 'react';
import styled from 'styled-components';
import { shallow } from '../../enzyme';
import AddToCart from './AddToCart';

describe('<AddToCart > component test', () => {
  it('should render component', () => {
    const wrapper = shallow(<AddToCart />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render correct elements', () => {
    const Button = styled.button`
  width: 50%;
  background: black;
  color: white;s
`;

const DropDown = styled.select`
  width: 50%;
  option {
    text-align: center;
  }
`;
const wrapper = shallow(<AddToCart />);
expect(wrapper.find(<DropDown>

  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>

</DropDown>)).toBeTruthy();
expect(wrapper.find(<Button>Add to cart</Button>)).toBeTruthy();
expect(wrapper.find(<div>Don't miss out. There's only 4 available and 4 other people have this in their cart right now.</div>)).toBeTruthy();

  });
});