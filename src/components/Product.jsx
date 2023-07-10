import React, { useContext } from 'react'
import "../cssFile/Product.css";
import { CounterContext } from '../context/Counter';

function Product({ title, image, price, rating}) {
  const counterContext = useContext(CounterContext);
  return (
      <div className="product">
        <div className="product-info">
            <p> {title} </p>
            <p className="product-price">
                <small><b>$</b></small>
                <strong>{price}</strong>
            </p>
            <div className="product-rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                <p>⭐</p> 
                ))}
            </div>
        </div>

        <img src= {image} alt="book" />
        <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Add to Basket</button>
      </div>
  )
}

export default Product
