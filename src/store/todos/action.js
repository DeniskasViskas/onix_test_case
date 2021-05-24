import {getCategory, getCategoryTask, createCategory, createTack, markTack} from '../../service/todo'
export const todosActionType = {
    GET_TODOS:'TODOS.GET_TODOS',
    GET_CATEGORY: 'TODOS.GET_CATEGORY',
    SET_ACTIVE_CATEGORY: 'TODOS.SET_ACTIVE_CATEGORY',
    SET_TODOS_CATEGORY_LOADING: 'TODOS.SET_TODOS_CATEGORY_LOADING',
    SET_TODOS_LOADING: 'TODOS.SET_TODOS_LOADING'
}

export const todosActions = {
    getTodos: (payload) =>({type:todosActionType.GET_TODOS,payload}),
    getCategory: (payload)=>({type:todosActionType.GET_CATEGORY,payload}),
    setActiveCategory:(payload)=>({type:todosActionType.SET_ACTIVE_CATEGORY,payload}),
    setTodosCategoryLoading:(payload)=>({type:todosActionType.SET_TODOS_CATEGORY_LOADING,payload}),
    setTodosLoading:(payload)=>({type:todosActionType.SET_TODOS_LOADING,payload}),

    loadTodos: (payload)=>{
        return (dispatch)=>{
            dispatch(todosActions.setTodosLoading(true))
            return getCategoryTask(payload,(data)=>{
                dispatch(todosActions.setTodosLoading(false))
                dispatch(todosActions.getTodos(data))
            })
        }
    },
    loadCategory:()=>{
        return (dispatch)=>{
            dispatch(todosActions.setTodosCategoryLoading(true))
            getCategory((data)=>{
                dispatch(todosActions.setTodosCategoryLoading(false))
                return dispatch(todosActions.getCategory(data))
            })
        }
    },
    createCategory:(payload)=>{
        return (dispatch)=>{
            dispatch(todosActions.setTodosCategoryLoading(true))
            createCategory(payload,(data)=>{
                dispatch(todosActions.setTodosCategoryLoading(false))
                return dispatch(todosActions.loadCategory())
            })
        }
    },
    createTodo:(payload)=>{
        return (dispatch)=>{
            dispatch(todosActions.setTodosLoading(true))
            createTack(payload,(data)=>{
                dispatch(todosActions.setTodosLoading(false))
                dispatch(todosActions.loadCategory())
                dispatch(todosActions.loadTodos(data.category))
            })
        }
    },
    markTodo:(payload)=>{
        return (dispatch)=>{
            const {id,prop,activeCategory} = payload
            markTack(id,prop,(data)=>{
                dispatch(todosActions.loadTodos(activeCategory))
            })
        }
    }
}