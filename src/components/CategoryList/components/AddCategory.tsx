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
    <form>
      <input
        type="text"
        placeholder="New Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type="submit" onClick={handleAddCategory(categoryName)}>
        Add Category
      </button>
    </form>
  );
};
export default AddCategory;
