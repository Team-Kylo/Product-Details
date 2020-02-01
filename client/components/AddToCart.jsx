/* eslint-disable arrow-body-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import imgBell from './assets/etsy_bell.png';


const Button = styled.button`
  background: black;
  color: white;
  width: 200px;
`;

const DropDown = styled.select`
  option {
    text-align: center;
  }
`;
const FlexRow = styled.div`
dispaly: flex;
justify-content: left;
`;
const Bell = styled.img`
content: url(${imgBell});
width: 20px;
height: 20px;
`;


const AddToCart = () => {
  return (
    <div>
      <div>Quantity</div>
      <div>
        <DropDown>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </DropDown>
      </div>
      <div>
        <Button>Add to cart</Button>
      </div>
      <FlexRow>
        <Bell />
        <div>
          Don't miss out.
          There's only 4 available and 4 other people have this in their cart right now.
        </div>
      </FlexRow>
    </div>

  );
};


export default AddToCart;
