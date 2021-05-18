import React from "react";
import {NavLink} from "react-router-dom";
import {LangContextConsumer} from "../providers/LangContextProvider";
import {useTranslation} from "react-i18next";

function HeaderNav() {
    const {t} = useTranslation()
    return (
        <LangContextConsumer>
            {
                value => {
                    const {lang,changeLang} = value
                    return(
                        <header className={"page-header"}>
                            <ul className={"nav-list"}>
                                <li className={"nav-item"}>
                                    <NavLink activeClassName="active" exact className={'nav-link'} to="/week_3">{t("header.w3")}</NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink activeClassName="active" exact className={'nav-link'} to="/week_5">{t("header.w5")}</NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink activeClassName="active" exact className={'nav-link'} to="/week_6">{t("header.w7")}</NavLink>
                                </li>
                            </ul>
                            <div className={"left-menu"}>
                                <div className={"form-group left-menu-item"}>
                                    <span className={"fw-bold"}>{t('header.lang')}</span>
                                    <select value={lang} name="lang" id="lang" className={"form-control"} onChange={(e)=>changeLang(e.target.value)}>
                                        <option value="en">Eng</option>
                                        <option value="ru">Ru</option>
                                    </select>
                                </div>
                            </div>
                        </header>
                    )
                }
            }
        </LangContextConsumer>
    )

}

export default HeaderNav