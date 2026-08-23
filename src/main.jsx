import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterPage from "./router/Router";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  </StrictMode>,
);
