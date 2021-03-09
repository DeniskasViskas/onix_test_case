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
            taskName: ''
        }
    }

    handleOpen() {
        this.setState({show: !this.state.show})
    }

    inputHandler(event) {
        this.setState({taskName: event.target.value})
    }

    render() {
        return (
            <>
                <div className={'btn btn-sm btn-primary'} onClick={this.handleOpen}>
                    <i className={"fa fa-plus mr-3"}/>
                    New Task
                </div>
                <Modal show={this.state.show} onHide={this.handleOpen}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"form-group"}>
                            <input type="text" className={'form-control'} value={this.state.taskName}
                                   onChange={this.inputHandler}
                                   placeholder={'title'}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleOpen}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => this.props.createTask(this.state.taskName)}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default NewTask