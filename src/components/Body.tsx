// import { ModuleInterface } from "./dataInterface"

interface Props {
    body: string;
}

const Body = ( { body } : Props) => {

    return (
        
        <div>{body}</div>

    )

}

export default Body;