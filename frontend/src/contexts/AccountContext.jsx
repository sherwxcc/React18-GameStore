import { createContext, useContext, useEffect, useState } from "react";
import { getLocalUser, clearLocalUser } from "utils/localStorage";
import { login, register } from "services/authService";
import CartContext from "./CartContext";
import OrderContext from "./OrderContext";

const AccountContext = createContext();

export function AccountProvider({ children }) {
  const { handleGetCart, handleClearCart } = useContext(CartContext);
  const { handleClearOrder } = useContext(OrderContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ token: "", userId: null, username: "" });

  // Check if user is present in local storage
  useEffect(() => {
    let localUser = getLocalUser();
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
    let res = await login(data);
    if (res.data.code === 20001) {
      let user = {
        token: res.data.token,
        username: res.data.username,
        userId: res.data.userId,
      };
      localStorage.setItem("gspUser", JSON.stringify(user));
      setUser(user);
      setIsLoggedIn(true);
      handleGetCart(res.data.userId);
    }

    return res.data;
  };

  const handleLogOut = () => {
    clearLocalUser();
    setUser({ token: "", userId: null, username: "" });
    setIsLoggedIn(false);
    handleClearCart();
    handleClearOrder();
  };

  const handleRegister = async (data) => {
    let res = await register(data);
    return res.data;
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
