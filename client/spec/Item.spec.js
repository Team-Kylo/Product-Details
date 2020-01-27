import React from 'react';
import { shallow } from '../../enzyme';

import Item from '../components/Item';

describe('Item component tests', () => {
  it('component renders', () => {
    const wrapper = shallow(<Item/>);
    expect(wrapper.exists()).toBe(true);
  })
  it('renderes item specs', () => {
    var price = 12;
    var seller = "Philip";
    var desc = "this is a item description";
    const wrapper = shallow(<Item sellerName={seller} itemPrice={price} itemDesc={desc}/>)
    expect(wrapper.find('.product')).toBeDefined();
  });
});
