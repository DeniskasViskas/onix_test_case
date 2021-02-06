import React from "react"
import TabsContent from "./parts/TabsContent";

function WizardRight(props) {
    const tabIndex = props.tabIndexShow
    return (
        <div className="wizard-right">
            <div className="tab-content text-justify">
                <TabsContent tabIndexShow={tabIndex}/>
            </div>
        </div>
    )
}
export default WizardRight