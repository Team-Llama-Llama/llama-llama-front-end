import App from "../App";
import NotAuth from "./NotAuth";

const [isAuth, setIsAuth] = useState<boolean>(false);

return (

    <div>
        <input onChange={(event) => event.target.value} >Username: </input>
        <input onChange={(event) => event.target.value} >Password: </input>

        {isAuth ?
        </App> : </NotAuth>}
    </div>

)