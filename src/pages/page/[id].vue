<template>
  <div>
    <div class="test" v-html="html"></div>
  </div>
</template>

<script lang="tsx" setup>
import { useRoute } from "vue-router";
import mdTransformer from "@/utils/mdTransform";
import { ref } from "vue";
const route = useRoute();
const html = ref("");
html.value = await mdTransformer(route);
</script>

<style></style>
