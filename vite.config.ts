import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Router from "unplugin-vue-router/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ViteMdPagesPlugin from "./vite-plugin-md-pages";
import fs from "fs";
import Markdown from "vite-plugin-md";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@theme": "./src/theme",
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    Markdown(),
    Router({
      routesFolder: "src/pages",
      extensions: [".vue", ".md"],
    }),
  ],
  ssgOptions: {
    formatting: "prettify",
    includedRoutes(paths, routes) {
      const ROUTERS = routes.flatMap((route: any) => {
        if (route.path == "/") {
          return route.path;
        } else {
          if (route.children && route.children.length > 0) {
            const test = route.children.map((child: { name: string }) => {
              // 判断 child.path 中是否为动态路由
              const is = /\[(.+)\]/.test(child.name);
              // 如果是动态路由 匹配content 文件夹下的文件
              if (is) {
                // 如果是动态路由 去content/${path} 文件夹下的文件
                const contentDir = fs.readdirSync(`./src/content${route.path}`);
                // 获取到文件后读取转换成我们需要的
                return contentDir.map((post) => {
                  return `${route.path}/${post.replace(/\.md$/, "")}`;
                });
              } else {
                return `${child.name}`;
              }
            });
            return test;
          }
        }
      });

      return ROUTERS.flat(Infinity);
    },
  },
});
