import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  handleAddCategory: (categoryName: string) => () => Promise<void>;
}

const AddCategory = ({ handleAddCategory }: Props) => {
  const [categoryName, setCategoryName] = useState<string>("");


  const handleClick = async () => {
    if (!categoryName.trim()) {
      invalidStringCategory();
    } else {
      setError("");
      await handleAddCategory(categoryName)();
      setCategoryName(""); 
    }
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

  return (
    <form className="p-1">
      <input
        className="border-2 p-1 w-3/4"
        type="text"
        placeholder="New Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button className="border-2 p-1 w-1/4 bg-blue-400 hover:bg-blue-500 text-white" type="button" onClick={handleAddCategory(categoryName)}>
        Add 
      </button>

      {error && <p className="text-red-500 mt-1">{error}</p>}
      <ToastContainer />

    </form>
  );
};
export default AddCategory;
