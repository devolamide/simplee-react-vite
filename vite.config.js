import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  build: {
    ssr: true,
    rollupOptions: {
      input: "./server/index.js",
    },
  },
  resolve: {
    alias: {
      "~": "/src", // import Button from "@/components/Button"
    },
  },

  server: {
    port: 3000, // customize the dev server port
  },
});
