import "./App.css";
import React from "react"
import Header from "./components/Header";
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout"
import SignInPage from "./components/SignInPage";
function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path = "/checkout" element= {<Checkout/>}/>
          <Route path="/" element={<Home />} />
          <Route path = "/sign-in" element={<SignInPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
