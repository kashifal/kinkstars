<template>
  <SplideSlide class="col-span-1">
    <div
      class="p-3 border rounded-md"
      style="box-shadow: 0px 8px 10px 0px rgba(164, 164, 164, 0.07)"
    >
      <img :src="game" class="w-full h-auto" alt="" />
      <div class="pt-4 pb-2 space-y-4">
        <h2 class="text-[#181818] font-semibold text-[20px]">
          Asphalt 9: Legends
        </h2>
        <div>
          <span class="bg-[#FDF5D8] text-primary px-[10px] py-[4px] rounded-md"
            >Free Download</span
          >
        </div>
      </div>
    </div>
  </SplideSlide>
</template>

<script setup>
import { SplideSlide } from "@splidejs/vue-splide";
import game from "../assets/imgs/game.png";
</script>
