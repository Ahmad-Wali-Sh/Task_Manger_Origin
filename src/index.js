import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import { ContextProvider } from "./context/Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </>
);
