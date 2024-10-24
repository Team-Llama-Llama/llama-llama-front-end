import { useState } from "react";
import { addModule } from "../utilities/Api";

//need to fix any
const CreateModule = ({ categoryId } : any) => {

    const [titleValue, setTitleValue] = useState("");
    const [referenceUrlValue, setReferenceUrlValue] = useState("");

    //need to fix any
    async function handleAddModule(e : any) {
        e.preventDefault();
        await addModule(categoryId, {title: titleValue, reference_url: referenceUrlValue});
        // window.location.reload();
    }

    return (
        
        <div>
            <form onSubmit={handleAddModule}>
                <input 
                type="text"
                placeholder="Title"
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Enter a URL"
                value={referenceUrlValue}
                onChange={(e) => setReferenceUrlValue(e.target.value)}/>
                <button type="submit" onClick={handleAddModule}>Button</button>
            </form>
        </div>

    )

}

export default CreateModule;