import {translateActionType} from './action'

const initialState = {
    locale:null
}
export const translateReducer = (state = initialState,action)=>{
    switch (action.type){
        case translateActionType.SET_LOCALE:
            return {...state,locale:action.payload}
        default:
            return state
    }
}