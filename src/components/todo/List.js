import React from "react";

class List extends React.Component{
    constructor({title,count,isActive,changeList}) {
        super({title,count,isActive,changeList});
    }
    render() {
        return(
            <div className={'navi-item'} onClick={()=>this.changeList(this.title)}>
                <div className={'navi-link'+(this.isActive ? ' active':'')}>
                    <span className={'navi-icon'}><i className="fas fa-chevron-right"/></span>
                    <span className={'navi-text text-capitalize'}>{this.title}</span>
                    <span className={'navi-label'}>
                                    <span className={'badge badge-primary'}>{this.count}</span>
                                </span>
                </div>
            </div>
        )
    }
}
export default List