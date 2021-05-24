import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import { useDispatch} from "react-redux";
import {translateActions} from "../store/translates";

const {Provider, Consumer} = React.createContext();

const  LangContextProvider = (props)=>{
    const dispatch = useDispatch();
    const {lang} = useSelector((state)=>state.translate);
    const {i18n} = useTranslation()
    useEffect(()=>{
        i18n.changeLanguage(lang)
    },[lang,i18n])
    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
        dispatch(translateActions.setTranslate({lang}))
    }
    return <Provider value={{lang,changeLang}}>{props.children}</Provider>
}

export {LangContextProvider, Consumer as LangContextConsumer};
