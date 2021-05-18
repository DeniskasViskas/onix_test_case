import React from "react"
import {ThemeContextConsumer} from "../providers/ThemeContextProvider";

function Footer() {
    return(
    <ThemeContextConsumer>
        {
            value => {
                const {theme,toggleTheme} = value
                return (
                    <div className={"bg-white footer pb-4 pt-4"}>
                        <div className={"container-fluid"}>
                            <div className={"pe-2 ps-2 text-center"}>
                                <span>Author: </span><span className={"fw-bold"}>Denis Diachenko</span>
                            </div>
                        </div>
                        <div className={'switch-btn text-center'}>
                                    <span className={"fw-bold"}>
                                        {
                                            theme === 'light' ? 'Dark mode' : 'Light mode'
                                        }
                                    </span>
                            <div className="custom-control custom-switch custom-switch-lg">
                                <input type="checkbox" className="custom-control-input" id="theme_switch" onChange={toggleTheme}/>
                                <label className="custom-control-label" htmlFor="theme_switch"/>
                            </div>
                        </div>
                    </div>

                )
            }
        }
    </ThemeContextConsumer>
    )
}
export default Footer