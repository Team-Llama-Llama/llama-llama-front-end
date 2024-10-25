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
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a URL"
          value={referenceUrlValue}
          onChange={(e) => setReferenceUrlValue(e.target.value)}
        />
        <button
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
