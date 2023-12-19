"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF6464",
    },
    secondary: { main: "#EDF7FA" },
    text: { secondary: "#142850" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C56B3",
      dark: "#221C35",
    },
    secondary: { main: "#EDF7FA" },
  },
});

const MUIThemeProvider = ({ children }: any) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        {/* <ThemeProvider theme={lightTheme}> */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MUIThemeProvider;
