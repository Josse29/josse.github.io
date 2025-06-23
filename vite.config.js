import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/", // ← harus sesuai nama repo kamu
  plugins: [react()],
});
