<template>
  <div class="Index">
    <div>Index</div>
    <div>{{ index }}</div>
    <div>{{ index2 }}</div>
  </div>
</template>
<script lang="tsx" setup>
import { ref } from "vue";

const index = ref("idx");
const index2 = ref("Leo");
</script>
