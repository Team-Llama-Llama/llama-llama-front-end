// import { ModuleInterface } from "./dataInterface"
import { EditedProperties, Views } from "../Module";

interface Props {
  moduleBody: string;
  currentView: Views;
  handlePropertyChange: (property: EditedProperties, value: string) => void;
}

const Body = ({ moduleBody, currentView, handlePropertyChange }: Props) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handlePropertyChange("body", event.target.value);
  };

  return (
    <div>
      {currentView === "editView" ? (
        <>
          <textarea value={moduleBody} onChange={(e) => handleTextChange(e)} />
        </>
      ) : (
        <>
          <p>{moduleBody}</p>
        </>
      )}
    </div>
  );
};

export default Body;
