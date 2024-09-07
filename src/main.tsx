import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/Theme/theme_provider.tsx";
import { DirectionProvider } from "@radix-ui/react-direction";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DirectionProvider dir="rtl">
        <App />
      </DirectionProvider>
    </ThemeProvider>
  </StrictMode>
);
