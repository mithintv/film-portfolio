import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export declare interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
}

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // Name of the component
    MuiFormLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "#d7f0f5",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          selected: {
            backgroundColor: "#f0f0f0",
          },
        },
        selected: {
          backgroundColor: "#f0f0f0",
        },
      },
    },
  },
});

export default function Theme({ children }: AppProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
