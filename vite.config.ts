import { resolve } from "path";
import { defineConfig, type PluginOption } from "vite";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    dts({ insertTypesEntry: true }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      open: true,
      emitFile: true,
      filename: "stats.html",
      template: "treemap",
    }) as PluginOption,
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyLibJs",
      // the proper extensions will be added
      fileName: "my-lib-js",
      formats: ["es", "cjs", "umd", "iife"],
    },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ["vue"],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: "Vue",
    //     },
    //   },
    // },
  },
});
