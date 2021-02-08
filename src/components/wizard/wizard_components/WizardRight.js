import React from "react"
import TabsContent from "./parts/TabsContent";

function WizardRight({tabIndexShow}) {
    return (
        <div className="wizard-right">
            <div className="tab-content text-justify">
                <TabsContent tabIndexShow={tabIndexShow}/>
            </div>
        </div>
    )
}
export default WizardRight