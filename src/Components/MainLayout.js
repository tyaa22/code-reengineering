import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <>
        <div className="mainlayout-section" >
            <Navbar />
            <Footer />
        </div>
        </>
    );
}

export default MainLayout;