import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MyContextProvider } from "../src/components/MyContextProvider .tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MyContextProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </MyContextProvider>
    </BrowserRouter>
  </StrictMode>
);
