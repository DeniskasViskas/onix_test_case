import React, {useState} from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import {Droppable} from "react-beautiful-dnd";
import {Toast} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

function Tasks(props){
    const [toast,setToast] = useState({
        toastShow: false,
        toastMessage: ''
    })
    const showToast = (toastMessage)  =>{
        setToast({toastMessage, toastShow: true})
        setTimeout(() => {
            setToast({toastMessage: '', toastShow: false})
        }, 1500)
    }
    const createTack = (title) => {
        const {activeCategory,createTack} = props
        const task = {
            category: activeCategory,
            title
        }
        createTack(task)
    }
    const {activeCategory,todos,markTack} = props
    const {toastShow,toastMessage} = toast
    const {t} = useTranslation()
    const {todosLoading} = useSelector((state)=>state.todos)
    return (
        <>
            <div className={'card custom-card mb-6'}>
                <div className="card-header bg-white">
                    <div className="card-title">
                        <h3 className={'text-uppercase'}>{activeCategory}</h3>
                        <div className={"text-muted"}>{t('todo.tasks')}</div>
                    </div>
                </div>
                <div className={'px-4'}>
                    <div className={'d-flex justify-content-center'}>
                        <NewTask createTask={createTack} showToast={showToast}
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
                    { todosLoading && <div className={'text-center loading_indicator'}><i className="fas fa-spinner rotate"/></div>}
                    <Droppable droppableId={'tasks_dnd'}>

                        {!!todos ?(provided) => (
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
                        ) : 'No tasks'}
                    </Droppable>
                </div>
            </div>
        </>
    )
}


export default Tasks