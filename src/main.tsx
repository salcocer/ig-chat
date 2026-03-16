import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./phone.css";
import App from "./App.tsx";

const rootElem = document.getElementById("root")!;
rootElem.classList.add("phone-viewport");

createRoot(rootElem).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
