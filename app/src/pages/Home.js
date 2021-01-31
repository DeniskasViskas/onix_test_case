import React from "react";
import Header from "../components/Header";
import Wizard from "../components/wizard/Wizard";

function Home() {
    return (
        <div className="card custom-card p-0">
            <Header/>
            <Wizard/>
        </div>
    )
}

export default Home