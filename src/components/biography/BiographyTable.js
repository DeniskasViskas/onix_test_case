import React from "react";

function BiographyTable() {
    return (
        <div className={"table-responsive"}>
            <table className={'table table-stict'}>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Год</td>
                        <td>Событие</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2020</td>
                        <td>курсы реакт</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default BiographyTable;