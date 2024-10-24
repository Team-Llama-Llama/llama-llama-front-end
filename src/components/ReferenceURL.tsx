// import { ModuleInterface } from "./dataInterface"

interface Props {
    referenceURL: string;
}

// type referenceURL = Pick<ModuleInterface, 'referenceUrl'>;

const ReferenceURL = ( { referenceURL } : Props ) => {

    return (

        <div>
            <p>{referenceURL}</p>
        </div>

    )

}

export default ReferenceURL;