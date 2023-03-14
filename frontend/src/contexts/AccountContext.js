import { createContext, useEffect, useMemo, useState } from "react";
import { apiRequest } from "lib/axios";
import API from "data/api";

const AccountContext = createContext();

export function AccountProvider({ children }) {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check login jwt
  }, []);

  const isLoggedIn = useMemo(() => {
    return token ? true : false;
  }, [token]);

  const handleLogin = async (data) => {
    let req = {
      url: API.logIn.url,
      method: API.logIn.method,
      params: {},
      data,
    };
    let res = await apiRequest(req);
    if (res.code === 20000) {
      setToken(res.token);
      setUsername(res.username);
      localStorage.setItem("gspToken", res.token);
      localStorage.setItem("gspUsername", res.username);
    }
  };

  const handleRegister = async (data) => {
    let req = {
      url: API.register.url,
      method: API.register.method,
      params: {},
      data,
    };
    let res = await apiRequest(req);
    if (res.code === 20000) {
      //
    }
  };

  return (
    <AccountContext.Provider
      value={{ isLoggedIn, token, username, handleLogin, handleRegister }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
