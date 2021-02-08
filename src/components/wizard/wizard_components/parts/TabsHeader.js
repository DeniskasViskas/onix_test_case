import React from "react";
import PropTypes from 'prop-types';

function TabsHeader({data,onTabClick}) {
    return (
        <li className="nav-item" role="presentation" key={data.id}>
            <div  className={"nav-link"+(data.active  ? ' active' : '')} onClick={()=>onTabClick(data.id)}
               data-bs-toggle="tab" href="#" role="tab" data-row={data.tabIndex} aria-selected="true" >
                <div className="wizard-icon">
                    <i className={data.icon}/>
                </div>
                <div className="wizard-label">
                    <h3>{data.title}</h3>
                    <div className="wizard-desc text-muted">{data.label}</div>
                </div>
            </div>
        </li>
    )
}
TabsHeader.propTypes = {
    data: PropTypes.object,
    onTabClick: PropTypes.func
};
export default TabsHeader;