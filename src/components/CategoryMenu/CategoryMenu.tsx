import { CategoryInterface } from "../../interfaces/dataInterface";
import AddCategoryForm from "../AddCategoryForm";
import { useState, useEffect } from "react";
import { getCategories } from "../../utilities/Api";
import { deleteCategory } from "../../utilities/Api";

interface Props {
  userId: number;
  setActiveCategoryId: (category: number) => Promise<void>;
}

const CategoryMenu = ({ userId, setActiveCategoryId }: Props) => {
  // Pick correct type! [ ]
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  // Effects
  useEffect(() => {
    // Imagine that this will work at the first render
    handleFetchCategories();
  }, []);

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
    <div>
      {categories.map((category, index) => {
        return (
          <div className="category" key={category.id}>
            <button onClick={handleCategoryClicked(category.id)}>
              {category.name}
            </button>
            <button
              onClick={() => {
                handleDeleteCategory(category.id, index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <AddCategoryForm />
    </div>
  );
};

export default CategoryMenu;
