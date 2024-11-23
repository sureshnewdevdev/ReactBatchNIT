import React from 'react';

function ProductCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>Product Name: {props.name}</h2>
      <p>Price: ${props.price}</p>
      <input type='button' value="Submit"></input>
      <img src=""></img>
    </div>
  );
}

export default ProductCard;
