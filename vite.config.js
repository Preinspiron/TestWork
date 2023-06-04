import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// import { resolve} from 'path'
// import path from 'path'

// import url from 'url'

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".scss", ".css"],
  },
  base: "/TestWork/",
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, "index.html"),

  //     },
  //   },
  // },
  build: {
    sourcemap: true,
  },
});
