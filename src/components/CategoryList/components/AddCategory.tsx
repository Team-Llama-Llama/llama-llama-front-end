import { useState } from "react";

interface Props {
  handleAddCategory: (categoryName: string) => () => Promise<void>;
  editing: boolean;
}

const AddCategory = ({ handleAddCategory, editing }: Props) => {
  const [categoryName, setCategoryName] = useState<string>("");

  //need to edit any for e
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   await addCategory(category);
  //   window.location.reload();
  // };

  return (
    <form className="p-1">
      <input
        className="border-2 p-1 w-3/4"
        type="text"
        placeholder="New Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      {
      }
      <button className={`border-2 p-1 w-1/4 ${
        editing ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-500 text-white'
      }`} type="button" onClick={handleAddCategory(categoryName)} disabled={editing}>
        Add 
      </button>
    </form>
  );
};
export default AddCategory;
