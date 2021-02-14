import React, {useState} from "react";
import "./TableCSS.css"
import TableRow from "./TableRow";
import TableForm from "./TableForm";

function BiographyTable() {
    const arr = [
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
    ];
    const [biographyData , setBiographyData] = useState(arr)
    const [sortType ,setSortType] = useState('')
    const [sortProp ,setSortProp] = useState('')
    function sortByProp(prop) {
        return function(a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }
    function sortData(prop,type) {
        setSortProp(prop)
        biographyData.sort(sortByProp(prop));
        if (type === 'desc'){
            biographyData.reverse()
        }
        (sortType === 'desc') ? setSortType('asc') : setSortType('desc')
        setBiographyData(biographyData)
    }
    function add(data) {
        setBiographyData(biographyData.concat(data))
    }
    function remove(index) {
        setBiographyData(
            biographyData.filter((item,i)=>{
                return i !== index;
            })
        )
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
                                <span onClick={()=>sortData('year',sortType)}>year</span>
                                {
                                    sortProp ==='year' && sortType === 'asc' &&
                                    <i className="fas fa-long-arrow-alt-up"/>
                                }
                                {
                                    sortProp ==='year' && sortType === 'desc' &&
                                    <i className="fas fa-long-arrow-alt-down"/>
                                }
                            </th>
                            <th className={"table-cell cell-sortable"}>
                                <span onClick={()=>sortData('event',sortType)}>event</span>
                                {
                                    sortProp ==='event' && sortType === 'asc' &&
                                    <i className="fas fa-long-arrow-alt-up"/>
                                }
                                {
                                    sortProp ==='event' && sortType === 'desc' &&
                                    <i className="fas fa-long-arrow-alt-down"/>
                                }
                            </th>
                            <th className={"table-cell"}>
                                <span>action</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className={"table-body"}>
                        {
                            biographyData.map((item,index)=>
                                <TableRow key={index} item={item} index={index} remove={remove}/>
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