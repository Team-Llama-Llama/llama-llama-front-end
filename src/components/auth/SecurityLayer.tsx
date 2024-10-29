
import { useState } from "react";
// Auth
import { login, register } from "../../utilities/auth";
import App from "../../App";

function SecurityLayer() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<number | null>(2);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [registration, setRegistration] = useState<boolean>(false);
  const [regUserName, setRegUserName] = useState<string>("");
  const [regPassword, setRegPassword] = useState<string>("");
  const [regConfirmPassword, setRegConfirmPassword] = useState<string>("");

  async function userLogin() {
    const result = await login(userName, password);
    if (result.userId) {
      setIsAuth(true);
      setActiveUser(result.userId);
    }
  }

  async function userRegister() {
    if (regPassword !== regConfirmPassword) {
      return alert("Passwords must match");
    }
    const result = await register(regUserName, regPassword);
    console.log(result);
    alert(`New user registered: ${regUserName}`);
    changeToRegister();
  }

  function changeToRegister() {
    if (registration === true) {
      return setRegistration(false);
    }
    setRegistration(true);
  }

  // useEffect(() => {
  //   userLogin();
  // }, []);

  return (
    <>

      {isAuth === true && activeUser 
      ? <App userId={activeUser} userName={userName}></App> 
      
      :

      <div className="flex items-baseline justify-center">
        <form>
          <h1 className="text-4xl m-10">Llama Llama Login</h1>
          
          {registration === true
          ? <>
            <div>
              <p>New Username</p>
              <input className="border-2" type="text" onChange={e => setRegUserName(e.target.value)} />

              <p>New Password</p>
              <input className="border-2" type="password" onChange={e => setRegPassword(e.target.value)} />

              <p>Confirm New Password</p>
              <input className="border-2" type="password" onChange={e => setRegConfirmPassword(e.target.value)} />
            </div>
            <div>
              <button 
                className="border-2 mt-2 p-1 bg-gray-50 hover:bg-gray-200" 
                type="button"
                onClick={userRegister}
                >Register</button>
            </div>
            <div>
              <button 
                className="border-2 mt-2 p-1 bg-gray-50 hover:bg-gray-200" 
                type="button"
                onClick={changeToRegister}
                >Return to login</button>
            </div>
          </>
          
          :
          
          <>
            <div>
              <p>Username</p>
              <input className="border-2" type="text" onChange={e => setUserName(e.target.value)} />

              <p>Password</p>
              <input className="border-2" type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
              <button 
              className="border-2 mt-2 p-1 bg-gray-50 hover:bg-gray-200" 
              type="button"
              onClick={userLogin}
              >Login</button>
            </div>
            <div>
              <button 
                className="border-2 mt-2 p-1 bg-gray-50 hover:bg-gray-200" 
                type="button"
                onClick={changeToRegister}
                >Register new user</button>
            </div>
          </>
        }
        </form>
      </div>
      }

    </>
  );
}

export default SecurityLayer;
