import { addCategory } from "../utilities/Api";
import { useState } from "react";


const AddCategoryForm = () => {
    const [category, setCategory] = useState<string>("")

    //need to edit any for e
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        await addCategory(category);
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            />
        <button type="submit">Add</button>
    </form> 
    )
}
export default AddCategoryForm;




