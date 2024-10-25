import { useEffect, useState } from "react";
import Module from "./components/Module";
import CreateModule from "./components/CreateModule";
import { editModule, addModule } from "../../utilities/Api";
import { ModuleInterface } from "../../interfaces/dataInterface";
import { deleteModule, getModules } from "../../utilities/Api";

interface Props {
  activeCategoryId: number | null;
}

const ModuleList = ({ activeCategoryId }: Props) => {
  // States ->
  const [modules, setModules] = useState<ModuleInterface[]>([]);

  useEffect(() => {
    // Imagine that this will work at the first render
    handleFetchModules();
  }, []);

  // Handlers ->
  const handleAddModule = (
    categoryId: number,
    moduleTitle: string,
    moduleUrl: string
  ) => {
    return async () => {
      const statusCode = await addModule(categoryId, moduleTitle, moduleUrl);
      if (statusCode === 201) {
        // This will edit into the db, but we need to change it in local.
        alert("edited");
      }
    };
  };

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
      if (status === 204) {
        alert("allelya");
      }
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
      {activeCategoryId ? (
        <>
          <div>
            <CreateModule
              handleAddModule={handleAddModule}
              activeCategoryId={activeCategoryId}
            />

            {modules.map((item, index) => {
              return (
                <div className="module" key={index}>
                  <Module
                    data={item}
                    key={index}
                    handleDeleteModule={handleDeleteModule}
                    handleEditModule={handleEditedModule}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModuleList;
