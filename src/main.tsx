import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
// import routes from "~pages";
import { routes } from "vue-router/auto/routes";
import { useHead,useSeoMeta } from "@unhead/vue";
import config from "./config";

const {SITE_TITLE,SITE_DESCRIPTION,SITE_META} = config;

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    useHead({
      title: SITE_TITLE,
      meta:[{
        name: "description",
        content: SITE_DESCRIPTION
      },...SITE_META],
    });
  },
  {
    rootContainer: "#app",
  }
);
