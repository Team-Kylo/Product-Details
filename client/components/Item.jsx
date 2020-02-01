/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';

const FlexRow = styled.div`
display: flex;
align-items: center;
`;
const StyledText = styled.div`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 14px;
  color: grey;
  margin-right: 3px;
  :hover {
    text-decoration: underline;
}
`;
const Stars = styled.div`
margin-right: 3px;
`;

const Item = ({ sellerName, itemDesc, itemPrice }) => {

  const [randNum, setNum] = useState(0);

  useEffect(() => {
    const random = Math.floor(Math.random(1000 - 70) + 70);
    console.log(random);
    setNum(random);
  });


  return (
    <div className="product">
      {/* <div className="seller">{sellerName}</div> */}
      <FlexRow>
        <StyledText>{sellerName}</StyledText>
        <Stars>&#9733;&#9733;&#9733;&#9733;&#9733;</Stars>
        <StyledText>{`(${randNum})`}</StyledText>
      </FlexRow>
      <div className="desc">{itemDesc}</div>
      <div className="price">{`$${itemPrice}.00`}</div>
      <div>
        <AddToCart />
      </div>
    </div>
  );
};

export default Item;
