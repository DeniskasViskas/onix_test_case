import React from "react"
import TabsHeader from "./parts/TabsHeader";
import PropTypes from "prop-types";

function WizardLeft(props) {
    function setTabIndex(index) {
        return props.onTabClick(index)
    }
    return (
        <div className={"wizard-left border-right"}>
            <ul className="nav nav-tabs d-inline-block" id="myTab" role="tablist">
                <TabsHeader isActive={(props.tabIndexShow === 0)}
                            tabIndex={0}
                            icon={"fab fa-github"}
                            setTabIndex={setTabIndex}
                            label={"Что это? Зачем это?"}
                            title={"Cистема контроля версий"}
                />
                <TabsHeader isActive={(props.tabIndexShow ===1)}
                            tabIndex={1}
                            icon={"fab fa-git"}
                            setTabIndex={setTabIndex}
                            label={"checkout, add, commit, pull, push"}
                            title={"Основы Git"}
                />
                <TabsHeader isActive={(props.tabIndexShow === 2)}
                            tabIndex={2}
                            icon={"fab fa-node-js"}
                            setTabIndex={setTabIndex}
                            label={"Что это? Зачем это?"}
                            title={"Nodejs"}/>
                <TabsHeader isActive={(props.tabIndexShow === 3)}
                            tabIndex={3}
                            icon={"fab fa-npm"}
                            setTabIndex={setTabIndex}
                            label={"установка npm"}
                            title={"Mенеджер пакетов npm"}
                />
                <TabsHeader isActive={(props.tabIndexShow === 4)}
                            tabIndex={4}
                            icon={"fab fa-html5"}
                            setTabIndex={setTabIndex}
                            label={"теги, структура..."}
                            title={"Основы HTML"}
                />
                <TabsHeader isActive={(props.tabIndexShow === 5)}
                            tabIndex={5}
                            icon={"fab fa-css3"}
                            setTabIndex={setTabIndex}
                            label={"стили, классы, идентификаторы..."}
                            title={"Основы Css"}
                />
            </ul>
        </div>
    )
}
WizardLeft.propTypes = {
    setTabIndex: PropTypes.func,
    tabIndexShow: PropTypes.number
};
export default WizardLeft