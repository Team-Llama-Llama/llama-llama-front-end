// import { ModuleInterface } from "./dataInterface"
import { editModule } from "../utilities/Api";
import { useState } from "react";

interface Props {
    moduleId: number;
    moduleBody: string;
}

const Body = ( { moduleId, moduleBody } : Props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [bodyValue, setBodyValue] = useState(moduleBody)

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = async () => {
        await editModule(moduleId, { body: bodyValue })
        setIsEditing(false);
        // window.location.reload();
    }

    return (
        
        <div>
            {isEditing ? (
                <>
                    <textarea
                        value={bodyValue}
                        onChange={(e) => setBodyValue(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
                ) : (
                <>
                    <p>{moduleBody}</p>
                    <button onClick={handleEdit}>Edit</button>
                </>
                )
        }

        </div>

    )

}

export default Body;