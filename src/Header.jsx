import React from 'react'
import './Header.css'
import amazonLogo from './img/amazon-logo.png' // Importing logo for header
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to = "/">
      <img src={amazonLogo} 
      alt="amazonpic" 
      className='header-logo'/>
      </Link>
    <div 
    className="header-search">
        <input type="text"
         className='header-searchInput'/> 
         <SearchIcon className='header-searchIcon'/>
    </div>
    <div className="header-nav">
      <div className='header-option'>
         <span 
         className="header-onLineOne">
          Hello Guest
         </span>
         <span 
         className="header-onLineTwo">
          Sign in</span>
      </div>
      <div className='header-option'>
         <span 
         className="header-onLineOne">
          Returns
         </span>
         <span 
         className="header-onLineTwo">
          & Orders</span>
      </div>
      <div className='header-option'>
         <span 
         className="header-onLineOne">
          Your
         </span>
         <span 
         className="header-onLineTwo">
          Prime</span>
      </div>
    </div>
    <Link to = "/checkout">
    <div className="header-optionBasket">
      <ShoppingBasketIcon/>
      <span className='header-onLineTwo header-basketCount'>0</span>
    </div>
    </Link>

    </div>
  )
}

export default Header;