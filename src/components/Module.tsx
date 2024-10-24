import ReferenceURL from "./ReferenceURL";
import Body from "./Body";
import Solution from "./Solution";
import { Module } from "./dataInterface";

interface Props {
  module: Module;
}

const ModuleList = ({ module }: Props) => {
  return (
    <div className="Module">
      <h2>{module.title}</h2>

      <ReferenceURL referenceURL={module.reference_url} />
      <Body body={module.body} />
      <Solution solution={module.solution} />
    </div>
  );
};

export default ModuleList;
