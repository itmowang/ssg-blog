import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Router from "unplugin-vue-router/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Router({
      routesFolder: "src/pages",
      extensions: [".vue", ".md"],
    }),
  ],
  resolve: {
    alias: {
      "@": "./src",
      "@theme": "./src/theme",
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "prettify",
  },
});
