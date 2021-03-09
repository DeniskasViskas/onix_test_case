import React from "react";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.item = this.props.data
    }
    render() {
        return (
            <div className={'d-flex list-item px-4 animate__animated animate__fadeInUp'+(this.props.data.is_complete ? ' complete':'')}>
                <div className={'d-flex align-items-center'}>
                    <div className={'d-flex align-items-center'}>
                        <input type="checkbox" className={'mr-3'} checked={this.props.data.is_complete}
                               onChange={() => {this.props.markTack(this.props.data.id,'is_complete')}}/>
                        <div className={'mr-3 list-item-icon' + (this.props.data.is_stared ? ' active' : '')}
                             title="star"
                             onClick={() => {this.props.markTack(this.props.data.id,'is_stared')}}
                        >
                            <i className={'fas fa-star'}/>
                        </div>
                        <div className={'mr-3 list-item-icon' + (this.props.data.is_important ? ' active' : '')}
                             title="important"
                             onClick={() => {this.props.markTack(this.props.data.id,'is_important')}}
                        >
                            <i className={'fas fa-tag'}/>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-1 align-self-center" data-toggle="view">
                    <div className={'font-weight-bolder' + (this.props.data.is_complete ? ' text-through' : '')}>
                        {this.props.data.title}
                    </div>
                </div>
                <div className="flex-grow-1 align-self-center" data-toggle="view">
                    <span className={'badge badge-info'}>{this.props.data.category}</span>
                </div>
                <div className="d-flex align-items-center justify-content-end flex-wrap">
                    <div className="font-weight-bolder">{new Date(this.props.data.time).toDateString()}</div>
                </div>

            </div>
        )
    }
}

export default Task