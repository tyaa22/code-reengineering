import React from "react";
import SmellDescCard from "../Components/SmellDescCard";
import cp from "../Content/change-preventers.js";
import Footer from "../Components/Footer.js";

const ChangePreventers = () => {
    return (
        <>
            <SmellDescCard  smell={cp}/>
            <Footer />    
        </>
    )
}

export default ChangePreventers;