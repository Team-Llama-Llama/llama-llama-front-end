import { useState } from "react";
import { editModule } from "../utilities/Api";

interface Props {
    moduleId: number;
    moduleSolution: string;
}

const Solution = ( { moduleId, moduleSolution } : Props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [solutionValue, setSolutionValue] = useState(moduleSolution)

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = async () => {
        await editModule(moduleId, { solution: solutionValue })
        setIsEditing(false);
        // window.location.reload();
    }

    return (
        
        <div>
            {isEditing ? (
                <>
                    <textarea
                        value={solutionValue}
                        onChange={(e) => setSolutionValue(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
                ) : (
                <>
                    <p>{moduleSolution}</p>
                    <button onClick={handleEdit}>Edit</button>
                </>
                )
        }

        </div>
    )

}

export default Solution;