import React from "react";
import ContentHeader from "../components/ContentHeader";
import Wizard from "../components/wizard/Wizard";

function Home() {
    return (
        <div className="card custom-card p-0">
            <ContentHeader/>
            <Wizard/>
        </div>
    )
}

export default Home