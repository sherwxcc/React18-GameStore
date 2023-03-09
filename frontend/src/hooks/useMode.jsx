// import { useEffect, useState } from "react";
// import useMediaQuery from "@mui/material/useMediaQuery";

// function useMode() {
//   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
//   // const [mode, setMode] = useState(() => (prefersDarkMode ? "dark" : "light"));
//   const [mode, setMode] = useState("dark");

//   const toggleMode = () => {
//     setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//     // window.localStorage.setItem("gspTheme", mode);
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem("gspTheme");
//     prefersDarkMode && !localTheme
//       ? setMode("dark")
//       : localTheme
//       ? setMode(localTheme)
//       : setMode("light");
//   }, [prefersDarkMode]);

//   return [mode, toggleMode];
// }

// export default useMode;
