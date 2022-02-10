import React from "react";
import './header.css';
import logo from '../../assets/logo.png';
import Nav from "../nav/Nav";

function Header() {
    return (
        <header className="header container">
            <div className="logo-group">        
                <img className="logo" src={logo} />
                <span>mus</span>
                <span>Art</span>
            </div>
            <div>
                <Nav />
            </div>
        </header>
    )
}

export default Header;