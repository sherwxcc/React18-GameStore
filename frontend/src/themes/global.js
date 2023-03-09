const globalStyle = {
  typography: {
    fontStretch: "100%",
    h1: {
      fontSize: "6rem",
      fontFamily: "Cooper Hewitt",
      fontWeight: 700,
    },
    h2: {
      fontSize: "4rem",
      fontFamily: "Cooper Hewitt",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.3rem",
      fontFamily: "Cooper Hewitt",
      fontWeight: 700,
      letterSpacing: "0.1rem",
    },
    subtitle1: {
      fontSize: "0.9rem",
      fontFamily: "Source Sans Pro",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Source Sans Pro",
      fontWeight: 500,
    },
    body2: {
      fontSize: "0.9rem",
      fontFamily: "Source Sans Pro",
      fontWeight: 400,
    },
    button: {
      fontSize: "1.2rem",
      fontFamily: "Source Sans Pro",
      fontWeight: 500,
    },
    caption: {
      fontSize: "1rem",
      fontFamily: "Source Sans Pro",
      fontWeight: 400,
    },
    overline: {
      fontSize: "1rem",
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "unset",
          backgroundImage: "unset",
          boxShadow: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "unset",
          },
        },
      },
    },
  },
};

export default globalStyle;
