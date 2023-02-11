import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyled, Themes } from "./styles/Globals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <ThemeProvider theme={Themes}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
