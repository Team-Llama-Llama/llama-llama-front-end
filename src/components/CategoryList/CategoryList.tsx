import { CategoryInterface } from "../../interfaces/dataInterface";
import { useState, useEffect } from "react";
import {
  deleteCategory,
  editCategory,
  addCategory,
  getCategories,
} from "../../utilities/Api";
import AddCategory from "./components/AddCategory";

interface Props {
  userId: number;
  setActiveCategoryId: (category: number) => void;
}

const CategoryList = ({ userId, setActiveCategoryId }: Props) => {
  // Pick correct type! [ ]
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null); //Davide edit
  const [newCategoryName, setNewCategoryName] = useState<string>("");              //Davide edit

  // Effects
  useEffect(() => {
    // Imagine that this will work at the first render
    handleFetchCategories();
  }, []);

  // Debug
  useEffect(() => {
  }, [categories]);

  /*Handlers
    function handleCategoryClicked(id: number) {
      return () => {
      setActiveCategoryId(id);
    };
  }*/

  // HTTP handling
  const handleFetchCategories = async () => {
    const allCategories = await getCategories(userId);
    setCategories(allCategories);
  };

  const handleAddCategory = (categoryName: string) => {
    return async () => {
      const objectCreated = await addCategory(categoryName, userId);
      // Its correctly validate it?
      if (objectCreated) {
        setCategories([...categories, objectCreated.data]);
      }
    };
  };

  const handleDeleteCategory = async (categoryId: number, index: number) => {
    const statusCode = await deleteCategory(categoryId);
    if (statusCode === 200) {
      const temp = [...categories];
      temp.splice(index, 1);
      setCategories(temp);
    } else {
      alert("Error!");
    }
  };

  const handleEditCategory = (category: CategoryInterface) => {  //Davide edit
    setEditingCategoryId(category.id);
    setNewCategoryName(category.name);
  };

  const handleUpdateCategory = async (categoryId: number) => {   //Davide edit
    if (newCategoryName.trim()) {
      const updatedCategory = await editCategory(categoryId, newCategoryName);
      if (updatedCategory) {
        setCategories(categories.map((categ) => 
          categ.id === categoryId ? { ...categ, name: newCategoryName } : categ
        ));
        setEditingCategoryId(null);
        setNewCategoryName("");
      }
    } else {
      alert("You have to write something!");
    }
  };

  return (
    <div className="border-2 w-72 p-3 rounded bg-sky-50">
      {categories.map((category, index) => (
        <div className="p-1" key={category.id}>
          {editingCategoryId === category.id ? (
            <>
              <input
                className="border-2 p-1 w-3/4"
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <button
                className="border-2 p-1 w-1/4 bg-blue-400 hover:bg-blue-500 text-white"
                onClick={() => handleUpdateCategory(category.id)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <button
                className="border-2 rounded p-1 w-8/12 bg-blue-400 hover:bg-blue-500 text-white font-bold"
                onClick={() => setActiveCategoryId(category.id)}
              >
                {category.name}
              </button>
              <button
                className="border-2 p-1 w-2/12 bg-yellow-100 hover:bg-yellow-200 rounded"
                onClick={() => handleEditCategory(category)}
              >
                Edit
              </button>
              <button
                className="border-2 p-1 w-2/12 bg-red-100 hover:bg-red-200 rounded"
                onClick={() => handleDeleteCategory(category.id, index)}
              >
                X
              </button>
            </>
          )}
        </div>
      ))}
      <AddCategory handleAddCategory={handleAddCategory} />
    </div>
  );
};

export default CategoryList;
