import React from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import {Droppable} from "react-beautiful-dnd";
import {Toast} from "react-bootstrap";

class TodoTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toastShow: false,
            toastMessage: ''
        }
        this.createTack = this.createTack.bind(this)
        this.showToast = this.showToast.bind(this)
    }

    showToast(toastMessage) {
        this.setState({toastMessage, toastShow: !this.state.toastShow})
        setTimeout(() => {
            this.setState({toastMessage: '', toastShow: !this.state.toastShow})
        }, 1500)
    }

    createTack(title) {
        const task = {
            id: Date.now(),
            category: this.props.activeCategory,
            is_complete: false,
            is_important: false,
            is_stared: false,
            title: title,
            time: new Date().toDateString()
        }
        this.props.createTack(task)
    }

    render() {
        return (
            <>
                <div className={'card custom-card mb-6'}>
                    <div className="card-header bg-white">
                        <div className="card-title">
                            <h3 className={'text-uppercase'}>{this.props.activeCategory}</h3>
                            <div className={"text-muted"}>Tasks</div>
                        </div>
                    </div>
                    <div className={'px-4'}>
                        <div className={'d-flex justify-content-center'}>
                            <NewTask createTask={this.createTack} showToast={this.showToast}
                                     activeCategory={this.props.activeCategory}/>
                        </div>
                    </div>
                    <div style={{position: 'relative', width: '100%'}}>
                        <Toast style={{position: 'absolute', top: 0, right: "50%", zIndex: 1, opacity: 1}}
                               show={this.state.toastShow}>
                            <Toast.Body
                                style={{background: '#5d78ff', color: '#fff'}}>{this.state.toastMessage}</Toast.Body>
                        </Toast>
                    </div>
                    <div className={'card-body px-4'}>
                        <Droppable droppableId={'tasks_dnd'}>
                            {(provided) => (
                                <div
                                    className={'list'}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                    {
                                        // this.props.todos && this.props.todos.length > 0 ?
                                            this.props.todos.map((item) => <Task
                                                key={item.id}
                                                data={item}
                                                markTack={this.props.markTack}
                                            />) //:
                                            // <p className={'text-center animate__bounceIn'}>Empty</p>
                                    }
                                    {provided.placeholder}
                                </div>
                                )}
                        </Droppable>
                    </div>
                </div>
            </>
        )
    }
}

export default TodoTasks