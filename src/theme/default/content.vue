<template>
  <div class="md-content">
    <div class="md-html">
      <MdContent />
    </div>
  </div>
</template>
<script lang="tsx" setup>
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const dynamicPath = import.meta.env.PROD
  ? `../../src/content${route.path}/doc.md`
  : `../../content${route.path}/doc.md`;
// Md 实例组件
const MdContent = defineAsyncComponent(() => import(dynamicPath));
</script>
