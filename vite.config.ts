/// <reference types="vitest" />
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom", // Simulates the browser environment
    setupFiles: "./src/setupTests.ts", // Optional, if you want to set up testing files
  },
});
