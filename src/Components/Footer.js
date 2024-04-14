import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faFacebook, faTiktok, faInstagram} from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.css";

const Footer = () => {
    const onClickOpen = (url) => {
        window.open(url, "_blank", "noreferrer");
    }
     
    return (
    <footer className="footer-section">
            <p>© 2024. All rights reserved.</p>
            <div className="name-section">
                <p>Cyintia Aprilia Limmanto - 2602192134</p>
                <div className="separator">|</div>
                <p>Geocean Djohan - 2602203705</p>
            </div>

        <ul className="footer-icons">
            <li onClick={() => onClickOpen("https://www.facebook.com")}>
                <FontAwesomeIcon className="footer-fa-icon" icon={faFacebook}/>
            </li>

            <li onClick={() => onClickOpen("https://instagram.com")}>
                <FontAwesomeIcon className="footer-fa-icon" icon={faInstagram}/>
            </li>

            <li onClick={() => onClickOpen("https://tiktok.com")}>
                <FontAwesomeIcon className="footer-fa-icon" icon={faTiktok}/>
            </li>
        </ul>
    </footer>
    )
}

export default Footer;