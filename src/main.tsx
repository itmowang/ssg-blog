import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
// import routes from "~pages";
import { routes } from "vue-router/auto/routes";
import { useHead } from "@unhead/vue";
import consts from "./consts";

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    useHead({
      title: consts["SITE_TITLE"],
    });
  }
);
