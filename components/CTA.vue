<template>
  <div
    class="bg-primaryBg text-center px-4 py-16 mx-auto max-w-7xl lg:px-0 rounded-md"
  >
    <div class="flex flex-col items-center justify-center gap-8">
      <span class="font-semibold text-steal"
        >Your audience will be gathered</span
      >
      <h2 class="text-xxxxl leading-[65px] font-sf font-semibold">
        Anywhere you want. <br />
        Anytime you want.
      </h2>
      <p class="max-w-lg text-paragraph">
        Get started with two free weeks of unlimited yoga, fitness, and
        meditation classes. Cancel anytime.
      </p>
      <NuxtLink to="/sign-up">
        <button
          class="bg-primary px-[24px] flex items-center gap-4 shadow-xl shadow-primary/50 py-[16px] rounded-full"
        >
          <span class="text-[18px] font-semibold text-[white]">Get Started</span>
          <span class="p-1 text-white bg-black rounded-full">
            <ChevronRightIcon class="w-5 h-5" />
          </span>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>
