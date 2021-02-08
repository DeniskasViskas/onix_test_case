import React, {useState} from "react"
import WizardLeft from "./wizard_components/WizardLeft";
import WizardRight from "./wizard_components/WizardRight";
import PropTypes from "prop-types";
const {arr} = require('./wizard_data')

function Wizard() {
    const [data, setTabData] = useState(arr);
    function changeTab(id) {
        setTabData(
            data.map(tab=>{
                if (tab.id ===id){
                    tab.active = true;
                }else{
                    tab.active = false;
                }
                return tab
            })
        )
    }
    return (
        <div className={"card-body p-0"}>
            <div className={"wizard-block wizard-vertical"}>
                <WizardLeft tabsData={data} onTabClick={changeTab}/>
                <WizardRight tabsData={data}/>
            </div>
        </div>
    )
}
Wizard.propTypes = {
    tabIndex: PropTypes.number,
    setTabData: PropTypes.func,
    changeTab: PropTypes.func,
    wizard_data: PropTypes.array
};
export default Wizard