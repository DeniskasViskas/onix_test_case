import React from "react";
import './todo.css';
import List from "./List";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.inputHandler = this.inputHandler.bind(this)
        this.showNewCategoryHandler = this.showNewCategoryHandler.bind(this)
        this.state = {
            showNewCategoryForm: false,
            newCategoryName: '',
            count: 0
        }
    }

    inputHandler(event) {
        this.setState({newCategoryName: event.target.value})
    }
    showNewCategoryHandler(){
        this.setState(({showNewCategoryForm})=>({showNewCategoryForm:!showNewCategoryForm}))
    }

    componentDidMount() {
        let e  = this;
        let pressed = new Set();
        document.addEventListener("keydown",function (event){
            let codes = ["KeyN","KeyC"]
            pressed.add(event.code)
            for (let code of codes) { // все ли клавиши из набора нажаты?
                if (!pressed.has(code)) {
                    return;
                }
            }
            pressed.clear()
            e.showNewCategoryHandler()
        });
        document.addEventListener('keyup', function(event) {
            pressed.delete(event.code);
        });
    }

    render() {
        return (
            <div className={'card custom-card p-0'}>
                <div className={'card-body px-4'}>
                    <div className={'navi'}>
                        <div className={'navi-section px-4'}>
                            Category
                        </div>
                        {
                            this.props.categories.map((item, index) => {
                                return <List
                                    title={item.name}
                                    count={item.count}
                                    key={index}
                                    changeList={(val) => this.props.changeList(val)}
                                    isActive={(item.name === this.props.activeCategory)}
                                />
                            })
                        }
                        <div className={'navi-item'}
                             onClick={this.showNewCategoryHandler}>
                            <div className={'navi-link'}>
                                <span className={'navi-icon'}>
                                    {
                                        this.state.showNewCategoryForm ?
                                            <i className="fas fa-chevron-down"/> :
                                            <i className="fas fa-chevron-right"/>
                                    }

                                </span>
                                <span className={'navi-text'}>New Category</span>
                                <kbd><kbd>N</kbd> + <kbd>C</kbd></kbd>
                            </div>
                        </div>
                        {
                            this.state.showNewCategoryForm &&
                            <div className={'navi-item mt-2'}>
                                <div className="input-group mb-3">
                                    <input type="text" value={this.state.newCategoryName} name={'new_cat_name'}
                                           className="form-control" placeholder="Category name"
                                           onChange={this.inputHandler}
                                    />
                                    <div className="input-group-append">
                                        <div className="btn btn-primary"
                                             onClick={() => this.props.createCategory(this.state.newCategoryName)}>
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

export default TodoList