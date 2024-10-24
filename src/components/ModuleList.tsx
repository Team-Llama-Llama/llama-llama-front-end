import Module from "./Module";

const ModuleList: React.FC = ({ modules }) => {

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