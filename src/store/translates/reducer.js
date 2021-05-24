import {translateActionType} from './action'

const initialState = {
    lang:!!localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru',
}
export const translateReducer = (state = initialState,action)=>{
    switch (action.type){
        case translateActionType.SET_LOCALE:
            localStorage.setItem('lang',action.payload.lang)
            return {...state,...action.payload}
        default:
            return state
    }
}