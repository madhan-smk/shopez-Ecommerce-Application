import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import logo from "../../Assets/new logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import {HomeContext} from "../../../Context/HomeContext"

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const {getTotalCartItems}=useContext(HomeContext)

    return (
        <div className='navbar' id='homepage'>
            <div className='nav-logo'>
                <img src={logo} width={90} alt='logo' />
                <p onClick={() => { setMenu("Home") }}>
                    <Link to="/" className='title'>SHOP - EZ</Link>
                </p>
            </div>

            
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("Home") }}>
                    <Link to="/" style={{ textDecoration: "none", color: "black"}}>Home{menu === "Home" ? <hr /> : <></>}</Link>
                </li>
                <li onClick={() => { setMenu("Electronics") }}>
                    <Link to="/Electronics" style={{ textDecoration: "none", color: "black" }}>Electronics</Link> {menu === "Electronics" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Fashion") }}>
                    <Link style={{ textDecoration: "none", color: "black" }}>Fashion</Link>{menu === "Fashion" ? <hr /> : <></>}
                    <ul className='dropdown-menu'>
                        <li><Link to="/Fashion/Mens" style={{ textDecoration: "none", color: "azure" }}>Mens</Link></li>{menu === "Mens" ? <hr /> : <></>}
                        <li><Link to="/Fashion/Womens" style={{ textDecoration: "none", color: "azure" }}>Womens</Link></li>{menu === "Womens" ? <hr /> : <></>}
                        <li><Link to="/Fashion/Kids" style={{ textDecoration: "none", color: "azure" }}>Kids</Link></li>{menu === "Kids" ? <hr /> : <></>}
                    </ul>
                </li>
                <li onClick={() => { setMenu("Home & furnitures") }}>
                    <Link to="/Homeandfurnitures" style={{ textDecoration: "none", color: "black" }}>Furnitures</Link>{menu === "Home & furnitures" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("MyAccount") }}>
                    <Link to="/MyAccount" style={{ textDecoration: "none", color: "black" }}>MyAccount</Link>{menu === "MyAccount" ? <hr /> : <></>}
                </li>
            </ul>
            
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to="/Loginsignup" style={{ textDecoration: "none" }}><button>Login</button></Link>}
                
                <Link to="/Cart" style={{ textDecoration: "none" }}>
                    <div className='cart'>
                        <img src={cart_icon} width={50} alt='cart'/>
                        <div className="nav-cart-count">{getTotalCartItems()}</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
