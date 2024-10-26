import ReferenceURL from "./components/ReferenceURL";
import Body from "./components/Body";
// import Solution from "./Solution";
// import PrettyDecent from "./components/PrettyDecent";
import { ModuleInterface } from "../../../interfaces/dataInterface";
import { useState } from "react";

interface Props {
  data: ModuleInterface;
  index: number;
  handleDeleteModule: (
    moduleId: number | undefined,
    index: number
  ) => () => Promise<void>;
  handleEditModule: (editedModule: ModuleInterface) => Promise<void>;
}

// Move this export to a interface
export type EditedProperties = "referenceUrl" | "solution" | "body";
export type Views = "editView" | "normalView";

const Module = ({ data, index, handleDeleteModule, handleEditModule }: Props) => {
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
      
      <div className="border-2 p-1 m-5">
        <h2 className="text-2xl">{data.title}</h2>
        <ReferenceURL
          currentView={currentView}
          handlePropertyChange={handlePropertyChange}
          referenceURL={data.referenceUrl}
        />
        <Body
          currentView={currentView}
          handlePropertyChange={handlePropertyChange}
          moduleBody={data.body}
        />
        {/* PRESTON Commented out text editor due to depreciation issues */}
        {/* <PrettyDecent handlePropertyChange={handlePropertyChange} /> */}

        <button className="border-2 m-1" onClick={handleChangeView}>Change view</button>
        <button className="border-2 m-1" onClick={handleDeleteModule(data.id, index)}>Delete</button>
      </div>
    </>
  );
};

export default Module;
