<template>
  <div class="md-content">
    <div class="md-html" v-html="html"></div>
  </div>
</template>
<script lang="tsx" setup>
import { RouteLocationNormalized, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { md } from "@/utils/md";

const route = useRoute();
const html = ref("");
html.value = await md(route);

const highlightCode = () => {
  const mdHtmlElement = document.querySelector(".md-html");
  if (mdHtmlElement) {
    const codeBlocks = mdHtmlElement.querySelectorAll("pre code");

    codeBlocks.forEach((block: any) => {
      hljs.highlightBlock(block);
    });
  }
};
</script>
