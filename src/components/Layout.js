import React from "react";
import Footer from "./Footer";

function Layout({children}) {
    return (
        <>
            <div className={"content"}>
                <div className={"container"}>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Layout