import { useEffect, useState } from "react";
import Module from "./components/Module";
import CreateModule from "./components/CreateModule";
import { ModuleInterface } from "../../interfaces/dataInterface";
import { editModule, addModule, deleteModule, getModules } from "../../utilities/Api";

interface Props {
  activeCategoryId: number | null;
}

const ModuleList = ({ activeCategoryId }: Props) => {
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
      const status = await editModule(editedModule.id, editedModule);
      // if (status === 200) {
      //   // Succesfully
      // } else {
      //   console.error("Something is happenning!")
      // }
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
          <div className="w-1/2">
            <CreateModule
              handleAddModule={handleAddModule}
              activeCategoryId={activeCategoryId}
            />
          </div>

      {modules ? (

          <div className="border-2 top-1/4 w-1/2 absolute m-4">    
            {modules.map((item, index) => {
              return (
                <div  key={index}>
                  <Module
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
