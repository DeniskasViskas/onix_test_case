import React from "react"
class CustomDnD extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list:[
                "title1",
                "title2",
                "title3",
                "title4"
            ]
        }
        this.draggingItem = React.createRef()
        this.dragOverItem = React.createRef()
    }
    handleDragStart = (event,position)=>{
        this.draggingItem.current = position
    }
    handleDragEnter = (event,position) =>{
        this.dragOverItem.current = position
        const {list} = this.state
        const listCopy = [...list]
        const draggingItemContent = listCopy[this.draggingItem.current]
        listCopy.splice(Number(this.draggingItem.current), 1)
        listCopy.splice(Number(this.dragOverItem.current), 0, draggingItemContent)
        this.draggingItem.current = this.dragOverItem.current
        this.dragOverItem.current = null
        this.setState({list:listCopy});
    }
    render() {
       const {list} = this.state
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
                                list.map((item,index)=>(
                                    <li className={'custom_dnd_item'}
                                        key={index}
                                        draggable
                                        onDragStart={(event)=>this.handleDragStart(event,index)}
                                        onDragEnter={(event)=>this.handleDragEnter(event,index)}
                                        onDragOver = {(e) => (e.preventDefault())}
                                    >{item}</li>
                                ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CustomDnD