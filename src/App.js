import React from 'react';
import ProductCard from './ProductCard';
import ProductCard2 from './ProductCard2';
import ProductCard3 from './ProductCard3';
import ProductCard4 from './ProductCard';

function App() {
  return (
    <div>
      <h1>Product List</h1>
      {/* <ProductCard name="Laptop" price="1099" />
      <ProductCard name="Smartphone" price="800" />
      <ProductCard name="Headphones" price="150" />
      <ProductCard name="WritePad" price="10" /> */}
    <hr></hr>
    <ProductCard2 name="Mouse" price={10}/>
    <hr></hr>
    {/* <ProductCard3   price={10}/> */}

 <hr></hr>

    </div>
  );
}

export default App;
