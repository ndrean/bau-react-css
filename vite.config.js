import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, "bau-reactcss.js"),
        name: "BauReactCss",
        fileName: "bau-reactcss.js",
      },
    },
    server: {
      open: true,
    },
  };
});
