import { createContext, useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "@mui/material/index";
import { lightTheme, darkTheme } from "themes/index";

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(() => (prefersDarkMode ? "dark" : "light"));

  useEffect(() => {
    const localTheme = window.localStorage.getItem("gspTheme");
    prefersDarkMode && !localTheme
      ? setMode("dark")
      : localTheme
      ? setMode(localTheme)
      : setMode("light");
  }, [prefersDarkMode]);

  const theme = useMemo(() => {
    return mode === "light" ? lightTheme : darkTheme;
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    window.localStorage.setItem(
      "gspTheme",
      mode === "light" ? "dark" : "light"
    );
  };

  return (
    <ColorContext.Provider value={{ theme, mode, toggleMode }}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorContext;
