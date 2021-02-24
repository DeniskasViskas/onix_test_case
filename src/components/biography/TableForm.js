import React from "react";
function TableForm({formSubmit}) {
    let action = '';
    function handleSubmit(event) {
        event.preventDefault();
        formSubmit(
            {
                year:Number(event.target.year.value),
                event:event.target.event.value,
                additional_info:{
                    person:[],
                    photo:[]
                }
            },action
        )
    }
    return (
        <form action="" className={"text-center"} onSubmit={handleSubmit}>
            <div className={"form-inline"}>
                <div className={'form-group mx-sm-3'}>
                    <input type="number" step={1} className={"form-control"} name={"year"} placeholder={'Year'} required/>
                </div>
                <div className={'form-group mx-sm-3'}>
                    <input type="text" className={"form-control"} name={"event"} placeholder={'Event'} required/>
                </div>
            </div>
            <br/>
            <div className={'mx-sm-3 btn-group'}>
                <button className={"btn btn-primary"} onClick={()=>{action = 'push'}}>Push</button>
                <button className={"btn btn-warning"} onClick={()=>{action = 'unshift'}}>Unshift</button>
                <button className={"btn btn-info"} onClick={()=>{action = 'index'}}>Random index</button>
            </div>
        </form>
    )
}

export default TableForm