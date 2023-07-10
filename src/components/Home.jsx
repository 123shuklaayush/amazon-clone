import React, { useState } from 'react'
import "../cssFile/Home.css";
import Product from "./Product"
function Home() {

  const[cart, setCart] = useState([]);

  const handleClick = (item) =>{
    cart.push(item)
    console.log(cart)
  }
  return (
    <div className="home">
        <div className="home-container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            className='home-image'
             alt="amazon-slider" />
             <div className="home-row">
              <Product 
              title= 'The lean Startup' 
              price = {29.99} 
              rating={2}
              image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              handleClick = {handleClick}/>
              <Product 
              title= "Upgrade your grooming routine with our top-quality shaving essentials and experience a clean and comfortable shave."
              price = {134.99} 
              rating={4}
              image= "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"/>
              
             </div>
             <div className="home-row">
             <Product 
              title= "Samsung SEN 4 PRO Smart Watch"
              price = {499.99} 
              rating={5}
              image= "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
              <Product 
              title= "The Signs, The Secret Language"
              price = {134.99} 
              rating={4}
              image= "https://m.media-amazon.com/images/I/51pyypZvepL._AC_SY200_.jpg"/>
              <Product
              title= "Discover Fashion Trends"
              price = {134.99} 
              rating={4}
              image = "https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg"/>

             </div>
             <div className="home-row">
              <Product
              price = {999.99}
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              image= "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />

             </div>

        </div>
    </div>
  )
}

export default Home
