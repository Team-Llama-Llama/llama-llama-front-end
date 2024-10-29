
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
      {isAuth && activeUser ? (
        <App userId={activeUser} userName={userName} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <div className="flex justify-center mb-6">
              <img
                className="w-10 h-10 mx-2"
                src="https://cdn-icons-png.flaticon.com/512/3069/3069118.png"
                alt="Llama icon"
              />
              <h1 className="text-2xl font-bold text-gray-700">Llama Login</h1>
              <img
                className="w-10 h-10 mx-2"
                src="https://cdn-icons-png.flaticon.com/512/3069/3069118.png"
                alt="Llama icon"
              />
            </div>
            {registration ? (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">New Username</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    type="text"
                    onChange={e => setRegUserName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">New Password</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    type="password"
                    onChange={e => setRegPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">Confirm New Password</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    type="password"
                    onChange={e => setRegConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-blue-500 text-white rounded-lg py-2 mt-4 hover:bg-blue-600 transition duration-200"
                  type="button"
                  onClick={userRegister}
                >
                  Register
                </button>
                <button
                  className="w-full bg-gray-300 text-gray-700 rounded-lg py-2 mt-2 hover:bg-gray-400 transition duration-200"
                  type="button"
                  onClick={changeToRegister}
                >
                  Return to login
                </button>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">Username</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    type="text"
                    onChange={e => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">Password</label>
                  <input
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-blue-500 text-white rounded-lg py-2 mt-4 hover:bg-blue-600 transition duration-200"
                  type="button"
                  onClick={userLogin}
                >
                  Login
                </button>
                <button
                  className="w-full bg-gray-300 text-gray-700 rounded-lg py-2 mt-2 hover:bg-gray-400 transition duration-200"
                  type="button"
                  onClick={changeToRegister}
                >
                  Register new user
                </button>
              </>
            )}
          </form>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            pauseOnFocusLoss
            theme="light"
          />
        </div>
      )}
    </>
  );
}

export default SecurityLayer;


//shadow-md used for creating that little shawod in the border
//transition duration-200 ??
//w-full max-w-sm adapt to max weight about conteiner