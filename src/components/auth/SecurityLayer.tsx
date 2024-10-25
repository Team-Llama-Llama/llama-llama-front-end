import App from "../../App";
import { useEffect, useState } from "react";
// Auth
import { login } from "../../utilities/auth";

function SecurityLayer() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<number>();

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

  return <>{isAuth ? <App userId={activeUser}></App> : null}</>;
}

export default SecurityLayer;
