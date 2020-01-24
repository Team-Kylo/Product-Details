import React from 'react';


var AddToCart = () => {
  return(
    <div>
      <div>Quantity</div>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <div>
      <button>Add to cart</button>
      </div>
      <div>Don't miss out. There's only 4 available and 4 other people have this in their cart right now.</div>
    </div>

  )
}


export default AddToCart;