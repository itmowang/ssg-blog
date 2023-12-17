import "./default/assets/styles/global.less";
import "./default/assets/styles/article.less";
import Header from "./default/header.vue";
import Footer from "./default/footer.vue";
import Content from "./default/content.vue";

export default {
  install: (app: any) => {
    app.component("Header", Header);
    app.component("Footer", Footer);
    app.component("Content", Content);
  },
};
