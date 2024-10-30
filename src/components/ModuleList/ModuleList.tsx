import { useEffect, useState } from "react";
import Module from "./components/Module";
import CreateModule from "./components/CreateModule";
import { ModuleInterface } from "../../interfaces/dataInterface";
import { editModule, addModule, deleteModule, getModules } from "../../utilities/Api";

interface Props {
  activeCategoryId: number | null;
  setEditing: (value: boolean) => void;
  activeCategoryName: string | null;
}

const ModuleList = ({ activeCategoryId, setEditing, activeCategoryName }: Props) => {
  // States ->
  const [modules, setModules] = useState<ModuleInterface[]>([]);

  useEffect(() => {
    // Imagine that this will work at the first render
    handleFetchModules();
  }, [activeCategoryId]);

  // Handlers ->
  const handleAddModule = (
    categoryId: number,
    moduleTitle: string,
    moduleUrl: string
  ) => {
    return async () => {
      const apiResponse = await addModule(categoryId, moduleTitle, moduleUrl);
      if (apiResponse) {
        setModules([...modules, apiResponse.data])
      }
    };
  };

  // const handleAddCategory = (categoryName: string) => {
  //   return async () => {
  //     const objectCreated = await addCategory(categoryName);
  //     // Its correctly validate it?
  //     if (objectCreated) {
  //       setCategories([...categories, objectCreated.data]);
  //     }
  //   };
  // };

  const handleDeleteModule = (moduleId: number | undefined, index: number) => {
    return async () => {
      if (moduleId === undefined) {
        return;
      }
      const statusCode = await deleteModule(moduleId);
      if (statusCode === 200) {
        const temp = [...modules];
        temp.splice(index, 1);
        setModules(temp);
      } else {
        alert("Error!");
      }
    };
  };

  const handleEditedModule = async (editedModule: ModuleInterface) => {
    if (editedModule.id !== undefined) {
      await editModule(editedModule.id, editedModule);
    }
  };

  // HTTP handlers ->
  const handleFetchModules = async () => {
    // Validation
    if (activeCategoryId === null) {
      return;
    }

    const allModules = await getModules(activeCategoryId);
    setModules(allModules);
  };

  return (
    <>
      {/* Add Module Component */}
      {activeCategoryId !== null 
        ?
        <div className="w-full">
        <CreateModule
          handleAddModule={handleAddModule}
          activeCategoryId={activeCategoryId}
        />
        </div>
        : null
      }

      {/*
        Title of the Category
      */}
      {
        activeCategoryName ? (
          <div className="flex items-center justify-center w-full font-light text-3xl bg-slate-700 min-h-12 mt-3 text-white">{activeCategoryName}</div>
        ): (
          <div className="flex items-center justify-center w-full font-light text-3xl bg-slate-700 min-h-12 text-white">Select a category on the left</div>
        )
      }
      
      {/* List of modules. */}
      {modules ? (

          <div className="top-[20%] flex">    
            {modules.map((item, index) => {
              return (
                <div  key={index} className="flex">
                  <Module
                    setEditing={setEditing}
                    data={item}
                    index={index}
                    handleDeleteModule={handleDeleteModule}
                    handleEditModule={handleEditedModule}
                  />
                </div>
              );
            })}
          </div>
      ) : null}
    </>
  );
};

export default ModuleList;
