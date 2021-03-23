import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this)
        this.inputHandler = this.inputHandler.bind(this)
        this.state = {
            show: false,
            taskName: '',
        }
    }
    componentDidMount() {
        let e  = this;
        let pressed = new Set();
        document.addEventListener("keydown",function (event){
            let codes = ["KeyN","KeyT"]
            pressed.add(event.code)
            for (let code of codes) { // все ли клавиши из набора нажаты?
                if (!pressed.has(code)) {
                    return;
                }
            }
            pressed.clear()
            e.handleOpen()
        });
        document.addEventListener('keyup', function(event) {
            pressed.delete(event.code);
        });
    }

    handleOpen() {
        if (this.props.activeCategory === ''){
            this.props.showToast('Please select category first')
        }else{
            this.setState(({show})=>({show:!show}))
        }
    }

    inputHandler(event) {
        this.setState({taskName: event.target.value})
    }

    render() {
        return (
            <>
                <div className={'btn btn-sm btn-primary'} onClick={this.handleOpen}>
                    <i className={"fa fa-plus mr-3"}/>
                    New Task <br/><kbd><kbd>N</kbd> + <kbd>T</kbd></kbd>
                </div>
                <Modal show={this.state.show} onHide={this.handleOpen}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"form-group"}>
                            <input id={'asdda'} type="text" className={'form-control'} value={this.state.taskName}
                                   onChange={this.inputHandler}
                                   placeholder={'title'}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleOpen}>
                            Cancel
                        </Button>
                        <Button type={"submit"} variant="primary" onClick={() => this.props.createTask(this.state.taskName)}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default NewTask