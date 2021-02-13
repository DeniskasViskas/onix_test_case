import React from "react";
import "./TableCSS.css"
import TableRow from "./TableRow";
import TableForm from "./TableForm";
import TabsContent from "../wizard/wizard_components/parts/TabsContent";

function BiographyTable() {
    const biographyData = [
        {
            'year':2020,
            'event':'React tutorial'
        },
        {
            'year':1992,
            'event':'born'
        },
        {
            'year':1999,
            'event':'go to school'
        }
    ]
    return (
        <div className="card custom-card p-0 col-lg-8 col-12 offset-lg-2 shadow">
            <div className="card-header bg-white">
                <div className="card-title">
                    <div className={"text-left"}>
                        <h3>Biography</h3>
                        <div className={"text-muted"}>by Diachenko</div>
                    </div>
                </div>
            </div>
            <div className={"card-body m-auto"}>
                <TableForm/>
            </div>
            <div className={"card-body p-0"}>
                <div className={"table-responsive text-center "}>
                    <table className={"table table-custom"}>
                        <thead className={"table-head"}>
                        <tr className={"table-row"}>
                            <th className={"table-cell"}><span>id</span></th>
                            <th className={"table-cell"}><span>year</span></th>
                            <th className={"table-cell"}><span>event</span></th>
                            <th className={"table-cell"}><span>action</span></th>
                        </tr>
                        </thead>
                        <tbody className={"table-body"}>
                        {
                            biographyData.map((item,index)=>
                                <TableRow key={index} item={item} index={index}/>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BiographyTable;