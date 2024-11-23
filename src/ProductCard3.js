import PropTypes from 'prop-types';

function ProductCard3({ name, price }) {
  return (
    <div>
      <h2>Product Name: {name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

ProductCard3.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard3;
