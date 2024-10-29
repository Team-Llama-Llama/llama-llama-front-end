
import { useState } from "react";
// Auth
import { login, register } from "../../utilities/auth";
import App from "../../App";
//toast popups
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    if (userName === "") {
      return toast.warn(`You must enter a username`);
    }
    if (password === "") {
      return toast.warn(`You must enter a password`);
    }
    const result = await login(userName, password);
    if (result.userId) {
      setIsAuth(true);
      setActiveUser(result.userId);
    } else {
      return toast.warn(`User not found`)
    }
  }

  async function userRegister() {
    if (regUserName === "") {
      return toast.warn(`You must enter a username`);
    }
    if (regPassword === "") {
      return toast.warn(`You must enter a password`);
    }
    if (regPassword !== regConfirmPassword) {
      return toast.warn(`Passwords must match`);
    }
    await register(regUserName, regPassword);
    toast(`New user registered: ${regUserName}`);
    changeToRegister();
  }

  function changeToRegister() {
    let inputs = document.getElementsByTagName("input");
    for (let input of inputs) {
      input.value="";
    };
    if (registration === true) {
      return setRegistration(false);
    };
    setRegistration(true);
  }

  return (
    <>

      {isAuth === true && activeUser 
      ? <App userId={activeUser} userName={userName}></App> 
      
      :

      <div className="flex items-baseline justify-center">
        <form>
          
        <img
          className="size-10 absolute right-1/3 top-5"
          src="https://cdn-icons-png.flaticon.com/512/3069/3069118.png">
        </img>
        <img
          className="size-10 absolute left-1/3 top-5"
          src="https://cdn-icons-png.flaticon.com/512/3069/3069118.png">
        </img>
        <div className="text-center text-4xl m-5 font-medium">
          <h1>Llama Llama Login</h1>
        </div>
          
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
          theme="light"/>
        </form>
      </div>
      }

    </>
  );
}

export default SecurityLayer;
