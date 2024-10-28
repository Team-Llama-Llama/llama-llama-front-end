import { CategoryInterface } from "../../interfaces/dataInterface";
import { useState, useEffect } from "react";
import {
  deleteCategory,
  addCategory,
  getCategories,
} from "../../utilities/Api";
import AddCategory from "./components/AddCategory";

interface Props {
  userId: number;
  setActiveCategoryId: (category: number) => void;
  editing: boolean;
}

const CategoryList = ({ userId, setActiveCategoryId, editing }: Props) => {
  // Pick correct type! [ ]
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  // Effects
  useEffect(() => {
    // Imagine that this will work at the first render
    handleFetchCategories();
  }, []);

  // Debug
  useEffect(() => {
  }, [categories]);

  // Handlers
  function handleCategoryClicked(id: number) {
    return () => {
      setActiveCategoryId(id);
    };
  }

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

  return (
    <div className="border-2 w-72 p-3 rounded bg-sky-50">
      {categories.map((category, index) => {
        return (
          <div className="p-1" key={category.id}>
            <button className="border-2 rounded p-1 w-10/12 bg-blue-400 hover:bg-blue-500 text-white font-bold" onClick={handleCategoryClicked(category.id)}>
              {category.name}
            </button>
            <button className="border-2 p-1 w-2/12 bg-red-100 hover:bg-red-200 rounded"
              onClick={() => {
                handleDeleteCategory(category.id, index);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <AddCategory handleAddCategory={handleAddCategory} editing={editing} />
    </div>
  );
};

export default CategoryList;
