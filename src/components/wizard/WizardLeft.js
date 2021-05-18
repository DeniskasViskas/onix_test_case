import React from "react"
import TabsHeader from "./TabsHeader";
import PropTypes from "prop-types";

function WizardLeft({tabsData,onTabClick}) {
    return (
        <div className={"wizard-left border-right"}>
            <ul className="nav nav-tabs d-inline-block" id="myTab" role="tablist">
                {
                    tabsData.map((tab)=>(
                        <TabsHeader
                            key={tab.id}
                            data={tab}
                            onTabClick={onTabClick}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
WizardLeft.propTypes = {
    setTabIndex: PropTypes.func,
    tabIndexShow: PropTypes.number
};
export default WizardLeft