<template>
  <div :class="showOnMobile ? 'block' : 'hidden md:block'">
    <AppBar v-if="variant === 'default'" />
    <AppBarV2 v-else />
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
  showOnMobile: {
    type: Boolean,
    default: true,
  },
});
</script>
