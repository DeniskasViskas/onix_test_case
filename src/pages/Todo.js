import React, {useEffect} from "react";
import "../components/todo/todo.css";
import Categories from "../components/todo/Categories";
import {DragDropContext} from "react-beautiful-dnd";
import CustomDnD from "../components/todo/CustomDnD";
import Tasks from "../components/todo/Tasks";
import {useDispatch, useSelector} from "react-redux";
import {todosActions} from "../store/todos";

function Todo(){
    const dispatch = useDispatch();
    // const selectTodos = state => state.todos
    const {todos,categories,activeCategory} = useSelector(state => state.todos)
    useEffect(()=>{
        dispatch(todosActions.loadCategory())
    },[dispatch])
    useEffect(()=>{
        dispatch(todosActions.loadTodos(activeCategory))
    },[activeCategory,dispatch])

    const DragHandler = (event) => {
        const {destination, source} = event;
        if (destination) {
            let from = source.index;
            let to = destination.index;
            todos.map((item) => {
                if (item.index === from) {
                    return item.index = to
                }
                if (item.index === to) {
                    return item.index = from
                }
                return true;
            })
            todos.sort((a, b) => {
                return a.index - b.index;
            })
        }
    }

    return (
        <div className={'container-fluid'}>
            <div className={'d-flex flex-row'}>
                <div className={'flex-row-auto'}>
                    <Categories
                        categories={categories}
                        changeList={(val) => dispatch(todosActions.setActiveCategory(val))}
                        activeCategory={activeCategory}
                        createCategory={(name)=>dispatch(todosActions.createCategory(name))}
                    />
                </div>
                <div className={'flex-row-fluid ml-6'}>
                    <DragDropContext onDragEnd={DragHandler}>
                        <Tasks
                            activeCategory={activeCategory}
                            todos={todos}
                            markTack={(id,prop)=>dispatch(todosActions.markTodo({id,prop,activeCategory}))}
                            createTack={(task)=>dispatch(todosActions.createTodo(task))}
                        />
                    </DragDropContext>
                </div>
            </div>
            <div className={'row mt-6'}>
                <div className="col-12 col-lg-6">
                    <CustomDnD/>
                </div>
            </div>
        </div>
    )
}

export default Todo