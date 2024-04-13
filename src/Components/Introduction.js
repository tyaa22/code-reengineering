import React from "react";
import "../Styles/Introduction.css";
import Programming from "../Assets/programming.svg";

const Introduction = () => {
    return (
        <div className="intro-section">
            <div className="text-section">
                <h1 className="header-text">Bad Code Smells</h1>
                <p className="regular-text">Code smell merupakan struktur tertentu dalam 
                kode tersebut yang mengindikasikan pelanggaran prinsip design dasar yang dapat
                menurunkan kualitas design. Code smell dapat memperlambat proses development dan
                meningkatkan risiko terjadinya bugs di masa depan.</p>
            </div>

            <div className="image-section">
                <img src={Programming} alt="programming ilustration"/>
            </div>
                
        </div>
    );
}

export default Introduction;