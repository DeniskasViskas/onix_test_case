import React from "react";
import "./TableCSS.css"
import TableRow from "./TableRow";
import TableForm from "./TableForm";
const SORT_ASC ='asc'
const SORT_DESC= 'desc';

function BiographyTable() {
    let biographyData = [
        {
            'year': 2020,
            'event': 'React tutorial',
            'additional_info':{
                'photo':[],
                'person':['person1','person2']
            }
        },
        {
            'year': 1992,
            'event': 'born',
            'additional_info':{
                'photo':[],
                'person':['person1']
            }
        },
        {
            'year': 1999,
            'event': 'go to school',
            'additional_info':{
                'photo':[],
                'person':['person3']
            }
        }
    ];
    let sortType = '';
    let sortProp = '';

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min //Максимум и минимум включаются
    }

    function sortByProp(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }

    function sortData(prop, type) {
        sortProp = prop
        biographyData.sort(sortByProp(prop));
        if (type === SORT_DESC) {
            biographyData.reverse()
        }
        sortType = (sortType === SORT_DESC) ? SORT_ASC : SORT_DESC
        console.log(biographyData)
    }

    function add(data, action) {
        switch (action) {
            case 'push':
                // biographyData = biographyData.concat(data)
                biographyData = [...biographyData,{...data}]
                break
            case 'unshift':
                // biographyData = [data].concat(biographyData)
                biographyData = [{...data},...biographyData]
                break
            case 'index':
                let index = getRandomIntInclusive(0, biographyData.length);
                biographyData.splice(index, 0, {...data})
                break
        }
        console.log(biographyData)
    }

    function remove(index) {
        console.log(
            biographyData.filter((item, i) => {
                return i !== index
            })
        )
    }

    function bubbleSort(prop) {
        let n = biographyData.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (biographyData[j + 1][prop] < biographyData[j][prop]) {
                    let t = biographyData[j + 1][prop]
                    biographyData[j + 1][prop] = biographyData[j][prop]
                    biographyData[j][prop] = t
                }
            }
        }
        console.log(biographyData)
        return biographyData;
    }

    function selectionSort(prop){
        console.log(biographyData)
        let n = biographyData.length
        for (let i = 0; i < n - 1; i++) {
            let min = i
            for (let j = i + 1; j < n; j++) {
                if (biographyData[j][prop] < biographyData[min][prop]) min = j
            }
            let t = biographyData[min][prop]
            biographyData[min][prop] = biographyData[i][prop]
            biographyData[i][prop] = t
        }
        console.log(biographyData)
        return biographyData;
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
                                <span onClick={() => sortData('year', sortType)}>year</span>
                                {
                                    sortProp === 'year' && sortType === SORT_ASC &&
                                    <i className="fas fa-long-arrow-alt-up"/>
                                }
                                {
                                    sortProp === 'year' && sortType === SORT_DESC &&
                                    <i className="fas fa-long-arrow-alt-down"/>
                                }
                            </th>
                            <th className={"table-cell cell-sortable"}>
                                <span onClick={() => sortData('event', sortType)}>event</span>
                                {
                                    sortProp === 'event' && sortType === SORT_ASC &&
                                    <i className="fas fa-long-arrow-alt-up"/>
                                }
                                {
                                    sortProp === 'event' && sortType === SORT_DESC &&
                                    <i className="fas fa-long-arrow-alt-down"/>
                                }
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
                        <div className={"btn btn-danger"} onClick={() => {bubbleSort('year')}}>
                            Bubble Sort
                        </div>
                        <div className={"btn btn-success"} onClick={() => {selectionSort('year')}}>
                            Selection Sort
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BiographyTable;