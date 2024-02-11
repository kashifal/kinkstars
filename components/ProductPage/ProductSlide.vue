<template>
  <SplideSlide>
    <div class="col-span-1">
      <div class="relative">
        <img
          class="object-cover w-full h-48 rounded-md"
          :src="model"
          alt="random-img"
        />
      </div>
      <div class="py-2">
        <h3 class="max-w-xs text-[16px] font-semibold">Product Store</h3>
        <p class="text-[14px] pb-4 font-normal text-[#777E90]">
          Auction brief description will be here. And here if the text was long.
        </p>
        <div class="flex pt-4 border-t items-center justify-between">
          <div class="flex items-center gap-4 py-2">
            <span class="text-[14px] text-[#777E90]">Feb 03, 2021</span>
          </div>

          <div>
            <button
              class="px-4 py-2 bg-primary rounded-[4px] text-[20px] text-white font-bold"
            >
              $50
            </button>
          </div>
        </div>
      </div>
    </div>
  </SplideSlide>
</template>
<script setup>
import { PlayIcon } from "@heroicons/vue/24/solid";
import { SplideSlide } from "@splidejs/vue-splide";
import model from "../assets/imgs/model.png";
</script>
