export const translateActionType = {
    SET_LOCALE:'TRANSLATE.SET_LOCALE'
}

export const translateActions = {
    setTranslate: (payload) =>({type: translateActionType.SET_LOCALE,payload})
}