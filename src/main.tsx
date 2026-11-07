import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/ibm-plex-sans";
import "@fontsource-variable/jetbrains-mono";
import App from "./App";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/projects.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento #root para montar la aplicación.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
