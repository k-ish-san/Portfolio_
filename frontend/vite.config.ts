import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import glsl from "vite-plugin-glsl";
// https://vite.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: true,
    cssCodeSplit: true,
    minify: "esbuild",
    sourcemap: false,
  },
  plugins: [react(), glsl()],
});
