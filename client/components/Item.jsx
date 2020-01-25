import React from 'react';
import AddToCart from './AddToCart.jsx';
import styled from 'styled-components';


const StyledText = styled.div`
  color: palevioletred;
`;



var Item = ({sellerName, itemDesc, itemPrice}) => {

  return(
    <div className="product">
      {/* <div className="seller">{sellerName}</div> */}
      <StyledText>{sellerName}</StyledText>
      <div className="desc">{itemDesc}</div>
      <div className="price">{`$${itemPrice}.00`}</div>
      <div>
        <AddToCart />
      </div>
    </div>
  );

}

export default Item;