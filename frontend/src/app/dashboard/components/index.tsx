"use client";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";

const rootElement = document.querySelector("#root");
if (!rootElement) {
  throw new Error("No se encontró el elemento root");
}
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
);
