import { useState } from "react";

interface Props {
  handleAddCategory: (categoryName: string) => () => Promise<void>;
}

const AddCategory = ({ handleAddCategory }: Props) => {
  const [categoryName, setCategoryName] = useState<string>("");

  //need to edit any for e
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   await addCategory(category);
  //   window.location.reload();
  // };

  return (
    <form className="border-2 p-1">
      <input
        className="border-2 p-1 w-3/4"
        type="text"
        placeholder="New Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button className="border-2 p-1 w-1/4" type="button" onClick={handleAddCategory(categoryName)}>
        Add 
      </button>
    </form>
  );
};
export default AddCategory;
