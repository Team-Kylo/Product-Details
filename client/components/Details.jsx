/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

const Details = ({ itemSpecs }) => {
  console.log(itemSpecs.cm);

  return (
    <div>
      <h4>Item Details</h4>
      <p>Handmade</p>
      <p>
        {itemSpecs.cm}
        cm
      </p>
      <p>{itemSpecs.materialA}</p>
      <p>{itemSpecs.materialB}</p>
      <p>{itemSpecs.materialC}</p>
      <p>{itemSpecs.materialD}</p>
    </div>
  );
};

export default Details;
