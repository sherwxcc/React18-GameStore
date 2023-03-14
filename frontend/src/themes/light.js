import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { globalPalette } from "./global";
import globalStyle from "./global";

const lightPalette = {
  textPrimary: "#777",
  textSecondary: "#AAA",
  textContrast: "#333",
  linearGradient: `linear-gradient(236deg, rgba(157,191,158,0.3) 33%, rgba(200,140,207,0.3) 100%);`,
  linearGradientSolid: `linear-gradient(236deg, rgba(157,191,158) 33%, rgba(200,140,207) 100%);`,
  reverseGradient: `linear-gradient(236deg,rgba(200,140,207,0.3) 33%, rgba(157,191,158,0.3) 100%);`,
};

const light = createTheme({
  palette: {
    primary: { main: globalPalette.primary }, // Cambridge blue
    secondary: { main: globalPalette.secondary }, // Beige
    error: { main: globalPalette.error }, // Light coral
    contrast: globalPalette.contrast, // Sky magenta
    contrastSecondary: globalPalette.contrastSecondary, // Melon
    background: {
      default: globalPalette.light,
      paper: "#FAFAFA",
    },
    text: {
      primary: lightPalette.textPrimary,
      secondary: lightPalette.textSecondary,
      contrast: lightPalette.textContrast,
      dark: globalPalette.dark,
      light: globalPalette.light,
    },
    svgPrimary: { main: lightPalette.textPrimary },
    svgSecondary: { main: lightPalette.textSecondary },
    svgContrast: { main: lightPalette.textContrast },
    gradient: lightPalette.linearGradient,
    gradientSolid: lightPalette.linearGradient,
    contrastThreshold: 4.5, // WCAG 2.1 Rule 1.4.3: Min. contrast = 4.5:1
    tonalOffset: 0.2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: globalPalette.light,
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
