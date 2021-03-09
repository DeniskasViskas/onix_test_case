import React from "react";

class List extends React.Component{
    render() {
        return(
            <div className={'navi-item'} onClick={()=>this.props.changeList(this.props.title)}>
                <div className={'navi-link'+(this.props.isActive ? ' active':'')}>
                    <span className={'navi-icon'}><i className="fas fa-chevron-right"/></span>
                    <span className={'navi-text text-capitalize'}>{this.props.title}</span>
                    <span className={'navi-label'}>
                                    <span className={'badge badge-primary'}>{this.props.count}</span>
                                </span>
                </div>
            </div>
        )
    }
}
export default List