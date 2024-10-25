import ReferenceURL from "./ReferenceURL";
import Body from "./Body";
import Solution from "./Solution";
import { ModuleInterface } from "./dataInterface";
import { deleteModule } from "../utilities/Api";

interface Props {
  module: ModuleInterface;
}

const Module = ({ module }: Props) => {

  //fix any
    const handleDelete = async () => {
      await deleteModule(module.id)
        window.location.reload();
    }

  return (
    <div className="Module">
      <h2>{module.title}</h2>

      <ReferenceURL referenceURL={module.reference_url} />
      <Body 
        moduleId={module.id} 
        moduleBody={module.body}
      />
      <Solution 
        moduleId={module.id} 
        moduleSolution={module.solution} />
      
      <button onClick={handleDelete}>Delete</button>


    </div>
  );
};

export default Module;
