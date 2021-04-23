import React from "react";
import {NavLink} from "react-router-dom";
import {ThemeContextConsumer} from '../providers/ThemeContextProvider'

function HeaderNav() {
    return (
        <ThemeContextConsumer>
            {
                value=>{
                    const {theme,toggleTheme} = value
                    return(
                        <header className={"page-header"}>
                            <ul className={"nav-list"}>
                                <li className={"nav-item"}>
                                    <NavLink activeClassName="active" exact className={'nav-link'} to="/week_3">week 3</NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink activeClassName="active" exact className={'nav-link'} to="/week_5">week 5</NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink activeClassName="active" exact className={'nav-link'} to="/week_6">week 6,7</NavLink>
                                </li>
                            </ul>

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
                        </header>
                    )
                }
            }
        </ThemeContextConsumer>
    )
}

export default HeaderNav