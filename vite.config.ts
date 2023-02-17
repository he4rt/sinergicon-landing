import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import * as path from "path";
import { defineConfig } from "vite";

const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin({
      // configuration
    }),
  ],
  server: {
    https: false,
  },
  resolve: {
    alias: {
      "@components": resolve("./src/components"),
      "@pages": resolve("./src/pages"),
      "@utils": resolve("./src/utils"),
      "@assets": resolve("./src/assets"),
    },
  },
});
