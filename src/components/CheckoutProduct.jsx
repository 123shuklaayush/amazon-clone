import React from 'react'
import "../cssFile/CheckoutProduct.css"
function CheckoutProduct({image, title, price, rating}) {
  return (
    <div className='item-name'>
      <img src = {image} alt="image-of-product" width={"12%"}/>
      <div className="description-of-item">
        <p style={{fontSize: "20px", width: "100%"}}>{title}</p>
        <h3>${price}</h3>
        <div className="product-rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                <p>⭐</p> 
                ))}
            </div>
            <p>In Stock</p>
        <p style={{fontSize: "10px"}}>Remove From Cart</p>
      </div>
    </div>

  )
}

export default CheckoutProduct
