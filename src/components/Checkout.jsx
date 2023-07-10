import React from "react";
import "../cssFile/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout({ cart }) {
  let totalPrice =0
  cart.forEach((item) => {
    totalPrice += item.price;
  });
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-banner"
          className="checkout-img"
        />
        <div className="items">
          <h2>Shopping Cart</h2>
          <div className="products">
            {cart.map((item, index) => (
              <CheckoutProduct
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <p style={{ lineHeight: "30px", fontWeight: "500"}}>
          Subtotal ({cart.length} Items) <br /> $ {totalPrice.toFixed(2)}
        </p>
        <button className="checkout-btn">Proceed To Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
