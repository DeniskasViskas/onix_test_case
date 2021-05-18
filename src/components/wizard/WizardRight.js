import React from "react"
import TabsContent from "./TabsContent";
import PropTypes from "prop-types";

function WizardRight({tabsData}) {
    return (
        <div className="wizard-right">
            <div className="tab-content text-justify">
                {
                    tabsData.map((tab) =>
                    <TabsContent
                        key={tab.id}
                        data={tab}/>
                    )
                }
            </div>
        </div>
    )
}
WizardRight.propTypes = {
    tabsData: PropTypes.array
};
export default WizardRight