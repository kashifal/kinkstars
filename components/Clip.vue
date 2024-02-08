<template>
  <div class="col-span-1 border-b">
    <div class="relative">
      <img
        class="w-full h-48 rounded-md"
        src="https://fastly.picsum.photos/id/444/200/200.jpg?hmac=j2rJG0CKjM3Pmd7gDrCI5-1pYZIh4tjiScLDa5xS_KU"
        alt="random-img"
      />
      <button
        class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
      >
        <PlayIcon class="" />
      </button>
    </div>
    <div class="py-2">
      <h3 class="max-w-xs text-[24px] font-semibold">
        Can you resist the feeling of turn on?!
      </h3>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4 py-2">
          <img
            class="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span class="text-[14px] text-[#777E90]">Sarah coheil</span>
        </div>

        <div>
          <span class="text-[14px] text-[#777E90]">Feb 03, 2021</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PlayIcon } from "@heroicons/vue/24/solid";
</script>
