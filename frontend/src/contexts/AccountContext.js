import { createContext, useEffect, useState } from "react";
import { apiRequest } from "lib/axios";
import API from "data/api";

const AccountContext = createContext();

export function AccountProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ token: "", userId: null, username: "" });

  useEffect(() => {
    let localUser = JSON.parse(localStorage.getItem("gspUser"));
    if (localUser) {
      setUser({
        token: localUser.token,
        userId: localUser.userId,
        username: localUser.username,
      });
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogIn = async (data) => {
    let req = {
      url: API.logIn.url,
      method: API.logIn.method,
      params: {},
      data,
      token: null,
    };
    let res = await apiRequest(req);
    if (res.data.code === 20000) {
      let user = {
        token: res.data.token,
        username: res.data.username,
        userId: res.data.userId,
      };
      localStorage.setItem("gspUser", JSON.stringify(user));
      setUser(user);
      setIsLoggedIn(true);
    }
  };

  const handleLogOut = () => {
    console.log("LOGOUT");
    localStorage.removeItem("gspUser");
    setUser({ token: "", userId: null, username: "" });
    setIsLoggedIn(false);
  };

  const handleRegister = async (data) => {
    let req = {
      url: API.register.url,
      method: API.register.method,
      params: {},
      data,
      token: null,
    };
    let res = await apiRequest(req);

    if (res.data) {
      console.log(res);
    }
  };

  return (
    <AccountContext.Provider
      value={{ isLoggedIn, user, handleLogIn, handleLogOut, handleRegister }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
