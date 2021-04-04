import React from "react";
import "./TableCSS.css"
import TableRow from "./TableRow";
import TableForm from "./TableForm";

function BiographyTable() {
    let biographyData = [
        {
            'year': 2020,
            'event': 'React tutorial',
            'additional_info': {
                'photo': [],
                'person': ['person1', 'person2']
            }
        },
        {
            'year': 1992,
            'event': 'born',
            'additional_info': {
                'photo': [],
                'person': ['person1']
            }
        },
        {
            'year': 1999,
            'event': 'go to school',
            'additional_info': {
                'photo': [],
                'person': ['person3']
            }
        }
    ];

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min //Максимум и минимум включаются
    }

    function add(data, action) {
        console.log(biographyData,'start add')
        switch (action) {
            default:
            case 'push':
                // biographyData = biographyData.concat(data)
                biographyData = [...biographyData, {...data}]
                break
            case 'unshift':
                // biographyData = [data].concat(biographyData)
                biographyData = [{...data}, ...biographyData]
                break
            case 'index':
                let index = getRandomIntInclusive(0, biographyData.length);
                biographyData.splice(index, 0, {...data})
                break
        }
        console.log(biographyData,'end add')
    }

    function remove(index) {
        console.log(biographyData,'start delete')
        let arr = biographyData.filter((item, i) =>i !== index)
        console.log(arr,'end delete')
    }

    function bubbleSort(prop) {
        let arr = [...biographyData];
        let n = arr.length;
        console.log(arr,'start bubbleSort')
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (+arr[j + 1][prop] < +arr[j][prop]) {
                    let t = arr[j + 1]
                    arr[j + 1] = arr[j]
                    arr[j] = t
                }
            }
        }
        console.log(arr,'end bubbleSort')
    }

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
                <TableForm formSubmit={add}/>
            </div>
            <div className={"card-body p-0"}>
                <div className={"table-responsive text-center "}>
                    <table className={"table table-custom"}>
                        <thead className={"table-head"}>
                        <tr className={"table-row"}>
                            <th className={"table-cell"}><span>id</span></th>
                            <th className={"table-cell cell-sortable"}>
                                <span>year</span>
                            </th>
                            <th className={"table-cell cell-sortable"}>
                                <span>event</span>
                            </th>
                            <th className={"table-cell"}>
                                <span>Person</span>
                            </th>
                            <th className={"table-cell"}>
                                <span>action</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className={"table-body"}>
                        {
                            biographyData.map((item, index) =>
                                <TableRow key={index} item={item} index={index} remove={remove}/>
                            )
                        }
                        </tbody>
                    </table>
                    <div className={"btn-group"}>
                        <div className={"btn btn-danger"} onClick={() => {
                            bubbleSort('year')
                        }}>
                            Bubble Sort
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BiographyTable;