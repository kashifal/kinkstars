<template>
  <div
    class="bg-white rounded-b-[16px] border-t-[4px] border-primary shadow-lg"
    style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075)"
  >
    <div class="p-6 space-y-4 text-center">
      <div class="flex items-center justify-center py-4">
        <span class="text-primary">
          <SparklesIcon class="w-8 h-8" />
        </span>
      </div>
      <div>
        <h2
          class="text-xxl font-semibold text-gray700 max-w-xs leading-[1.2] mx-auto"
        >
          Want to Video call with me?
        </h2>
      </div>

      <div>
        <span class="text-gray700"
          ><span class="text-xxl font-semibold">$25</span>
        </span>
      </div>
      <div class="w-full">
        <button
          class="w-full px-[24px] py-[13px] rounded-[12px] bg-bgSecondary text-white font-semibold"
        >
          Call Me
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { SparklesIcon } from "@heroicons/vue/24/outline";
</script>
