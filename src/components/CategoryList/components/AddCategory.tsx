import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  handleAddCategory: (categoryName: string) => () => Promise<void>;
  editing: boolean;
}

const AddCategory = ({ handleAddCategory, editing }: Props) => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [error, setError] = useState<string>("");


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
        className="bg-slate-800 text-white text-2xl border-b-2 border-white focus:outline-none p-1 w-3/4 font-extralight"
        type="text"
        placeholder="Add new category"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button 
        className={`border-none p-1 text-3xl mb-10 ${ editing 
                                    ? 'w-1/4 bg-gray-300 text-gray-500 cursor-not-allowed' 
                                    : 'w-1/4 text-white'}`} 
        type="button" onClick={handleClick} 
        disabled={editing}
      >
        +
      </button>

      {error && <p className="text-red-500 mt-1">{error}</p>}
      <ToastContainer />

    </form>
  );
};
export default AddCategory;
