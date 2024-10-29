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
  };

  return (
    <div className="border-2 rounded p-5 bg-sky-50">
      <form>
        <input className="border-2 rounded m-1 w-full"
          type="text"
          placeholder="Title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <br/>
        <input className="border-2 rounded m-1 w-full"
          type="text"
          placeholder="Enter a URL"
          value={referenceUrlValue}
          onChange={(e) => setReferenceUrlValue(e.target.value)}
        />
        <br/>
        <button className="border-2 rounded p-1 m-1 w-full bg-blue-400 hover:bg-blue-500 text-white"
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
