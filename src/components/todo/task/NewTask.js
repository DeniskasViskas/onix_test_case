import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            taskName: '',
        }
        this.pressed = new Set();
    }
    handlerKeyDown = (event) => {
        let codes = ["KeyN","KeyT"]
        this.pressed.add(event.code)
        const is_combination_pressed = codes.every((code)=>{
            return this.pressed.has(code);
        })
        if (is_combination_pressed){
            this.pressed.clear()
            this.handleOpen()
        }
        console.log('as')
    }
    handlerKeyUp = (event) =>{
        this.pressed.delete(event.code);
    }
    componentDidMount() {
        document.addEventListener("keydown",this.handlerKeyDown);
        document.addEventListener('keyup', this.handlerKeyUp);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown",this.handlerKeyDown,false);
        document.removeEventListener('keyup', this.handlerKeyUp,false);
    }

    handleOpen = () => {
        if (this.props.activeCategory === ''){
            this.props.showToast('Please select category first')
        }else{
            this.setState(({show})=>({show:!show}))
        }
    }

    inputHandler = (event) => {
        this.setState({taskName: event.target.value})
    }

    render() {
        const {taskName,show} = this.state
        const {createTask} = this.props
        return (
            <>
                <div className={'btn btn-sm btn-primary'} onClick={this.handleOpen}>
                    <i className={"fa fa-plus mr-3"}/>
                    New Task <br/><kbd><kbd>N</kbd> + <kbd>T</kbd></kbd>
                </div>
                <Modal show={show} onHide={this.handleOpen}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"form-group"}>
                            <input id={'list'} type="text" className={'form-control'} value={taskName}
                                   onChange={this.inputHandler}
                                   placeholder={'title'}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleOpen}>
                            Cancel
                        </Button>
                        <Button type={"submit"} variant="primary" onClick={() => createTask(taskName)}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default NewTask