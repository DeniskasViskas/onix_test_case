import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";

function NewTask(props){
    const [showModal, setShowModal] = useState(false)
    const [taskName, setTaskName] = useState('')
    const {t} = useTranslation()
    let pressed = new Set()
    const handlerKeyDown = (event) => {
        let codes = ["KeyN","KeyT"]
        pressed.add(event.code)
        const is_combination_pressed = codes.every((code)=>pressed.has(code))
        if (is_combination_pressed){
            pressed.clear()
            handleOpen()
        }
    }
    const handlerKeyUp = (event) => pressed.delete(event.code);
    const handleOpen = () => {
        if (props.activeCategory === ''){
            props.showToast(t('todo.create_category_message'))
        }else{
            setShowModal((showModal)=>!showModal)
        }
    }
    const inputHandler = (event) => setTaskName(event.target.value)

    useEffect(() => {
        //региструем события
        document.addEventListener("keydown",handlerKeyDown);
        document.addEventListener('keyup', handlerKeyUp);
        return () => {
            // при "уничтожений" компонента нужно удалить слушателей события, что бы они не отработывали на других страницах приложения
            document.removeEventListener("keydown",handlerKeyDown,false);
            document.removeEventListener('keyup', handlerKeyUp,false);
        }
    });

    const {createTask} = props
    return (
        <>
            <div className={'btn btn-sm btn-primary'} onClick={handleOpen}>
                <i className={"fa fa-plus mr-3"}/>
                {t('todo.new_task')} <br/><kbd><kbd>N</kbd> + <kbd>T</kbd></kbd>
            </div>
            <Modal show={showModal} onHide={handleOpen}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('todo.create_todo_modal_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"form-group"}>
                        <input id={'list'} type="text" className={'form-control'} value={taskName}
                               onChange={inputHandler}
                               placeholder={'title'}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleOpen}>
                        {t('btn.cancel')}
                    </Button>
                    <Button type={"submit"} variant="primary" onClick={() => createTask(taskName)}>
                        {t('btn.add')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewTask