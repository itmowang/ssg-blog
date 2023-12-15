<template>
  <div>
    123123BPAGEASDASDSD
    <div v-html="html"></div>
    <div>123123{{ html }}</div>
  </div>
</template>

<script lang="tsx" setup>
import { useRoute } from "vue-router";
import mdTransformer from "@/utils/mdTransform";
import { ref } from "vue";
const router = useRoute();
const html = ref("");

mdTransformer(router).then((result) => {
  console.log(result);
  html.value = result;
  console.log(html.value);
  
}); 

</script>

<style></style>
