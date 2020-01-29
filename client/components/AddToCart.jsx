import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 50%;
  background: black;
  color: white;s
`;

const DropDown = styled.select`
  width: 50%;
  option {
    text-align: center;
  }
`;

const AddToCart = () => {
  return (
    <div>
      <div>Quantity</div>
      <DropDown>

        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>

      </DropDown>
      <div>
        {/* <button>Add to cart</button> */}
        <Button>Add to cart</Button>
      </div>
      <div>Don't miss out. There's only 4 available and 4 other people have this in their cart right now.</div>
    </div>

  );
};


export default AddToCart;
