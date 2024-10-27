import { useState } from "react";

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
          onClick={handleAddModule(
            activeCategoryId,
            titleValue,
            referenceUrlValue
          )}
        >
          Add Module
        </button>
      </form>
    </div>
  );
};

export default CreateModule;
