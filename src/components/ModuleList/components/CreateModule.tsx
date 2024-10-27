import { useState } from "react";

interface Props {
  activeCategoryId: number;
  handleAddModule: (
    categoryId: number,
    title: string,
    referenceURL: string
  ) => () => Promise<void>;
}

//need to fix any
const CreateModule = ({ activeCategoryId, handleAddModule }: Props) => {
  const [titleValue, setTitleValue] = useState("");
  const [referenceUrlValue, setReferenceUrlValue] = useState("");

  return (
    <div className="border-2 p-5">
      <form>
        <input className="border-2 m-1 w-full"
          type="text"
          placeholder="Title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <br/>
        <input className="border-2 m-1 w-full"
          type="text"
          placeholder="Enter a URL"
          value={referenceUrlValue}
          onChange={(e) => setReferenceUrlValue(e.target.value)}
        />
        <br/>
        <button className="border-2 p-1 m-1 w-full"
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
