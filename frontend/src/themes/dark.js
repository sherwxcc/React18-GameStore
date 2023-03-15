import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { globalPalette } from "./global";
import globalStyle from "./global";

const darkPalette = {
  textPrimary: "#FFF",
  textSecondary: "#AAA",
  textContrast: "#222",
  linearGradient: `linear-gradient(236deg, rgba(157,191,158,0.6) 33%, rgba(200,140,207,0.6) 100%);`,
  linearGradientLight: `linear-gradient(236deg, rgba(157,191,158,0.8) 33%, rgba(200,140,207,0.8) 100%);`,
  linearGradientDim: `linear-gradient(236deg, rgba(157,191,158,0.2) 33%, rgba(200,140,207,0.2) 100%);`,
};

const dark = createTheme({
  palette: {
    primary: { main: globalPalette.primary }, // Cambridge blue
    secondary: { main: globalPalette.secondary }, // Beige
    error: { main: globalPalette.error }, // Light coral
    contrast: globalPalette.contrast, // Sky magenta
    contrastSecondary: globalPalette.contrastSecondary, // Melon
    background: {
      default: globalPalette.dark,
      paper: globalPalette.dark,
    },
    text: {
      primary: darkPalette.textPrimary,
      secondary: darkPalette.textSecondary,
      contrast: darkPalette.textContrast,
      dark: globalPalette.dark,
      light: globalPalette.light,
    },
    svgPrimary: { main: darkPalette.textPrimary },
    svgSecondary: { main: darkPalette.textSecondary },
    svgContrast: { main: darkPalette.textContrast },
    gradient: darkPalette.linearGradient,
    gradientLight: darkPalette.linearGradientLight,
    gradientDim: darkPalette.linearGradientDim,
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
