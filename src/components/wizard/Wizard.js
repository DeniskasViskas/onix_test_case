import React, {useState} from "react"
import WizardLeft from "./WizardLeft";
import WizardRight from "./WizardRight";
import PropTypes from "prop-types";
//просто вынес данные в отдельный файл - не удобно работать с этим файлом.
import {arr} from './wizard_data';

function Wizard() {
    const [data, setTabData] = useState(arr);
    function changeTab(id) {
        setTabData(
            data.map(tab=>({
                ...tab,
                active: tab.id === id
            }))
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