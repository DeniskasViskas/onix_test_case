import React from "react";
import '../todo.css';
import CategoryItem from "./CategoryItem";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewCategoryForm: false,
            newCategoryName: '',
            count: 0
        }
        this.pressed = new Set()
    }

    inputHandler = (event) => {
        this.setState({newCategoryName: event.target.value})
    }
    showNewCategoryHandler = () =>{
        this.setState(({showNewCategoryForm})=>({showNewCategoryForm:!showNewCategoryForm}))
    }
    handlerKeyDown = (event)=>{
        let codes = ["KeyN","KeyC"]
        this.pressed.add(event.code)
        for (let code of codes) { // все ли клавиши из набора нажаты?
            if (!this.pressed.has(code)) {
                return;
            }
        }
        this.pressed.clear()
        this.showNewCategoryHandler()
    }
    handlerKeyUp = (event)=>{
        this.pressed.delete(event.code);
    }
    componentDidMount() {
        document.addEventListener("keydown",this.handlerKeyDown);
        document.addEventListener('keyup', this.handlerKeyUp);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown",this.handlerKeyDown,false);
        document.removeEventListener('keyup', this.handlerKeyUp,false);
    }

    render() {
        const {categories,createCategory} = this.props
        const {showNewCategoryForm,newCategoryName} = this.state
        return (
            <div className={'card custom-card p-0'}>
                <div className={'card-body px-4'}>
                    <div className={'navi'}>
                        <div className={'navi-section px-4'}>
                            Category
                        </div>
                        {
                            categories.map((item, index) => (
                                <CategoryItem
                                    title={item.name}
                                    count={item.count}
                                    key={index}
                                    changeList={(val) => this.props.changeList(val)}
                                    isActive={(item.name === this.props.activeCategory)}
                                />
                                ))
                        }
                        <div className={'navi-item'}
                             onClick={this.showNewCategoryHandler}>
                            <div className={'navi-link'}>
                                <span className={'navi-icon'}>
                                    {
                                        showNewCategoryForm ?
                                            <i className="fas fa-chevron-down"/> :
                                            <i className="fas fa-chevron-right"/>
                                    }

                                </span>
                                <span className={'navi-text'}>New Category</span>
                                <kbd><kbd>N</kbd> + <kbd>C</kbd></kbd>
                            </div>
                        </div>
                        {
                            showNewCategoryForm &&
                            <div className={'navi-item mt-2'}>
                                <div className="input-group mb-3">
                                    <input type="text" value={newCategoryName} name={'new_cat_name'}
                                           className="form-control" placeholder="Category name"
                                           onChange={this.inputHandler}
                                    />
                                    <div className="input-group-append">
                                        <div className="btn btn-primary"
                                             onClick={() => createCategory(newCategoryName)}>
                                            <i className={"fa fa-plus"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories