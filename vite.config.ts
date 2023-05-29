import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"
import stringHash from "string-hash"

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8000,
  },
  resolve: {
    alias: [
      {
        find: "~shared",
        replacement: path.resolve(__dirname, "src/shared"),
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
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        if (name === "dark") return "dark"
        const i = css.indexOf(`.${name}`)
        const lineNumber = css.substr(0, i).split(/[\r\n]/).length
        const hash = stringHash(css).toString(36).substr(0, 5)
        return `_${name}_${hash}_${lineNumber}`
      },
    },
  },
})
