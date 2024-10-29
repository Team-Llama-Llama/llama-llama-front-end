import { useState } from "react";

interface Props {
  handleAddCategory: (categoryName: string) => () => Promise<void>;
  editing: boolean;
}

const AddCategory = ({ handleAddCategory, editing }: Props) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleClick = async () => {
    if (!categoryName.trim()) {
      setError("The category Names cannot be empty!");
    } else {
      setError("");
      await handleAddCategory(categoryName)();
      setCategoryName(""); 
    }
  };

  return (
    <form className="p-1">
      <input
        className="border-2 p-1 w-3/4"
        type="text"
        placeholder="New Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button
        className="border-2 p-1 w-1/4 bg-blue-400 hover:bg-blue-500 text-white"
        type="button"
        onClick={handleClick}
      >
        Add 
      </button>
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </form>
  );
};

export default AddCategory;

