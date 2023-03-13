import { createContext, useEffect, useMemo, useState } from "react";
import { apiRequest } from "lib/axios";
import API from "data/api";

const AccountContext = createContext();

export function AccountProvider({ children }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Check login jwt
  }, []);

  const isLoggedIn = useMemo(() => {
    return token ? true : false;
  }, [token]);

  const handleLogin = async (data) => {
    let request = {
      url: API.signIn.url,
      method: API.signIn.method,
      params: {},
      data,
    };
    await apiRequest(request).then((res, rej) => {
      console.log(res);
      if (res.token) {
        setToken(res.token);
      }
    });
  };

  return (
    <AccountContext.Provider value={{ isLoggedIn, token, handleLogin }}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
