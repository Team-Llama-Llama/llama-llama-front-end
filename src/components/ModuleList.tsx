import Module from "./Module";
import { ModuleInterface } from "./dataInterface";

interface Props {
    modules: ModuleInterface[]
}

const ModuleList = ({ modules } : Props ) => {

    return (
     
        <div>
        {modules.map((module, index) => {
                return <div 
                            className="module" 
                            key={index}
                        >
                            <Module 
                                module={module}
                            />
                        </div>
                })
            }
        </div>

    )

}

export default ModuleList;