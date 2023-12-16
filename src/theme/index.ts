import "./default/assets/styles/global.less";
import "./default/assets/styles/article.less";
import Header from "./default/header.vue";
import Content from "./default/content.vue";
import Footer from "./default/footer.vue";


export default {
   install: (app: any) => {
        app.component("Header", Header);
        app.component("Content", Content);
        app.component("Footer", Footer);
   }
};
