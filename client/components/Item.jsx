/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';

const FlexRow = styled.div`
display: flex;
align-items: center;
`;
const Divider = styled.div`
border-bottom: 1px solid #E1E3DF
`;
const StyledText = styled.div`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-size: 14px;
  color: #757575;
  margin-right: 3px;
  :hover {
    text-decoration: underline;
}
`;
const Stars = styled.div`
margin-right: 3px;
`;
const Title = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;font-size: 20px;
font-weight: 400;
color: rgb(51, 51, 51);
`;
const VertPadd = styled.div`
padding: 6px 0px 6px 0px;
`;
const Price = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 18px;
font-weight: 500;
`;


const Item = ({ sellerName, itemDesc, itemPrice, sellerRating, reviewCount, watchList, quantityLeft }) => {
  let stars = null;
  switch (sellerRating) {
    case 0:
      stars = <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>;
      break;
    case 1:
      stars = <span>&#9733;&#9734;&#9734;&#9734;&#9734;</span>;
      break;
    case 2:
      stars = <span>&#9733;&#9733;&#9734;&#9734;&#9734;</span>;
      break;
    case 3:
      stars = <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>;
      break;
    case 4:
      stars = <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>;
      break;
    case 5:
      stars = <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>;
      break;
    default:
      stars = <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>;
      break;
  }
  let AddToCartRender = null;
  if (watchList && quantityLeft) {
    AddToCartRender = (
      <AddToCart watchList={watchList} quantityLeft={quantityLeft} />
    );
  }
  return (
    <Divider>
      <FlexRow>
        <StyledText>{sellerName}</StyledText>
        <Stars>{stars}</Stars>
        <StyledText>{`(${reviewCount})`}</StyledText>
      </FlexRow>
      <VertPadd>
        <Title>
          <div className="desc">{itemDesc}</div>
        </Title>
      </VertPadd>
      <VertPadd>
        <Price>
          <div className="price">{`$${itemPrice}.00`}</div>
        </Price>
      </VertPadd>
      <div>
        {AddToCartRender}
        {/* <AddToCart watchList={watchList} quantityLeft={quantityLeft} /> */}
      </div>
    </Divider>
  );
};

export default Item;
