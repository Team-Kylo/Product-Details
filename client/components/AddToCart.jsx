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
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 15px;
  font-stretch: 100%;
  font-weight: 700;
  line-height: 18px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  width: 282px;
  color: white;
  width: 200px;
  box-sixing: border-box;
`;

const DropDown = styled.select`
  option {
    text-align: center;
  }
`;
const VertPadd = styled.div`
padding-top: 6px;
padding-bottom: 6px;
`;
const EndPadd = styled.div`
padding-top: 6px;
padding-bottom: 2px;
`;
const FlexRow = styled.div`
dispaly: flex;
justify-content: flex-start;
`;
const Bell = styled.img`
content: url(${imgBell});
width: 20px;
height: 20px;
`;
const Text = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
`;


const AddToCart = () => {
  return (
    <div>
      <VertPadd>
        <Text>
          <div>Quantity</div>
        </Text>
      </VertPadd>
      <VertPadd>
        <div>
          <DropDown>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </DropDown>
        </div>
      </VertPadd>
      <VertPadd>
        <div>
          <Button>Add to cart</Button>
        </div>
      </VertPadd>
      <FlexRow>
        <VertPadd>
          <Bell />
        </VertPadd>
        <EndPadd>
          <div>
            <Text>
              <b>Don't miss out.</b>
               There's only 4 available
            </Text>
            <Text>
             and 4 other people have this in their cart right now.
            </Text>
          </div>
        </EndPadd>
      </FlexRow>
    </div>

  );
};


export default AddToCart;
