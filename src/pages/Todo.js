import React, {useEffect, useState} from "react";
import "../components/todo/todo.css";
import Categories from "../components/todo/category/Categories";
import {DragDropContext} from "react-beautiful-dnd";
import CustomDnD from "../components/todo/CustomDnD";
import Tasks from "../components/todo/task/Tasks";

function Todo(){
    const [todos,setTodos] = useState([])
    const [categories,setCategories] = useState([]);
    const [activeCategory,setActiveCategory] = useState('');

    const getCategory = ()=> {
        fetch('http://localhost:3001/todo/category')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCategories(data)
            })
    }

    const getCategoryTask = (cat = '')=> {
        fetch('http://localhost:3001/todo/tasks/' + cat, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setTodos(data)
            })
    }

    useEffect(()=>{
        getCategory()
        getCategoryTask('')
    },[])

    const createTack = (task)=> {
        fetch('http://localhost:3001/todo/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        })
            .then((response) => {
                if (response.ok) {
                    getCategory()
                    getCategoryTask(activeCategory)
                } else {
                    console.log(response)
                }
            })
    }

    const createCategory = (name) => {
        if (name && name !== '') {
            fetch('http://localhost:3001/todo/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({"name": `${name}`})
            })
                .then((response) => {
                    if (response.ok) {
                        getCategory()
                    } else {
                        console.log(response)
                    }
                })
        }
    }

    const markTack = (id, prop) => {
        fetch('http://localhost:3001/todo/tasks/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({prop})
        })
            .then((response) => {
                if (response.ok) {
                    getCategoryTask(activeCategory)
                } else {
                    console.log(response)
                }
            })
    }

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
                        createCategory={createCategory}
                    />
                </div>
                <div className={'flex-row-fluid ml-6'}>
                    <DragDropContext onDragEnd={DragHandler}>
                        <Tasks
                            activeCategory={activeCategory}
                            todos={todos}
                            markTack={markTack}
                            createTack={createTack}
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