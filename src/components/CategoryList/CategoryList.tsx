import { CategoryInterface } from "../../interfaces/dataInterface";
import { useState, useEffect } from "react";
import {
  deleteCategory,
  addCategory,
  getCategories,
  editCategory,
} from "../../utilities/Api";
import AddCategory from "./components/AddCategory";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  userId: number;
  setActiveCategoryId: (category: number) => void;
  setActiveCategoryName: (name: string) => void;
  editing: boolean;
}


const CategoryList = ({ userId, setActiveCategoryId, setActiveCategoryName, editing }: Props) => {

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

  // Handlers
  // function handleCategoryClicked(id: number) {
  //   return () => {
  //     setActiveCategoryId(id);
  //   };
  // }

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

  const invalidStringCategory = () => toast.warn("You have to give a name to the category", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

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
      invalidStringCategory();
    }
  };

  return (
    <div className="w-72 p-3">
      <AddCategory handleAddCategory={handleAddCategory} editing={editing} />
      {categories.map((category, index) => (
        <div className="p-1" key={category.id}>
          {editingCategoryId === category.id ? (
            <>
              <input
                className="bg-slate-800 text-white border-b-2 border-white focus:outline-none p-1 w-3/4"
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <button
                className="bg-slate-800 p-1 w-1/4 text-white text-2xl"
                onClick={() => handleUpdateCategory(category.id)}
              >
                ✓
              </button>
            </>
          ) : (
            <>
              <button
                className="border-none text-left text-white font-bold p-1 w-8/12"
                onClick={() => {
                  setActiveCategoryId(category.id);
                  setActiveCategoryName(category.name);
                }}
              >
                {category.name}
              </button>
              <button
                className="border-none p-1 w-2/12 text-white text-2xl"
                onClick={() => handleEditCategory(category)}
                disabled={editing}
              >
                ✎
              </button>
              <button
                className="border-none p-1 w-2/12 text-white text-2xl"
                onClick={() => handleDeleteCategory(category.id, index)}
                disabled={editing}
              >
                ✘
              </button>
            </>
          )}
          <ToastContainer />
        </div>
      ))}
      
    </div>

  );
};

export default CategoryList;
