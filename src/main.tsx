import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/Theme/theme_provider.tsx";
import { DirectionProvider } from "@radix-ui/react-direction";
import { Toaster } from "./components/ui/toaster.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

//fd tworerewrewgfdgdfgfdgdfgdf41654564

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider delayDuration={300}>
        <DirectionProvider dir="rtl">
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
          <Toaster />
        </DirectionProvider>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
);

