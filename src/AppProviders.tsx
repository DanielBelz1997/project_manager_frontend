import React from "react";
import { ThemeProvider } from "./context/Theme/theme_provider.tsx";
import { DirectionProvider } from "@radix-ui/react-direction";
import { Toaster } from "./components/ui/toaster.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider delayDuration={200}>
        <DirectionProvider dir="rtl">
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
          <Toaster />
        </DirectionProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
