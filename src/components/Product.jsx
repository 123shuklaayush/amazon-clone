import React from 'react';
import "../cssFile/Product.css";

function Product({ title, image, price, rating, addToCart }) {
  const handleClick = () => {
    addToCart({ title, image, price, rating });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small><b>$</b></small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt="book" />
      <button onClick={handleClick}>Add to Basket</button>
    </div>
  );
}

export default Product;
