import React from "react";
import "../cssFile/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { BorderColor } from "@mui/icons-material";
function Checkout() {
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
        <CheckoutProduct
        image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        title= "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
        price = {29.99} 
        rating={2}/>
        <CheckoutProduct
        image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        title= 'The lean Startup' 
        price = {29.99} 
        rating={2}/>
        <CheckoutProduct
        image= "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        title= "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
        price = {29.99} 
        rating={2}/>

        </div>
        </div>
      </div>
      <div className="checkout-right"> 
      <p style={{lineHeight:"30px"}}>Subtotal (No. of Items): <br /> $ (Total Price) </p>
      <button className="checkout-btn">Proceed To Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
