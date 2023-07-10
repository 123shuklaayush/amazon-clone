import React, { useContext } from "react";
import "../cssFile/Header.css";
import amazonLogo from "../img/amazon-logo.png"; // Importing logo for header
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CounterContext } from "../context/Counter";

function Header() {
  const counterContext = useContext(CounterContext);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div className="header">
      <Link to="/">
        <img src={amazonLogo} alt="amazonpic" className="header-logo" />
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      {isAuthenticated ? (
      <div className="header-option" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        <span className="header-onLineOne"> Hello {user.name}</span>
        <span className="header-onLineTwo">Sign Out</span>
      </div>
      ) : (
      <div className="header-option" onClick={() => loginWithRedirect()}>
        <span className="header-onLineOne"> Hello Guest</span>
        <span className="header-onLineTwo">Sign in</span>
      </div>
      )}




      <div className="header-option">
        <span className="header-onLineOne">Returns</span>
        <span className="header-onLineTwo">& Orders</span>
      </div>
      <div className="header-option">
        <span className="header-onLineOne">Your</span>
        <span className="header-onLineTwo">Prime</span>
      </div>

      <Link to="/checkout">
        <div className="header-optionBasket">
          <ShoppingBasketIcon />
          <span className="header-onLineTwo header-basketCount">{counterContext.count}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
