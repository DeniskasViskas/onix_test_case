import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetecto from 'i18next-browser-languagedetector'
import {initReactI18next} from "react-i18next";

i18n.use(Backend).use(LanguageDetecto).use(initReactI18next).init({
    fullbackLng:'ru',
    debug:false,
    detection:{
        order:['localStorage','querystring','cookie'],
        caches:['cookie'],
        lookupLocalStorage:'lang'
    },
    interpolation:{
        escapeValue:false
    }
})

export default i18n