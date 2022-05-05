import React from "react";
import './styles.css';
import logo from '../../assets/logo.png';
import { Nav } from "../Nav";

export function Header() {
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