import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

const {Provider, Consumer} = React.createContext();

const getSaveLang = () =>localStorage.getItem('lang')

const saveLang = (lang) =>localStorage.setItem('lang',lang)

const  LangContextProvider = (props)=>{
    const [lang,setLang] = useState(getSaveLang())
    const {i18n} = useTranslation()
    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
        setLang(lang)
        saveLang(lang)
    }
    return <Provider value={{lang,changeLang}}>{props.children}</Provider>
}

export {LangContextProvider, Consumer as LangContextConsumer};
