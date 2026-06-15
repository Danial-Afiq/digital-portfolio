import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // "/" for a user site, or "/repository-name/" for a project site.
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
});
