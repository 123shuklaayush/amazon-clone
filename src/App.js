import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const cartCount = cart.length; // Calculate the count based on the cart length

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} /> {/* Pass the cartCount as prop to the Header */}
        <Routes>
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route
            path="/"
            element={<Home addToCart={addToCart} />} // Pass the addToCart function as prop
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
