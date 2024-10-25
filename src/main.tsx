import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import SecurityLayer from "./components/auth/SecurityLayer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SecurityLayer>
      <App />
    </SecurityLayer>
  </StrictMode>
);
