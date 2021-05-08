import React, {useEffect, useState} from "react";
import '../todo.css';
import CategoryItem from "./CategoryItem";

function Categories(props){
    const [showNewCategoryForm , setShowNewCategoryForm] = useState(false)
    const [newCategoryName , setNewCategoryName] = useState('')
    let pressed = new Set()
    const inputHandler = (event) => setNewCategoryName( event.target.value)
    const showNewCategoryHandler = () =>setShowNewCategoryForm((showNewCategoryForm)=>(!showNewCategoryForm))
    const handlerKeyDown = (event)=>{
        let codes = ["KeyN","KeyC"]
        pressed.add(event.code)
        for (let code of codes) { // все ли клавиши из набора нажаты?
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear()
        showNewCategoryHandler()
    }
    const handlerKeyUp = (event)=>pressed.delete(event.code);

    const {categories,createCategory} = props

    useEffect(() => {
        //региструем события
        document.addEventListener("keydown",handlerKeyDown);
        document.addEventListener('keyup', handlerKeyUp);
        return () => {
            // при "уничтожений" компонента нужно удалить слушателей события, что бы они не отработывали на других страницах приложения
            document.removeEventListener("keydown",handlerKeyDown,false);
            document.removeEventListener('keyup', handlerKeyUp,false);
        }
    });
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
                                changeList={(val) => props.changeList(val)}
                                isActive={(item.name === props.activeCategory)}
                            />
                        ))
                    }
                    <div className={'navi-item'}
                         onClick={showNewCategoryHandler}>
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
                                       onChange={inputHandler}
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

export default Categories