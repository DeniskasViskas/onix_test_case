import {combineReducers} from 'redux'
import {translateReducer as translate} from "./translates";
import {todosReducer as todos} from "./todos";

export const reducers = combineReducers({
    translate,
    todos
})