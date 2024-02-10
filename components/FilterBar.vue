<template>
  <div class="flex items-center justify-between px-2 pb-4">
    <div>
      <span class="text-[#6B7280]">22 Posts</span>
    </div>
    <div class="flex items-center gap-4">
      <button class="p-2 text-[#263238] bg-white rounded-full">
        <MagnifyingGlassIcon class="w-5 h-5" />
      </button>
      <button
        class="py-2 px-4 text-[#263238] flex items-center gap-2 bg-white rounded-full"
      >
        <FunnelIcon class="w-5 h-5" />
        Filter
      </button>
    </div>
  </div>
</template>
<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { FunnelIcon } from "@heroicons/vue/24/outline";
</script>
