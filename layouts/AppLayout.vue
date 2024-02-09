<template>
  <div v-if="variant === 'default'">
    <AppBar />
  </div>
  <div v-else>
    <AppBarV2 />
  </div>
  <main class="home" style="background: #fafafa">
    <slot />
  </main>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
});
</script>
