import React from "react";
import {Outlet, Link} from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
    return (
        <>
        <nav className="nav-bar">
            <h1 className="nav-bar-title">Code Smells</h1>

            <ul className="nav-bar-items">
                <li className="nav-button">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-button">
                    <Link className="nav-link" to="/dispensables">Dispensables</Link>
                </li>
                <li className="nav-button">
                    <Link className="nav-link" to="/change-preventers">Change Preventers</Link>
                </li>
                <li className="nav-button">
                    <Link className="nav-link" to="/github">Github Page</Link>
                </li>
            </ul>
            
        </nav>

        <Outlet />
        </>
    );
} 

export default Navbar;