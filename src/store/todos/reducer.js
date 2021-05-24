import {todosActionType} from './action'
const initialState = {
    todos:[],
    categories:[],
    activeCategory:'',
    categoryLoading:false,
    todosLoading:false
}
export const todosReducer = (state = initialState,action)=>{
    switch (action.type){
        case todosActionType.GET_TODOS:
            return {...state,todos: action.payload}
        case todosActionType.SET_TODOS_CATEGORY_LOADING:
            return {...state,categoryLoading: action.payload}
        case todosActionType.SET_TODOS_LOADING:
            return {...state,todosLoading: action.payload}
        case todosActionType.GET_CATEGORY:
            return {...state,categories: action.payload}
        case todosActionType.SET_ACTIVE_CATEGORY:
            return {...state,activeCategory: action.payload}
        default:
            return state
    }
}