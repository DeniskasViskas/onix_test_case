import React from "react";

class List extends React.Component{
    render() {
        const {title,count,isActive,changeList} = this.props
        return(
            <div className={'navi-item'} onClick={()=>changeList(title)}>
                <div className={'navi-link'+(isActive ? ' active':'')}>
                    <span className={'navi-icon'}><i className="fas fa-chevron-right"/></span>
                    <span className={'navi-text text-capitalize'}>{title}</span>
                    <span className={'navi-label'}>
                                    <span className={'badge badge-primary'}>{count}</span>
                                </span>
                </div>
            </div>
        )
    }
}
export default List