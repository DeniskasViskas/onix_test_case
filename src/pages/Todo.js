import React, {useEffect, useState} from "react";
import "../components/todo/todo.css";
import Categories from "../components/todo/Categories";
import {DragDropContext} from "react-beautiful-dnd";
import CustomDnD from "../components/todo/CustomDnD";
import Tasks from "../components/todo/Tasks";
import {getCategory,getCategoryTask,createTack,createCategory,markTack} from "../service/todo";

function Todo(){
    const [todos,setTodos] = useState([])
    const [categories,setCategories] = useState([]);
    const [activeCategory,setActiveCategory] = useState('');

    useEffect(()=>{
        getCategory(setCategories)
        getCategoryTask('',setTodos)
    },[])

    useEffect(()=>{
        getCategory(setCategories)
        getCategoryTask(activeCategory,setTodos)
    },[activeCategory,todos])

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
                        changeList={(val) => setActiveCategory(val)}
                        activeCategory={activeCategory}
                        createCategory={(name)=>createCategory(name,setCategories)}
                    />
                </div>
                <div className={'flex-row-fluid ml-6'}>
                    <DragDropContext onDragEnd={DragHandler}>
                        <Tasks
                            activeCategory={activeCategory}
                            todos={todos}
                            markTack={(id,prop)=>markTack(id,prop,setTodos)}
                            createTack={(task)=>createTack(task,setTodos)}
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