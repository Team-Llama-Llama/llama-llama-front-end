import CreateModule from "./CreateModule";
import { CategoryInterface } from "./dataInterface"
import AddCategoryForm from "./AddCategoryForm"
import { useState } from "react";
import { deleteCategory } from "../utilities/Api";

interface Props {
    categories: CategoryInterface[],
    getModulesHandler: (categoryId: number) => Promise<void>,
}

const CategoryMenu = ({categories, getModulesHandler}: Props) => {

  const [categoryId, setCategoryId] = useState<number>();

    //fix any
    const handleDelete = async (categoryId : any) => {
        await deleteCategory(categoryId)
        window.location.reload();
    }

    return (
    
        <div>
            <div className="CreateModule">
                <CreateModule 
                    categoryId={categoryId}
                />
            </div>

            <div>
                {categories.map((category) => {
                    return <div 
                                className="category" 
                                key={category.id}
                            >
                                <button onClick={()=> {
                                    setCategoryId(category.id)
                                    getModulesHandler(category.id)                        
                                    console.log(category.id);
                                }
                                    }>{category.name}</button>
                                <button
                                    onClick={()=>{handleDelete(category.id)}}
                                >
                                    Delete
                                </button>
                            </div>
                    })
                }
                <AddCategoryForm/>
            </div>
        </div>
    
    )

}

export default CategoryMenu;