import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import appTheme from "./assets/themes/app-theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
