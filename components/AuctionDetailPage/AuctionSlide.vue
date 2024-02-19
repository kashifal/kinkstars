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
        <h3 class="max-w-xs text-base font-semibold">Auction Thing 1</h3>
        <p class="text-[14px] pb-4 font-normal text-steal">
          Auction brief description will be here. And here if the text was long.
        </p>
        <div class="flex pt-4 border-t items-center justify-between">
          <div class="flex items-center gap-4 py-2">
            <span class="text-[14px] text-steal">Current Bid</span>
          </div>

          <div>
            <button class="px-4 py-2 rounded-[4px] text-llg font-bold">
              $590,000
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
