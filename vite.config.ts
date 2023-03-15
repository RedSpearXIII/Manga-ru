import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "~components",
        replacement: path.resolve(__dirname, "src/shared/components"),
      },
      { find: "~pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "~entities",
        replacement: path.resolve(__dirname, "src/entities"),
      },
      {
        find: "~features",
        replacement: path.resolve(__dirname, "src/features"),
      },
      { find: "~widgets", replacement: path.resolve(__dirname, "src/widgets") },
      { find: "~layouts", replacement: path.resolve(__dirname, "src/layouts") },
    ],
  },
  // css: {
  //   modules: {
  //     localsConvention: "camelCase",
  //   },
  // },
})
