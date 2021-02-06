import React, {useState} from "react"
import WizardLeft from "./wizard_components/WizardLeft";
import WizardRight from "./wizard_components/WizardRight";

function Wizard() {
    const [tabStatus, setTabStatus] = useState(
        [
            true,
            false,
            false,
            false,
            false,
            false,
        ]);
    function status(i) {
        const tabStatus_ = tabStatus.map(function (value,index) {
            return index === i;
        })
        setTabStatus(tabStatus_)
    }
    return (
        <div className={"card-body p-0"}>
            <div className={"wizard-block wizard-vertical"}>
                <WizardLeft tabStatus={tabStatus} onTabClick={status}/>
                <WizardRight tabStatus={tabStatus}/>
            </div>
        </div>
    )
}

export default Wizard