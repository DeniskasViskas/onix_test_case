import React from "react";
import PropTypes from 'prop-types';

function TabsHeader(props) {
    const isActive = props.isActive;
    const tabIndex = props.tabIndex;
    const iconClass = props.icon;
    const tabTitle = props.title;
    const tabLabel = props.label;
    function setTabIndex(index) {
        return props.setTabIndex(index)
    }
    return (
        <li className="nav-item" role="presentation">
            <div className={"nav-link"+(isActive  ? ' active' : '')} onClick={()=>setTabIndex(tabIndex)}
               data-bs-toggle="tab" href="#" role="tab" data-row={isActive} aria-selected="true" >
                <div className="wizard-icon">
                    <i className={iconClass}/>
                </div>
                <div className="wizard-label">
                    <h3>{tabTitle}</h3>
                    <div className="wizard-desc text-muted">{tabLabel}</div>
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