import React from "react";
import {Draggable} from "react-beautiful-dnd";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.item = this.props.data
    }
    render() {
        const {data,markTack} = this.props
        return (
            <Draggable draggableId={this.item.id.toString()} index={this.item.index}>
                {provided=>(
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                        <div className={'d-flex list-item px-4 animate__animated'+(data.is_complete ? ' complete':'')}>
                            <div className={'d-flex align-items-center'}>
                                <div className={'d-flex align-items-center'}>
                                    <input type="checkbox" className={'mr-3'} checked={data.is_complete}
                                           onChange={() => {markTack(data.id,'is_complete')}}/>
                                    <div className={'mr-3 list-item-icon' + (data.is_stared ? ' active' : '')}
                                         title="star"
                                         onClick={() => {markTack(data.id,'is_stared')}}
                                    >
                                        <i className={'fas fa-star'}/>
                                    </div>
                                    <div className={'mr-3 list-item-icon' + (data.is_important ? ' active' : '')}
                                         title="important"
                                         onClick={() => {markTack(data.id,'is_important')}}
                                    >
                                        <i className={'fas fa-tag'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 align-self-center" data-toggle="view">
                                <div className={'font-weight-bolder' + (data.is_complete ? ' text-through' : '')}>
                                    {data.title}
                                </div>
                            </div>
                            <div className="flex-grow-1 align-self-center" data-toggle="view">
                                <span className={'badge badge-info'}>{data.category}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-end flex-wrap">
                                <div className="font-weight-bolder">{new Date(data.time).toDateString()}</div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
}

export default Task