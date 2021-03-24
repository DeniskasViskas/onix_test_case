import React from "react";
import "../components/todo/todo.css";
import TodoList from "../components/todo/TodoList";
import TodoTasks from "../components/todo/TotoTasks";
import {DragDropContext} from "react-beautiful-dnd";
import {Alert} from "react-bootstrap";

const todos = [];
const categories = []

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.markTack = this.markTack.bind(this)
        this.createCategory = this.createCategory.bind(this)
        this.createTack = this.createTack.bind(this)
        this.getCategoryTask = this.getCategoryTask.bind(this)
        this.getCategory = this.getCategory.bind(this)
        this.check_img_url = '';
        this.state = {
            todos: todos,
            categories: categories,
            activeCategory: '',
            img_load_status:true,
            check_img_url:'',
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

    DragHandler = event => {
        const {destination, source} = event;
        if (destination) {
            let from = source.index;
            let to = destination.index;
            // let item = this.state.todos.splice(from,1)
            // this.state.todos.splice(to,0,item[0])
            this.state.todos.map((item) => {
                if (item.index === from) {
                    return item.index = to
                }
                if (item.index === to) {
                    return item.index = from
                }
                return true;
            })
            this.state.todos.sort((a, b) => {
                return a.index - b.index;
            })
        }
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
                        <DragDropContext onDragEnd={this.DragHandler}>
                            <TodoTasks
                                activeCategory={this.state.activeCategory}
                                todos={this.state.todos}
                                markTack={this.markTack}
                                createTack={this.createTack}
                            />
                        </DragDropContext>
                    </div>
                </div>
                <div className={'flex-row'}>
                    <div className={'flex-row-auto'}>
                        <div className="flex-row-fluid">
                            <div className={'card custom-card mb-6 mt-6 col-lg-5 col-12'}>
                                <div className="card-header bg-white">
                                    <div className="card-title">
                                        <h3 className={'text-uppercase'}>Check Image</h3>
                                        <div className={"text-muted"}>by ULR</div>
                                    </div>
                                </div>
                                <div className={'card-body text-center'}>
                                    <form action="">
                                        <div className="input-group mb-3">
                                            <input type="text" name={'url'} className="form-control" required
                                                   placeholder="type url"
                                                   onChange={event => this.check_img_url  = event.target.value}
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type={"submit"} onClick={(event)=>{
                                                    event.preventDefault()
                                                    this.setState({check_img_url:this.check_img_url})
                                                }} >Chek</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div>
                                        {
                                            this.state.check_img_url.length > 1  &&
                                            // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                                <img src={this.state.check_img_url} alt={"chek image"}
                                                     width={100} height={100}
                                                     onError={()=>this.setState({img_load_status:false})}
                                                     onLoad={()=>this.setState({img_load_status:true})}
                                                />
                                        }
                                        <Alert variant={'danger'} show={!this.state.img_load_status}>
                                            Url <b>{this.state.check_img_url}</b>  not <b>available</b>
                                        </Alert>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo