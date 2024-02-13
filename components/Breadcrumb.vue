<template>
  <nav class="flex max-w-7xl mx-auto pt-12 px-4" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li v-for="(page, index) in breadLinks" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon
            v-if="index !== 0"
            class="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <a
            :href="page.href"
            :class="[
              page.current
                ? 'ml-4 text-sm font-normal text-gray-500 hover:text-gray-700'
                : 'ml-4 text-sm font-normal text-gray-400 hover:text-gray-700',
            ]"
            :aria-current="page.current ? 'page' : undefined"
            >{{ page.name }}</a
          >
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/20/solid";
import { defineProps } from "vue";

defineProps({
  breadLinks: {
    type: Array,
    required: true,
  },
});
const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];
</script>
