<template>
  <div class="Aboutpnpm">
    <div>about</div>
    <div>{{ about }}</div>
  </div>
</template>
<script lang="tsx" setup>
import { ref } from "vue";

const about = ref("about");
</script>
