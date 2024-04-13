import {React, useState} from "react";
import {Outlet, Link} from "react-router-dom";
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const openMobileNav = () => {
        setMobileNav(!mobileNav)
    }

    return (
        <>
        <nav className="nav-bar">
            <h1 className="nav-bar-title">Code Smells</h1>

            <ul className="nav-bar-items">
                <li className="nav-button">
                    <Link className="nav-link active" to="/home">Home</Link>
                </li>
                <li className="nav-button">
                    <Link className="nav-link" to="/dispensables">Dispensables</Link>
                </li>
                <li className="nav-button">
                    <Link className="nav-link" to="/change-preventers">Change Preventers</Link>
                </li>
                <li className="nav-button">
                    <a href="https://github.com/tyaa22/code-reengineering" target="_blank" rel="noopener noreferrer" className="nav-link">Github Page</a>
                </li>
            </ul>

            <ul className={mobileNav? "close-nav" : "mobile-items"}>
                <li className="nav-button">
                    <Link className="nav-link active" to="/home">Home</Link>
                </li>
                <li className="nav-button">
                    <Link className="nav-link" to="/dispensables">Dispensables</Link>
                </li>
                <li className="nav-button">
                    <Link className="nav-link" to="/change-preventers">Change Preventers</Link>
                </li>
                <li className="nav-button">
                    <a href="https://github.com/tyaa22/code-reengineering" target="_blank" rel="noopener noreferrer" className="nav-link">Github Page</a>
                </li>
            </ul>

            <div className="mobile-nav">
                <FontAwesomeIcon className="mobile-nav-icon" icon={mobileNav ? faBars : faTimes} onClick={openMobileNav}/>
            </div>
        </nav>

        <Outlet />
        </>
    );
} 

export default Navbar;