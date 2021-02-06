import React, {useState} from "react"
import WizardLeft from "./wizard_components/WizardLeft";
import WizardRight from "./wizard_components/WizardRight";
import PropTypes from "prop-types";

function Wizard() {
    const [tabIndex, setTabIndex] = useState(0);
    function changeIndex(index) {
        setTabIndex(index)
    }
    return (
        <div className={"card-body p-0"}>
            <div className={"wizard-block wizard-vertical"}>
                <WizardLeft tabIndexShow={tabIndex} onTabClick={changeIndex}/>
                <WizardRight tabIndexShow={tabIndex}/>
            </div>
        </div>
    )
}
Wizard.propTypes = {
    tabIndex: PropTypes.number,
    setTabIndex: PropTypes.func,
    changeIndex: PropTypes.func
};
export default Wizard