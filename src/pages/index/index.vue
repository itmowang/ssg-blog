<template>
  <div class="Index">
    <div>Index</div>
    <div>{{ index }}</div>
  </div>
</template>
<script lang="tsx" setup>
import { ref } from "vue";

const index = ref("idx");
</script>
