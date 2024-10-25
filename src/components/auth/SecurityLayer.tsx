import { useEffect, useState } from "react";
// Auth
import { login } from "../../utilities/auth";
import App from "../../App";

function SecurityLayer() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<number | null>();

  async function userLogin() {
    const result = await login();
    if (result.userId) {
      setIsAuth(true);
      setActiveUser(result.userId);
    }
  }

  useEffect(() => {
    userLogin();
  }, []);

  return (
    <>
      {isAuth === true && activeUser ? <App userId={activeUser}></App> : null}
    </>
  );
}

export default SecurityLayer;
