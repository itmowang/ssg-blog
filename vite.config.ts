import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Router from "unplugin-vue-router/vite";

export default defineConfig({
  plugins: [
    vue(),
    Router({
      routesFolder: "src/pages",
      extensions: [".vue", ".md"],
    }),
  ],
  ssgOptions: {
    script: "async",
    formatting: "prettify",
  },
});
