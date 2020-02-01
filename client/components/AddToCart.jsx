/* eslint-disable arrow-body-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import imgHand from './assets/etsy_hand.png';


const Button = styled.button`
  background: black;
  color: white;
`;

const DropDown = styled.select`
  option {
    text-align: center;
  }
`;
const Hand = styled.img`
content: url(${imgHand});

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
      <div>
        Don't miss out.
        There's only 4 available and 4 other people have this in their cart right now.
      </div>
      <div>
        <Hand />
      </div>
    </div>

  );
};


export default AddToCart;
