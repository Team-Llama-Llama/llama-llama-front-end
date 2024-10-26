// import { ModuleInterface } from "./dataInterface"
import { EditedProperties, Views } from "../Module";

interface Props {
  moduleSolution: string;
  currentView: Views;
  handlePropertyChange: (property: EditedProperties, value: string) => void;
}

const Solution = ({ moduleSolution, currentView, handlePropertyChange }: Props) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handlePropertyChange("solution", event.target.value);
  };

  return (
    <div className="border-2">
      {currentView === "editView" ? (
        <>
          <textarea className="w-full" value={moduleSolution} onChange={(e) => handleTextChange(e)} />
        </>
      ) : (
        <>
          <p>{moduleSolution}</p>
        </>
      )}
    </div>
  );
};

export default Solution;

// import { useState } from "react";
// import { editModule } from "../../../../utilities/Api";

// interface Props {
//     moduleId: number;
//     moduleSolution: string;
// }

// const Solution = ( { moduleId, moduleSolution } : Props) => {

//     const [isEditing, setIsEditing] = useState(false);
//     const [solutionValue, setSolutionValue] = useState(moduleSolution)

//     const handleEdit = () => {
//         setIsEditing(true);
//     }

//     const handleSave = async () => {
//         await editModule(moduleId, { solution: solutionValue })
//         setIsEditing(false);
//         // window.location.reload();
//     }

//     return (
        
//         <div>
//             {isEditing ? (
//                 <>
//                     <textarea
//                         value={solutionValue}
//                         onChange={(e) => setSolutionValue(e.target.value)}
//                     />
//                     <button onClick={handleSave}>Save</button>
//                 </>
//                 ) : (
//                 <>
//                     <p>{moduleSolution}</p>
//                     <button onClick={handleEdit}>Edit</button>
//                 </>
//                 )
//         }

//         </div>
//     )

// }

// export default Solution;


