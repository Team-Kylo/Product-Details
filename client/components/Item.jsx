import React from 'react';
import AddToCart from './AddToCart.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';


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

Item.propTypes = {
  sellerName: PropTypes.string,
  itemDesc: PropTypes.string,
  itemPrice: PropTypes.number
}

export default Item;