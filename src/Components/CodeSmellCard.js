import React from "react";
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../Styles/CodeSmellCard.css";

const CodeSmellCard = ({data}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(data.route);
    }

    return (
        <div className="card-section">  
            <span className="card-icon">
                <FontAwesomeIcon className="card-fa-icon" icon={faCode}></FontAwesomeIcon>
            </span>
            <div className="card-title">{data.title}</div>
            <div className="card-txt">{data.txt}</div>
            <button className="card-btn" type="button" onClick={handleNavigate}>Learn More</button>
        </div>
    );
}

export default CodeSmellCard;