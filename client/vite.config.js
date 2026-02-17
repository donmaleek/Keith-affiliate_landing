import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/Keith-affiliate_landing/" : "/",
  server: {
    port: 5173
  }
}));
