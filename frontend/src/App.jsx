import { useContext } from "react";
import { Navigate } from "react-router-dom";

import ErrorPage from "views/ErrorPage/ErrorPage";
import LandingPage from "views/LandingPage/LandingPage";
// import LoadingPage from "views/LoadingPage/LoadingPage";
import SignInPage from "views/SignInPage/SignInPage";
import PolicyPage from "views/PolicyPage/PolicyPage";
import ProductListPage from "views/ProductListPage/ProductListPage";
import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import AccountContext from "contexts/AccountContext";
import ColorContext from "contexts/ColorContext";
import Navbar from "components/Navbar/Navbar";
import CustomMessage from "components/customUI/CustomMessage";
import "App.scss";

const App = () => {
  const { isLoggedIn } = useContext(AccountContext);
  const { theme } = useContext(ColorContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id="app">
          <Navbar />
          <CustomMessage theme={theme} />
          <Routes>
            <Route index element={<LandingPage />} />
            <Route
              path="/product"
              element={<ProductListPage theme={theme} />}
            />
            <Route path="/policy" element={<PolicyPage theme={theme} />} />
            <Route
              path="/signin"
              element={
                isLoggedIn ? (
                  <Navigate to="/" replace={true} />
                ) : (
                  <SignInPage theme={theme} />
                )
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
