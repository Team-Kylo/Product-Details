/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
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
  padding: 8px 12px 8px 12px;
  border-radius: 3px 3px 3px 3px;
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
padding: 6px 0px 6px 0px;
`;
const MainPadd = styled.div`
padding-bottom: 12px;
`;
const EndPadd = styled.div`
padding: 6px 0px 2px 0px;
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


const AddToCart = ({ quantityLeft, watchList }) => {
  const optionArrayBuilder = () => {
    const result = [];
    for (let i = 1; i <= quantityLeft; i++) {
      result.push(<option key={i}>{i}</option>);
    }
    return result;
  };

  return (
    <MainPadd>
      <VertPadd>
        <Text>
          <div>Quantity</div>
        </Text>
      </VertPadd>
      <VertPadd>
        <div>
          <DropDown>
            {optionArrayBuilder()}
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
              {`There's only ${quantityLeft} available`}
            </Text>
            <Text>
              {`and ${watchList} other people have this in their cart right now.`}
            </Text>
          </div>
        </EndPadd>
      </FlexRow>
    </MainPadd>

  );
};


export default AddToCart;
