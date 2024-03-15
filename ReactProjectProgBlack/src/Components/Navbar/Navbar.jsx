import React, { useState } from "react";

import './Navbar.css'

import logo from '../assets/logo.png'
import carticon from '../assets/download.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

        const [menu, setMenu] = useState("Shop");

    return(
        <div className="navbar">
            <div className="navbarlogo">
                <img src={logo} className="logoimg" alt="Store Logo"/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Shop")}}><Link to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>               
            </ul>
            <div className="Cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={carticon} className="cartimg" alt="Cart" /></Link>
                <div className="CartCounter">0</div>                
            </div>           
        </div>
    )
}

export default Navbar
