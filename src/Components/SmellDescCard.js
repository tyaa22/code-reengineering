import React from "react";
import "../Styles/SmellDescCard.css";
import CodeCard from "./CodeCard";

const SmellDescCard = ({smell}) => {

    const createList = (types) => {
        return types.map((type) => (
            <div className="smell-type-list" key={type.id}>
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
                <p>{type.treatment}</p>
                <CodeCard type={type} />
            </div>
        ))
    }
    
    return (
        <>
        <div className="content-section">
            <div className="smell-explanation">
                <h1 className="smell-name">{smell.title}</h1>
                <p className="smell-desc">{smell.txt}</p>
            </div>
            <div className="smell-types">
            {createList(smell.types)}
            </div>
        </div>

        </>
    );
}

export default SmellDescCard;