import React from "react";
import './nav.css';

function Nav() {
    return (
        <ul className="nav">
            <li>
                <a href="#">
                    Programação
                </a>
            </li>
            <li>
                <a href="#">
                    Catálogos
                </a>
            </li>
            <li>
                <a href="#">
                    Educativo
                </a>
            </li>
            <li>
                <a href="#">
                    Sobre
                </a>
            </li>
        </ul>
    )
}

export default Nav;