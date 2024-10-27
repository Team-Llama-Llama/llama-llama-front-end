
import { useEffect, useState } from "react";
// Auth
import { login } from "../../utilities/auth";
import App from "../../App";

function SecurityLayer() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<number | null>(2);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function userLogin() {
    const result = await login(userName, password);
    if (result.userId) {
      setIsAuth(true);
      setActiveUser(result.userId);
    }
  }

  useEffect(() => {
    console.log(document.cookie);
    userLogin();
  }, []);

  return (
    <>

      {isAuth === true && activeUser 
      ? <App userId={activeUser}></App> 
      
      :

      <div className="flex items-center justify-center">
        <h1 className="text-2xl">Please Log In</h1>
        <form className="bottom-">
          <div>
            <p>Username</p>
            <input className="border-2" type="text" onChange={e => setUserName(e.target.value)} />
          </div>
          <div>
            <p>Password</p>
            <input className="border-2" type="password" onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <button 
            className="border-2 mt-2 p-1" 
            type="button"
            onClick={userLogin}
            >Submit</button>
          </div>
        </form>
      </div>
      }

    </>
  );
}

export default SecurityLayer;
