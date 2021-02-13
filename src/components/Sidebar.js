import React, {useState} from "react";
import {Link} from "react-router-dom";

function Sidebar() {
    const [isOpen, setOpen] = useState(false)
    function sideBarToggle() {
        setOpen(!isOpen)
    }

    return (
        <div className={"sidebar" + (isOpen ? ' open' : '')}>
            <div className={"sidebar-toggle text-center"}>
                <div>
                    {isOpen && 'LOGO'}
                    <Link to="/">
                        <i className={"fas"+(isOpen ? ' fa-chevron-left' : ' fa-chevron-right')} onClick={sideBarToggle}/>
                    </Link>
                </div>
            </div>
            <div>
                <ul className={"sidebar-menu"}>
                    <li className={"menu-section"}>
                        <h4 className={"text-menu"}>{(isOpen) ? 'Application': '...'}</h4>
                    </li>
                    <li className={"menu-item"}>
                        <a href="/" className={"menu-link"}><i className="fab fa-artstation"/>
                            {
                                isOpen && 'artstation'
                            }
                        </a>
                    </li>
                    <li className={"menu-item"}>
                        <a href="/" className={"menu-link"}><i className="fab fa-battle-net"/>
                            {
                                isOpen && 'battle net'
                            }
                        </a>
                    </li>
                    <li className={"menu-item"}>
                        <a href="/" className={"menu-link"}><i className="fab fa-angular"/>
                            {
                                isOpen && 'Angular'
                            }
                        </a>
                    </li>
                    <li className={"menu-section"}>
                        <h4 className={"text-menu"}>{(isOpen) ? 'Next Section': '...'}</h4>
                    </li>
                    <li className={"menu-item"}>
                        <a href="/" className={"menu-link"}><i className="fab fa-battle-net"/>
                            {
                                isOpen && 'battle net'
                            }
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar