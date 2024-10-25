import ReferenceURL from "./components/ReferenceURL";
import Body from "./components/Body";
// import Solution from "./Solution";
import PrettyDecent from "./components/PrettyDecent";
import { ModuleInterface } from "../../../interfaces/dataInterface";
import { useState } from "react";

interface Props {
  data: ModuleInterface;
  key: number;
  handleDeleteModule: (
    moduleId: number | undefined,
    index: number
  ) => () => Promise<void>;
  handleEditModule: (editedModule: ModuleInterface) => Promise<void>;
}

// Move this export to a interface
export type EditedProperties = "referenceUrl" | "solution" | "body";
export type Views = "editView" | "normalView";

const Module = ({ data, key, handleDeleteModule, handleEditModule }: Props) => {
  const [currentView, setCurrentView] = useState<Views>("normalView");
  const [localData, setLocalData] = useState<ModuleInterface>({ ...data });

  // Handler
  const handleChangeView = () => {
    if (currentView === "normalView") {
      setCurrentView("editView");
    } else {
      setCurrentView("normalView");
    }
  };

  const handlePropertyChange = (property: EditedProperties, value: string) => {
    const temp = { ...localData };
    temp[property] = value;
    setLocalData(temp);
    handleEditModule(temp);
  };

  return (
    <>
      <button onClick={handleChangeView}>Change view</button>
      <div className="Module">
        <h2>{data.title}</h2>
        <ReferenceURL
          currentView={currentView}
          referenceURL={data.referenceUrl}
          handlePropertyChange={handlePropertyChange}
        />
        <Body
          currentView={currentView}
          handlePropertyChange={handlePropertyChange}
          moduleBody={data.body}
        />
        <PrettyDecent handlePropertyChange={handlePropertyChange} />

        <button onClick={handleDeleteModule(data.id, key)}>Delete</button>
      </div>
    </>
  );
};

export default Module;
