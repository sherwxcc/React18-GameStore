import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import globalStyle from "./global";

const lightPalette = {
  linearGradient: `linear-gradient(236deg, rgba(157,191,158,0.3) 33%, rgba(200,140,207,0.3) 100%);`,
};

const light = createTheme({
  palette: {
    primary: { main: "#9DBF9E" }, // Cambridge blue
    secondary: { main: "#D0D6B5" }, // Beige
    error: { main: "#EE7674" }, // Light coral
    contrast: "#C96BBC", // Sky magenta
    contrastSecondary: "#F9B5AC", // Melon
    background: {
      default: "#EEE",
      paper: "#EEE",
    },
    text: {
      primary: "#555",
      secondary: "#AAA",
    },
    textPrimary: { main: "#555" },
    textSecondary: { main: "#AAA" },
    textDisabled: { main: "#EEE" },
    gradient: lightPalette.linearGradient,
    contrastThreshold: 4.5, // WCAG 2.1 Rule 1.4.3: Min. contrast = 4.5:1
    tonalOffset: 0.2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparant",
            backgroundImage: lightPalette.linearGradient,
          },
        },
      },
    },
  },
  ...globalStyle,
});

const lightTheme = responsiveFontSizes(light);

export default lightTheme;
