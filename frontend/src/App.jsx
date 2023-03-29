import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
// Contexts
import { AccountContext, ColorContext } from "contexts/index";
// Views
import {
  CartPage,
  ErrorPage,
  LandingPage,
  SignInPage,
  PolicyPage,
  ProductListPage,
  ProductDetailPage,
} from "views/index";
// MUI
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
// Custom components
import Navbar from "components/Navbar/Navbar";
import CustomMessage from "components/customUI/CustomMessage";
// Stylesheet
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
            <Route path="mycart" element={<CartPage />} />
            <Route path="product" element={<ProductListPage />} />
            <Route
              path="product/detail/:prodId"
              element={<ProductDetailPage />}
            />
            <Route path="policy" element={<PolicyPage />} />
            <Route
              path="signin"
              element={
                isLoggedIn ? <Navigate to="/" replace={true} /> : <SignInPage />
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
