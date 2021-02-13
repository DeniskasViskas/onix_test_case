import React from "react";

function TableRow({item,index}) {
    return (
        <tr className={"table-row"}>
            <td className={"table-cell"}><span>{index+1}</span></td>
            <td className={"table-cell"}><span>{item.year}</span></td>
            <td className={"table-cell"}><span>{item.event}</span></td>
            <td className={"table-cell"}>
                <span>
                    <div className={"btn btn-sm btn-clear"}><i className={"fas fa-times"}></i></div>
                </span>
            </td>
        </tr>
    )
}

export default TableRow;