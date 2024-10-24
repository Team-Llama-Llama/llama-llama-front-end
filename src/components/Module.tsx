import ReferenceURL from "./ReferenceURL";
import Body from "./Body";
import Solution from "./Solution";

const ModuleList: React.FC = ({ module }) => {

    return (
        
        <div className="Module">
            <h2>{module.title}</h2>

            <ReferenceURL 
                referenceURL={module.reference_url}
            />
            <Body   
                body={module.body}
            />
            <Solution 
                solution={module.solution}
            /> 
        </div>

    )

}

export default ModuleList;