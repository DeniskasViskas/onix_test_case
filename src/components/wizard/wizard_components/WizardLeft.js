import React from "react"

function WizardLeft(props) {
    const tabStatus = props.tabStatus
    function a(index) {
        console.log(index,'left')
        return props.onTabClick(index)

    }
    return(
        <div className={"wizard-left border-right"}>
            <ul className="nav nav-tabs d-inline-block" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className={"nav-link"+(tabStatus[0] ? ' active' : '')} onClick={()=>a(0)} data-bs-toggle="tab" href="#tab_1" role="tab" data-row="1" aria-selected="true" >
                        <div className="wizard-icon">
                            <i className="fab fa-github"/>
                        </div>
                        <div className="wizard-label">
                            <h3>Cистема контроля версий</h3>
                            <div className="wizard-desc text-muted">Что это? Зачем это?</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className={"nav-link"+(tabStatus[1] ? ' active' : '')} onClick={()=>a(1)} data-bs-toggle="tab" href="#tab_2" role="tab" aria-selected="false">
                        <div className="wizard-icon">
                            <i className="fab fa-git"/>
                        </div>
                        <div className="wizard-label">
                            <h3>Основы Git</h3>
                            <div className="wizard-desc text-muted">checkout, add, commit, pull, push</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className={"nav-link"+(tabStatus[2] ? ' active' : '')} onClick={()=>a(2)} data-bs-toggle="tab" href="#tab_3" role="tab" aria-selected="false">
                        <div className="wizard-icon">
                            <i className="fab fa-node-js"/>
                        </div>
                        <div className="wizard-label">
                            <h3>Nodejs</h3>
                            <div className="wizard-desc text-muted">Что это? Зачем это?</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className={"nav-link"+(tabStatus[3] ? ' active' : '')} onClick={()=>a(3)} data-bs-toggle="tab" href="#tab_4" role="tab" aria-selected="false">
                        <div className="wizard-icon">
                            <i className="fab fa-npm"/>
                        </div>
                        <div className="wizard-label">
                            <h3>Mенеджер пакетов npm</h3>
                            <div className="wizard-desc text-muted">установка npm</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className={"nav-link"+(tabStatus[4] ? ' active' : '')} onClick={()=>a(4)} data-bs-toggle="tab" href="#tab_5" role="tab" aria-selected="false">
                        <div className="wizard-icon">
                            <i className="fab fa-html5"/>
                        </div>
                        <div className="wizard-label">
                            <h3>Основы HTML</h3>
                            <div className="wizard-desc text-muted">теги, структура...</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className={"nav-link"+(tabStatus[5] ? ' active' : '')} onClick={()=>a(5)} data-bs-toggle="tab" href="#tab_6" role="tab" aria-selected="false">
                        <div className="wizard-icon">
                            <i className="fab fa-css3"/>
                        </div>
                        <div className="wizard-label">
                            <h3>Основы Css</h3>
                            <div className="wizard-desc text-muted">стили, классы, идентификаторы...</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default WizardLeft