import { useContext } from "react";

import ErrorPage from "views/ErrorPage/ErrorPage";
import LandingPage from "views/LandingPage/LandingPage";
import LoadingPage from "views/LoadingPage/LoadingPage";
import SignInPage from "views/SignInPage/SignInPage";
import PolicyPage from "views/PolicyPage/PolicyPage";
import ProductListPage from "views/ProductListPage/ProductListPage";
import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import ColorContext from "contexts/ColorContext";
import Navbar from "components/Navbar/Navbar";
import "App.scss";

const App = () => {
  const { theme, mode } = useContext(ColorContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id="app">
          <Navbar />
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/product" element={<ProductListPage />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;