import ReferenceURL from "./ReferenceURL";
import Body from "./Body";
import Solution from "./Solution";
import { ModuleInterface } from "./dataInterface";

interface Props {
  module: ModuleInterface;
}

const Module = ({ module }: Props) => {
  return (
    <div className="Module">
      <h2>{module.title}</h2>

      <ReferenceURL referenceURL={module.reference_url} />
      <Body body={module.body} />
      <Solution solution={module.solution} />
      
    </div>
  );
};

export default Module;
