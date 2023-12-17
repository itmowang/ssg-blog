// vite.config.ts
import { defineConfig } from "file:///D:/www/ssg-blog/node_modules/.pnpm/vite@4.5.1_@types+node@20.10.4_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/www/ssg-blog/node_modules/.pnpm/@vitejs+plugin-vue@4.5.2_vite@4.5.1_vue@3.3.11/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Router from "file:///D:/www/ssg-blog/node_modules/.pnpm/unplugin-vue-router@0.7.0_vue-router@4.2.5_vue@3.3.11/node_modules/unplugin-vue-router/dist/vite.mjs";
import vueJsx from "file:///D:/www/ssg-blog/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@4.5.1_vue@3.3.11/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// vite-plugin-md-pages.ts
import path from "path";
import fs from "fs";
function ViteMdPagesPlugin(options) {
  const { input, contentPath } = options;
  const inputDir = path.resolve(input);
  const inputFiles = fs.readdirSync(inputDir);
  return {
    name: "vite-plugin-md-pages",
    async buildStart(options2) {
    },
    // 访问的时候
    async resolveId(route, source, importer) {
    },
    async load(id) {
    },
    // 更新的时候
    async handleHotUpdate() {
    }
  };
}

// vite.config.ts
import fs2 from "fs";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@theme": "./src/theme"
    }
  },
  plugins: [
    ViteMdPagesPlugin({
      input: "src/pages",
      contentPath: "src/content"
    }),
    vue(),
    vueJsx(),
    Router({
      routesFolder: "src/pages",
      extensions: [".vue", ".md"]
    })
  ],
  ssgOptions: {
    // script: "async",
    formatting: "prettify",
    includedRoutes(paths, routes) {
      const ROUTERS = routes.flatMap((route) => {
        if (route.path == "/") {
          return route.path;
        } else {
          if (route.children && route.children.length > 0) {
            const test = route.children.map((child) => {
              const is = /\[(.+)\]/.test(child.name);
              if (is) {
                const contentDir = fs2.readdirSync(`./src/content${route.path}`);
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
    onBeforePageRender(route, indexHTML, appCtx) {
      console.log(route, appCtx, 666);
      return indexHTML;
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tbWQtcGFnZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3d3dcXFxcc3NnLWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHd3d1xcXFxzc2ctYmxvZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd3d3L3NzZy1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcInVucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZVwiO1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XHJcbmltcG9ydCBWaXRlTWRQYWdlc1BsdWdpbiBmcm9tIFwiLi92aXRlLXBsdWdpbi1tZC1wYWdlc1wiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBcIi9zcmNcIixcclxuICAgICAgXCJAdGhlbWVcIjogXCIuL3NyYy90aGVtZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIFZpdGVNZFBhZ2VzUGx1Z2luKHtcclxuICAgICAgaW5wdXQ6IFwic3JjL3BhZ2VzXCIsXHJcbiAgICAgIGNvbnRlbnRQYXRoOiBcInNyYy9jb250ZW50XCIsXHJcbiAgICB9KSxcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlSnN4KCksXHJcbiAgICBSb3V0ZXIoe1xyXG4gICAgICByb3V0ZXNGb2xkZXI6IFwic3JjL3BhZ2VzXCIsXHJcbiAgICAgIGV4dGVuc2lvbnM6IFtcIi52dWVcIiwgXCIubWRcIl0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNzZ09wdGlvbnM6IHtcclxuICAgIC8vIHNjcmlwdDogXCJhc3luY1wiLFxyXG4gICAgZm9ybWF0dGluZzogXCJwcmV0dGlmeVwiLFxyXG4gICAgaW5jbHVkZWRSb3V0ZXMocGF0aHMsIHJvdXRlcykge1xyXG4gICAgICBjb25zdCBST1VURVJTID0gcm91dGVzLmZsYXRNYXAoKHJvdXRlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocm91dGUucGF0aCA9PSBcIi9cIikge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlLnBhdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSByb3V0ZS5jaGlsZHJlbi5tYXAoKGNoaWxkOiB7IG5hbWU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gXHU1MjI0XHU2NUFEIGNoaWxkLnBhdGggXHU0RTJEXHU2NjJGXHU1NDI2XHU0RTNBXHU1MkE4XHU2MDAxXHU4REVGXHU3NTMxXHJcbiAgICAgICAgICAgICAgY29uc3QgaXMgPSAvXFxbKC4rKVxcXS8udGVzdChjaGlsZC5uYW1lKTtcclxuICAgICAgICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTY2MkZcdTUyQThcdTYwMDFcdThERUZcdTc1MzEgXHU1MzM5XHU5MTREY29udGVudCBcdTY1ODdcdTRFRjZcdTU5MzlcdTRFMEJcdTc2ODRcdTY1ODdcdTRFRjZcclxuICAgICAgICAgICAgICBpZiAoaXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NjYyRlx1NTJBOFx1NjAwMVx1OERFRlx1NzUzMSBcdTUzQkJjb250ZW50LyR7cGF0aH0gXHU2NTg3XHU0RUY2XHU1OTM5XHU0RTBCXHU3Njg0XHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RGlyID0gZnMucmVhZGRpclN5bmMoYC4vc3JjL2NvbnRlbnQke3JvdXRlLnBhdGh9YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBcdTgzQjdcdTUzRDZcdTUyMzBcdTY1ODdcdTRFRjZcdTU0MEVcdThCRkJcdTUzRDZcdThGNkNcdTYzNjJcdTYyMTBcdTYyMTFcdTRFRUNcdTk3MDBcdTg5ODFcdTc2ODRcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50RGlyLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYCR7cm91dGUucGF0aH0vJHtwb3N0LnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpfWA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2NoaWxkLm5hbWV9YDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGVzdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIFJPVVRFUlMuZmxhdChJbmZpbml0eSk7XHJcbiAgICB9LFxyXG4gICAgb25CZWZvcmVQYWdlUmVuZGVyKHJvdXRlLCBpbmRleEhUTUwsIGFwcEN0eCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyb3V0ZSwgYXBwQ3R4LCA2NjYpO1xyXG5cclxuICAgICAgcmV0dXJuIGluZGV4SFRNTDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcd3d3XFxcXHNzZy1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3d3dcXFxcc3NnLWJsb2dcXFxcdml0ZS1wbHVnaW4tbWQtcGFnZXMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3d3dy9zc2ctYmxvZy92aXRlLXBsdWdpbi1tZC1wYWdlcy50c1wiO2ltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmludGVyZmFjZSBPcHRpb25zIHtcclxuICBpbnB1dDogc3RyaW5nO1xyXG4gIGNvbnRlbnRQYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpdGVNZFBhZ2VzUGx1Z2luKG9wdGlvbnM6IE9wdGlvbnMpOiBQbHVnaW4ge1xyXG4gIGNvbnN0IHsgaW5wdXQsIGNvbnRlbnRQYXRoIH0gPSBvcHRpb25zO1xyXG4gIC8vIFx1NUI4Q1x1NjU3NFx1OERFRlx1NUY4NFxyXG4gIGNvbnN0IGlucHV0RGlyID0gcGF0aC5yZXNvbHZlKGlucHV0KTtcclxuICBjb25zdCBpbnB1dEZpbGVzID0gZnMucmVhZGRpclN5bmMoaW5wdXREaXIpO1xyXG5cclxuICAvLyAgIFx1ODNCN1x1NTNENmlucHV0RGlyXHU0RTJEXHU1OTFBXHU0RTJBXHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU1NDBEXHU3OUYwXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwidml0ZS1wbHVnaW4tbWQtcGFnZXNcIixcclxuICAgIGFzeW5jIGJ1aWxkU3RhcnQodGhpcywgb3B0aW9ucykge30sXHJcbiAgICAvLyBcdThCQkZcdTk1RUVcdTc2ODRcdTY1RjZcdTUwMTlcclxuICAgIGFzeW5jIHJlc29sdmVJZChyb3V0ZTogc3RyaW5nLCBzb3VyY2UsIGltcG9ydGVyKSB7fSxcclxuICAgIGFzeW5jIGxvYWQoaWQ6IHN0cmluZykge30sXHJcbiAgICAvLyBcdTY2RjRcdTY1QjBcdTc2ODRcdTY1RjZcdTUwMTlcclxuICAgIGFzeW5jIGhhbmRsZUhvdFVwZGF0ZSgpIHt9LFxyXG4gIH07XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxTyxTQUFTLG9CQUFvQjtBQUNsUSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTs7O0FDSG9PLE9BQU8sVUFBVTtBQUV4USxPQUFPLFFBQVE7QUFPQSxTQUFSLGtCQUFtQyxTQUEwQjtBQUNsRSxRQUFNLEVBQUUsT0FBTyxZQUFZLElBQUk7QUFFL0IsUUFBTSxXQUFXLEtBQUssUUFBUSxLQUFLO0FBQ25DLFFBQU0sYUFBYSxHQUFHLFlBQVksUUFBUTtBQUcxQyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNLFdBQWlCQSxVQUFTO0FBQUEsSUFBQztBQUFBO0FBQUEsSUFFakMsTUFBTSxVQUFVLE9BQWUsUUFBUSxVQUFVO0FBQUEsSUFBQztBQUFBLElBQ2xELE1BQU0sS0FBSyxJQUFZO0FBQUEsSUFBQztBQUFBO0FBQUEsSUFFeEIsTUFBTSxrQkFBa0I7QUFBQSxJQUFDO0FBQUEsRUFDM0I7QUFDRjs7O0FEcEJBLE9BQU9DLFNBQVE7QUFFZixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGtCQUFrQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLGNBQWM7QUFBQSxNQUNkLFlBQVksQ0FBQyxRQUFRLEtBQUs7QUFBQSxJQUM1QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsWUFBWTtBQUFBO0FBQUEsSUFFVixZQUFZO0FBQUEsSUFDWixlQUFlLE9BQU8sUUFBUTtBQUM1QixZQUFNLFVBQVUsT0FBTyxRQUFRLENBQUMsVUFBZTtBQUM3QyxZQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JCLGlCQUFPLE1BQU07QUFBQSxRQUNmLE9BQU87QUFDTCxjQUFJLE1BQU0sWUFBWSxNQUFNLFNBQVMsU0FBUyxHQUFHO0FBQy9DLGtCQUFNLE9BQU8sTUFBTSxTQUFTLElBQUksQ0FBQyxVQUE0QjtBQUUzRCxvQkFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLElBQUk7QUFFckMsa0JBQUksSUFBSTtBQUVOLHNCQUFNLGFBQWFDLElBQUcsWUFBWSxnQkFBZ0IsTUFBTSxJQUFJLEVBQUU7QUFFOUQsdUJBQU8sV0FBVyxJQUFJLENBQUMsU0FBUztBQUM5Qix5QkFBTyxHQUFHLE1BQU0sSUFBSSxJQUFJLEtBQUssUUFBUSxTQUFTLEVBQUUsQ0FBQztBQUFBLGdCQUNuRCxDQUFDO0FBQUEsY0FDSCxPQUFPO0FBQ0wsdUJBQU8sR0FBRyxNQUFNLElBQUk7QUFBQSxjQUN0QjtBQUFBLFlBQ0YsQ0FBQztBQUNELG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFFRCxhQUFPLFFBQVEsS0FBSyxRQUFRO0FBQUEsSUFDOUI7QUFBQSxJQUNBLG1CQUFtQixPQUFPLFdBQVcsUUFBUTtBQUMzQyxjQUFRLElBQUksT0FBTyxRQUFRLEdBQUc7QUFFOUIsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsib3B0aW9ucyIsICJmcyIsICJmcyJdCn0K
