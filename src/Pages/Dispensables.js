import React from "react";
import SmellDescCard from "../Components/SmellDescCard";
import dispen from "../Content/dispensables.js";
import Footer from "../Components/Footer.js";

const Dispensables = () => {
    return (
        <>
            <SmellDescCard  smell={dispen}/>
            <Footer />         
        </>
    )
}

export default Dispensables;