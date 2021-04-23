import React from "react";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import Sidebar from "./Sidebar";
import {ThemeContextConsumer} from '../providers/ThemeContextProvider'


function Layout({children}) {
    return (
        <ThemeContextConsumer>
            {
                value => {
                    const {theme} = value
                    return(
                        <div className={'wrapper '+ (theme)}>
                            <Sidebar/>
                            <div className={"content"}>
                                <HeaderNav/>
                                <div className={"page_content"}>
                                    {children}
                                </div>
                                <Footer/>
                            </div>
                        </div>
                    )
                }
            }
        </ThemeContextConsumer>
    )
}

export default Layout