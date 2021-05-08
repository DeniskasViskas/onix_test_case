import {useState} from "react"

function CustomDnD() {
    const [list, setList] = useState([
        "0",
        "1",
        "2",
        "3"
    ])
    const [draggingItem, setDraggingItem] = useState(null)
    let dragOverItem = 0
    const handleDragStart = (event, position) => setDraggingItem(position)
    const handleDragEnter = (event, position) => {
        dragOverItem = position
        const copyList = [...list]
        const draggingItemContent = copyList[draggingItem]
        copyList.splice(Number(draggingItem), 1)
        copyList.splice(Number(dragOverItem), 0, draggingItemContent)
        setDraggingItem(position)
        setList(copyList);
    }
    return (
        <div className={'card custom-card'}>
            <div className="card-header bg-white">
                <div className="card-title">
                    <h3 className={'text-uppercase'}>Custom dnd</h3>
                    <div className={"text-muted"}>drag & drop</div>
                </div>
            </div>
            <div className={'card-body text-center'}>
                <ul className={'custom_dnd_list'}>
                    {
                        list &&
                        list.map((item, index) => (
                            <li className={'custom_dnd_item'}
                                key={index}
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragEnter={(e) => handleDragEnter(e, index)}
                                onDragOver={(e) => (e.preventDefault())}
                            >{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CustomDnD