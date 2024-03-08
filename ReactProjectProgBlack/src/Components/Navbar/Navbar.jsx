import React, { useState } from "react";

import './Navbar.css'

import logo from '../assets/logo.png'
import carticon from '../assets/download.png'

const Navbar = () => {

        const [menu, setMenu] = useState("shop");

    return(
        <div className="navbar">
            <div className="navbarlogo">
                <img src={logo} className="logoimg" alt="Store Logo"/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>               
            </ul>
            <div className="Cart">
                <button>Login</button>
                <img src={carticon} className="cartimg" alt="Cart" />
                <div className="CartCounter">0</div>                
            </div>           
        </div>
    )
}

export default Navbar
