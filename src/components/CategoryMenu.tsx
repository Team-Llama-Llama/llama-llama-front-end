const CategoryMenu: React.FC = ({categories, getModulesHandler}) => {

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