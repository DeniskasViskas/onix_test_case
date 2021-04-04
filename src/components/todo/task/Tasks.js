import React from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import {Droppable} from "react-beautiful-dnd";
import {Toast} from "react-bootstrap";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toastShow: false,
            toastMessage: ''
        }
    }

    showToast = (toastMessage)  =>{
        this.setState({toastMessage, toastShow: !this.state.toastShow})
        setTimeout(() => {
            this.setState({toastMessage: '', toastShow: !this.state.toastShow})
        }, 1500)
    }

    createTack = (title) => {
        const {activeCategory,createTack} = this.props
        const task = {
            id: Date.now(),
            category: activeCategory,
            is_complete: false,
            is_important: false,
            is_stared: false,
            title: title,
            time: new Date().toDateString()
        }
        createTack(task)
    }

    render() {
        const {activeCategory,todos,markTack} = this.props
        const {toastShow,toastMessage} = this.state
        return (
            <>
                <div className={'card custom-card mb-6'}>
                    <div className="card-header bg-white">
                        <div className="card-title">
                            <h3 className={'text-uppercase'}>{activeCategory}</h3>
                            <div className={"text-muted"}>Tasks</div>
                        </div>
                    </div>
                    <div className={'px-4'}>
                        <div className={'d-flex justify-content-center'}>
                            <NewTask createTask={this.createTack} showToast={this.showToast}
                                     activeCategory={activeCategory}/>
                        </div>
                    </div>
                    <div  className={'toast_container'}>
                        <Toast className={'toast-block'}
                               show={toastShow}>
                            <Toast.Body>{toastMessage}</Toast.Body>
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
                                            todos.map((item) => <Task
                                                key={item.id}
                                                data={item}
                                                markTack={markTack}
                                            />)
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

export default Tasks