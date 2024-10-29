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
        <div className="w-1/2">
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
          <div className="border-2 w-1/2 m-4 text-center font-bold text-xl bg-sky-50">{activeCategoryName}</div>
        ): (
          <div className="border-2 w-1/2 m-4 text-center font-bold text-xl bg-sky-50">Select a category on the left</div>
        )
      }
      
      {/* List of modules.
          Currently, the list adds a new module to the bottom.
          However, on refresh, the modules are displayed reverse order, last added first displayed. */}
      {modules ? (

          <div className="border-2 top-[20%] w-1/2 absolute m-4 bg-sky-50">    
            {modules.map((item, index) => {
              return (
                <div  key={index}>
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
