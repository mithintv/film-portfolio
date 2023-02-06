import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    checkboxLabel: React.CSSProperties;
    inputError: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    checkboxLabel?: React.CSSProperties;
    inputError?: React.CSSProperties;
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    checkboxLabel: true;
    inputError: true;
  }
}

export declare interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
}

// Create a theme instance.
export const theme = createTheme({
  typography: {
    checkboxLabel: {
      fontSize: "0.9rem",
    },
    inputError: {
      color: "#ff1744",
    },
  },
  palette: {
    primary: {
      main: "#2e2e2e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#2e2e2e",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // Name of the component
    MuiFormControlLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: "0.5rem",
          // Some CSS
        },
      },
    },
  },
});

export default function Theme({ children }: AppProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
