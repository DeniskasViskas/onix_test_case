import React from "react";

function TableRow({item,index,remove}) {

    return (
        <tr className={"table-row"}>
            <td className={"table-cell"}><span>{index+1}</span></td>
            <td className={"table-cell"}><span>{item.year}</span></td>
            <td className={"table-cell"}><span>{item.event}</span></td>
            <td className={"table-cell"}>
                <span>{item.additional_info.person.join(',')}</span>
            </td>
            <td className={"table-cell"}>
                <span>
                    <div className={"btn btn-sm btn-clear"} onClick={()=>remove(index)}><i className={"fas fa-times"}></i></div>
                </span>
            </td>
        </tr>
    )
}

export default TableRow;