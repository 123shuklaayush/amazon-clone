import React from "react";
import "../cssFile/Checkout.css";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-banner"
          className="checkout"
        />

        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout-right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
