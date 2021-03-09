import React from "react";
import Task from "./Task";
import NewTask from "./NewTask";

class TodoTasks extends React.Component {
    constructor(props) {
        super(props);
        this.createTack = this.createTack.bind(this)
    }

    createTack(title){
        const task = {
            id: Date.now(),
            category:this.props.activeCategory,
            is_complete: false,
            is_important: false,
            is_stared: false,
            title: title,
            time: new Date().toDateString()
        }
        this.props.createTack(task)
    }
    render() {
        return(
            <div className={'card custom-card mb-6'}>
                <div className="card-header bg-white">
                    <div className="card-title">
                        <h3 className={'text-uppercase'}>{this.props.activeCategory}</h3>
                        <div className={"text-muted"}>Tasks</div>
                    </div>
                </div>
                <div className={'px-4'}>
                    <div className={'d-flex justify-content-center'}>
                        <NewTask createTask={this.createTack}/>
                    </div>
                </div>
                <div className={'card-body px-4'}>
                    <div className={'list'}>
                        {
                            this.props.todos && this.props.todos.length > 0 ?
                                this.props.todos.map((item)=><Task
                                    key={item.id}
                                    data={item}
                                    markTack={this.props.markTack}
                                />) :
                                <p className={'text-center animate__bounceIn'}>Empty</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoTasks