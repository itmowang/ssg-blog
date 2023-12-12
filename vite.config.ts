import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "~pages": "/src/pages",
    }
  },
  ssgOptions:{
    script: "async",
    formatting: "prettify"
  }
});
