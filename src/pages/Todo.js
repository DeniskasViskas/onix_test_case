import React from "react";
import "../components/todo/todo.css";
import TodoList from "../components/todo/TodoList";
import TodoTasks from "../components/todo/TotoTasks";

const todos = [
    // {
    //     id: 1,
    //     category: 'home',
    //     is_complete: false,
    //     is_important: false,
    //     is_stared: false,
    //     title: "купить хлеб!",
    //     time: '2020-12-17T03:24:00'
    // },
    // {
    //     id: 2,
    //     category: 'work',
    //     is_complete: true,
    //     is_important: true,
    //     is_stared: false,
    //     title: "выучить реакт",
    //     time: '2020-12-11T03:24:00'
    // },
    // {
    //     id: 3,
    //     category: 'work',
    //     is_complete: false,
    //     is_important: false,
    //     is_stared: true,
    //     title: "выучить реакт",
    //     time: '2020-10-17T12:33:00'
    // }
];
const categories = [
    // {name:'home',count:0},{name:'work',count:0}
]

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.markTack = this.markTack.bind(this)
        this.createCategory = this.createCategory.bind(this)
        this.createTack = this.createTack.bind(this)
        this.getCategoryTask = this.getCategoryTask.bind(this)
        this.getCategory = this.getCategory.bind(this)
        this.state = {
            todos: todos,
            categories: categories,
            activeCategory: ''
        }
    }

    componentDidMount() {
        this.getCategory()
        this.getCategoryTask('')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.activeCategory !== this.state.activeCategory) {
            this.getCategoryTask(this.state.activeCategory)
        }
    }

    getCategory() {
        fetch('http://localhost:3001/todo/category')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({categories: data})
            })
    }

    getCategoryTask(cat = '') {
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
                this.setState({todos: data})
            })
    }

    createTack(task) {
        fetch('http://localhost:3001/todo/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(task)
        })
            .then((response) => {
                if (response.ok) {
                    this.getCategory()
                    this.getCategoryTask(this.state.activeCategory)
                } else {
                    console.log(response)
                }
            })
    }

    createCategory(name) {
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
                        this.getCategory()
                    } else {
                        console.log(response)
                    }
                })
        }
    }

    markTack(id, prop) {
        fetch('http://localhost:3001/todo/tasks/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({prop})
        })
            .then((response) => {
                if (response.ok) {
                    this.getCategoryTask(this.state.activeCategory)
                } else {
                    console.log(response)
                }
            })
    }

    render() {
        return (
            <div className={'container-fluid'}>
                <div className={'d-flex flex-row'}>
                    <div className={'flex-row-auto'}>
                        <TodoList
                            categories={this.state.categories}
                            changeList={(val) => this.setState({activeCategory: val})}
                            activeCategory={this.state.activeCategory}
                            createCategory={this.createCategory}
                        />
                    </div>
                    <div className={'flex-row-fluid ml-6'}>
                        <TodoTasks
                            activeCategory={this.state.activeCategory}
                            todos={this.state.todos}
                            markTack={this.markTack}
                            createTack={this.createTack}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo