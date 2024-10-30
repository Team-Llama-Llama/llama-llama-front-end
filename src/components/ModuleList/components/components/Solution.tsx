// import { ModuleInterface } from "./dataInterface"
import { EditedProperties, Views } from "../Module";

interface Props {
  moduleSolution: string;
  currentView: Views;
  handlePropertyChange: (property: EditedProperties, value: string) => void;
}

const Solution = ({ moduleSolution, currentView, handlePropertyChange }: Props) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handlePropertyChange("solution", event.target.value);
  };

  return (
    <div className="m-1 bg-orange-600 p-3 mb-3 text-white text-xl font-extralight h-40 overflow-y-auto rounded-lg">
      {currentView === "editView" ? (
        <>
          <textarea className="w-full h-full bg-white rounded-lg text-black p-1" value={moduleSolution} onChange={(e) => handleTextChange(e)} />
        </>
      ) : (
        <>
          <p>{moduleSolution}</p>
        </>
      )}
    </div>
  );
};

export default Solution;


