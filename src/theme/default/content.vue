<template>
  <div class="md-content" >
    <div class="md-html" v-html="html"></div>
  </div>
</template>
<script lang="tsx" setup>
import markdownit from "markdown-it";
import path from "path";
import fs from "fs";
import { RouteLocationNormalized,useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const route = useRoute();
const html = ref("")

onMounted(async () => {
  html.value = await mdContent(route);
  highlightCode();
});

const mdContent = async (route: RouteLocationNormalized) => {
  let markdownContent;
  if (!import.meta.env.PROD) {
    const currentUrl = new URL(import.meta.url);
    const filePath = new URL(`../../content${route.path}/doc.md`, currentUrl)
      .pathname;
    const response = await fetch(filePath);
    markdownContent = await response.text();
  } else {
    const filePath = path.join(
      process.cwd(),
      `/src/content${route.path}/doc.md`
    );
    markdownContent = await fs.readFileSync(filePath, "utf-8");
  }
  const md = markdownit();
  return md.render(markdownContent);
};

const highlightCode = () => {
  const mdHtmlElement = document.querySelector('.md-html');
  if (mdHtmlElement) {
    
    const codeBlocks = mdHtmlElement.querySelectorAll('pre code');
    console.log(mdHtmlElement);

    codeBlocks.forEach((block:any) => {
      hljs.highlightBlock(block);
    });
  }
};

</script>

