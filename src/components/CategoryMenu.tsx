import { CategoryInterface } from "./dataInterface"
import { addCategory } from "../utilities/Api"

interface Props {
    categories: CategoryInterface[],
    getModulesHandler: (categoryId: number) => Promise<void>,
}

// export const addCategory = async (name: string) => {
//     const response = await fetch(`${API_URL}/categories`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name }),
//     });
//     return response.json();
//   };

const CategoryMenu = ({categories, getModulesHandler}: Props) => {

    return (
    
        <div>
            {categories.map((category, index) => {
                return <div 
                            className="category" 
                            key={index}
                        >
                            <button onClick={()=>getModulesHandler(category.id)}>{category.name}</button>
                        </div>
                })
            }
        </div>
        

    )

}

export default CategoryMenu;