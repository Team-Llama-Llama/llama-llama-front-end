import ReferenceURL from "./components/ReferenceURL";
import Body from "./components/Body";
// import PrettyDecent from "./components/PrettyDecent";
import { ModuleInterface } from "../../../interfaces/dataInterface";
import Solution from "./components/Solution";
import { useState, useEffect } from "react";

interface Props {
  setEditing: (value: boolean) => void
  data: ModuleInterface;
  index: number;
  handleDeleteModule: (
    moduleId: number | undefined,
    index: number
  ) => () => Promise<void>;
  handleEditModule: (editedModule: ModuleInterface) => Promise<void>;
}

export type EditedProperties = "referenceUrl" | "solution" | "body";
export type Views = "editView" | "normalView";

const Module = ({ setEditing, data, index, handleDeleteModule, handleEditModule }: Props) => {

  const [currentView, setCurrentView] = useState<Views>("normalView");
  const [localData, setLocalData] = useState<ModuleInterface>({ ...data });

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  // Handler
  const handleChangeView = () => {
    if (currentView === "normalView") {
      setCurrentView("editView");
      setEditing(true);
    } else {
      setCurrentView("normalView");
      setEditing(false);
    }
  };

  const handlePropertyChange = (property: EditedProperties, value: string) => {
    const temp = {...localData};
    console.log(temp);
    temp[property] = value;
    setLocalData(temp);
    handleEditModule(temp);
  };


  return (
    <>
      
      <div className="rounded-lg justify-around p-1 m-1 mt-5 bg-white">
        <h2 className="text-2xl m-1 text-center font-semibold">{data.title}</h2>
        <ReferenceURL
          currentView={currentView}
          handlePropertyChange={handlePropertyChange}
          referenceURL={localData.referenceUrl}
        />
        <Body
          currentView={currentView}
          handlePropertyChange={handlePropertyChange}
          moduleBody={localData.body}
        />

        <Solution
          currentView={currentView}
          handlePropertyChange={handlePropertyChange}
          moduleSolution={localData.solution}
        />
        
        {currentView === "normalView" ? (
          <button className="border-2 bg-sky-400 hover:bg-sky-500 text-white w-11/12" onClick={handleChangeView}>Edit</button>
        ) : (
          <button className="border-2 bg-sky-400 hover:bg-sky-500 text-white w-full" onClick={handleChangeView}>Save</button>
        )}

        {currentView === "normalView" && <button className="border-2 bg-red-100 hover:bg-red-200 w-1/12" onClick={handleDeleteModule(data.id, index)}>X</button>}
        
      </div>
    </>
  );
};

export default Module;
