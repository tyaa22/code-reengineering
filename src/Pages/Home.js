import React from "react";
import Hero from "../Components/Hero.js";
import CodeSmellCard from "../Components/CodeSmellCard.js";
import Footer from "../Components/Footer.js";
import "../Styles/Home.css";
import cp from "../Content/change-preventers.js";
import dispen from "../Content/dispensables.js";

const Home = () => {
    return (
        <>
        <Hero />
        <div className="code-smell-cards">
            <CodeSmellCard data={cp} />
            <CodeSmellCard data={dispen}/>
        </div>
        <Footer />
        </>
    )
}

export default Home;