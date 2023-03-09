import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import globalStyle from "./global";

const darkPalette = {
  linearGradient: `linear-gradient(236deg, rgba(157,191,158,0.5) 33%, rgba(200,140,207,0.5) 100%);`,
};

const dark = createTheme({
  palette: {
    primary: { main: "#9DBF9E" }, // Cambridge blue
    secondary: { main: "#D0D6B5" }, // Beige
    error: { main: "#EE7674" }, // Light coral
    contrast: "#C96BBC", // Sky magenta
    contrastSecondary: "#F9B5AC", // Melon
    background: {
      default: "#222",
      paper: "#222",
    },
    text: {
      primary: "#FFF",
      secondary: "#BBB",
    },
    textPrimary: { main: "#FFF" },
    textSecondary: { main: "#AAA" },
    textDisabled: { main: "#555" },
    gradient: darkPalette.linearGradient,
    contrastThreshold: 4.5, // WCAG 2.1 Rule 1.4.3: Min. contrast = 4.5:1
    tonalOffset: 0.2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#000",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "unset",
            background: darkPalette.linearGradient,
          },
        },
      },
    },
  },
  ...globalStyle,
});

const darkTheme = responsiveFontSizes(dark);

export default darkTheme;
