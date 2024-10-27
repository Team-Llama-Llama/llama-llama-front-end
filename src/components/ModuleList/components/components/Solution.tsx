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
    <div className="border-2 m-1 bg-gray-100">
      {currentView === "editView" ? (
        <>
          <textarea className="w-full" value={moduleSolution} onChange={(e) => handleTextChange(e)} />
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


