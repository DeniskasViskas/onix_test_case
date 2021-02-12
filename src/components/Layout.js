import React from "react";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import Sidebar from "./Sidebar";
import {ThemeStyle} from "../App";


function Layout({children}) {
    let theme = React.useContext(ThemeStyle)
    return (
        <>
            <div className={'wrapper '+ (theme.theme)}>
                <Sidebar/>
                <div className={"content"}>
                    <HeaderNav/>
                    <div className={"page_content"}>
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Layout