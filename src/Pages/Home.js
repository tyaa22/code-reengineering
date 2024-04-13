import React from "react";
import Introduction from "../Components/Introduction.js";
import CodeSmellCard from "../Components/CodeSmellCard.js";
import Footer from "../Components/Footer.js";
import "../Styles/Home.css";
import cp from "../Content/change-preventers.js";
import dispen from "../Content/dispensables.js";

const Home = () => {
    const route = "/home";

    return (
        <>
        <Introduction />
        <div className="code-smell-cards">
            <CodeSmellCard data={cp} route={route} />
            <CodeSmellCard data={dispen} route={route}/>
        </div>
        <Footer />
        </>
    )
}

export default Home;