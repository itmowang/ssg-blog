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
import { onMounted, ref } from "vue";
const router = useRoute();
const html = ref("");

onMounted(async() => { 
  html.value = await mdTransformer(router)
  console.log(html.value);
  
});

</script>

<style></style>
