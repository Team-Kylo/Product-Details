/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';


const StyledText = styled.div`
  color: palevioletred;
`;

const Item = ({ sellerName, itemDesc, itemPrice }) => (
  <div className="product">
    {/* <div className="seller">{sellerName}</div> */}
    <StyledText><h4>{sellerName}</h4></StyledText>
    <div className="desc">{itemDesc}</div>
    <div className="price">{`$${itemPrice}.00`}</div>
    <div>
      <AddToCart />
    </div>
  </div>
);

export default Item;
