import { Category } from "./dataInterface"

interface Props {
    categories: Category[],
    getModulesHandler: (categoryId: number) => Promise<void>,
}

const CategoryMenu = ({categories, getModulesHandler}: Props) => {

    return (
    
        <div>
            {categories.map((category, index) => {
                return <div 
                            className="category" 
                            key={index}
                        >
                            <button onClick={()=>getModulesHandler(category.id)}>category.name</button>
                        </div>
                })
            }
        </div>
        

    )

}

export default CategoryMenu;