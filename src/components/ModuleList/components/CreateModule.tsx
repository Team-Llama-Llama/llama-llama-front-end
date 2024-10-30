import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  activeCategoryId: number;
  handleAddModule: (
    categoryId: number,
    title: string,
    referenceURL: string
  ) => () => Promise<void>;
}

const CreateModule = ({ activeCategoryId, handleAddModule }: Props) => {
  const [titleValue, setTitleValue] = useState("");
  const [referenceUrlValue, setReferenceUrlValue] = useState("");

  const resetFields = () => {
    setTitleValue('');
    setReferenceUrlValue('');
  }

  const invalidString = () => toast.warn("Title must not be an empty string", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const invalidUrl = () => toast.warn("Url is not valid", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  function isValidUrl(string: string) {
    try {
      new URL(string);
      return true;
    } catch (e) {
      return false;
    }
  }

  const validateInputs = async() => {
    if (titleValue.trim() === "") {
      invalidString();
      return;
    }

    if (!isValidUrl(referenceUrlValue)) {
      invalidUrl();
      return;
    }

    const addModuleFunction = handleAddModule(activeCategoryId, titleValue, referenceUrlValue);
    await addModuleFunction();
    resetFields();
  };

  return (
    <div className="rounded-2xl p-5 bg-cyan-500">
      <h1 className="text-center text-3xl">Add a Study Module</h1>
      <form className="flex">
        <input className="rounded-lg m-1 w-full p-4 text-2xl focus:outline-none"
          type="text"
          placeholder="Title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <br/>
        <input className="rounded-lg m-1 w-full p-4 text-2xl focus:outline-none"
          type="text"
          placeholder="Enter a URL"
          value={referenceUrlValue}
          onChange={(e) => setReferenceUrlValue(e.target.value)}
        />
        <br/>
        <button className="rounded-lg p-4 m-1 w-full bg-slate-800 hover:bg-slate-500 text-2xl text-white"
          type="button"
          onClick={validateInputs}
        >
          Add Module
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateModule;
