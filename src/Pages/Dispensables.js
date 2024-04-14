import React from "react";
import SmellDescCard from "../Components/SmellDescCard";
import dispen from "../Content/dispensables.js";

const Dispensables = () => {
    return (
        <>
            <SmellDescCard  smell={dispen}/>   
        </>
    )
}

export default Dispensables;