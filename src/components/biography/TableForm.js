import React from "react";
function TableForm() {
    return (
        <form action="" className={"form-inline text-center"}>
            {/*<div className={"form-inline"}>*/}
            <div className={'form-group mx-sm-3'}>
                <input type="text" className={"form-control"} name={"year"} placeholder={'Year'} required/>
            </div>
            <div className={'form-group mx-sm-3'}>
                <input type="text" className={"form-control"} name={"event"} placeholder={'Event'} required/>
            </div>
            <div className={'form-group mx-sm-3'}>
                <button className={"btn btn-primary"}>Add</button>
            </div>
            {/*</div>*/}
        </form>
    )
}

export default TableForm