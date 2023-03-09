import { useContext } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "views/LandingPage/LandingPage";
import ErrorPage from "views/ErrorPage/ErrorPage";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import ColorContext from "contexts/ColorContext";
import Navbar from "components/Navbar/Navbar";

import "App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  const { theme, mode } = useContext(ColorContext);

  return (
    <>
      <RouterProvider router={router}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={`app ${mode}`}>
            <Navbar />
            <div>Hello</div>
          </div>
        </ThemeProvider>
      </RouterProvider>
    </>
  );
};

export default App;
