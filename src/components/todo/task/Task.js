import React from "react";
import {Draggable} from "react-beautiful-dnd";

function Task(props){
    const item = props.data
    const {data,markTack} = props
    return (
        <Draggable draggableId={Number(item.id).toString()} index={item.index}>
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

export default Task