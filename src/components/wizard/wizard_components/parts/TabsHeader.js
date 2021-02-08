import React from "react";
import PropTypes from 'prop-types';

function TabsHeader({isActive,tabIndex,icon,setTabIndex,label,title}) {
    return (
        <li className="nav-item" role="presentation">
            <div className={"nav-link"+(isActive  ? ' active' : '')} onClick={()=>setTabIndex(tabIndex)}
               data-bs-toggle="tab" href="#" role="tab" data-row={isActive} aria-selected="true" >
                <div className="wizard-icon">
                    <i className={icon}/>
                </div>
                <div className="wizard-label">
                    <h3>{title}</h3>
                    <div className="wizard-desc text-muted">{label}</div>
                </div>
            </div>
        </li>
    )
}
TabsHeader.propTypes = {
    isActive: PropTypes.bool,
    tabIndex: PropTypes.number,
    iconClass: PropTypes.string,
    tabTitle: PropTypes.string,
    tabLabel: PropTypes.string
};
export default TabsHeader;