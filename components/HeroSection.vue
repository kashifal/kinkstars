<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <div
      class="flex flex-col items-center justify-center gap-4 pb-10 text-center pt-36"
    >
      <p class="text-[18px] text-white">
        <span class="text-primary">Guaranteed</span> to be fulfil your desire
      </p>
      <h2
        class="md:text-[81px] text-[42px] relative font-semibold text-white font-urbanist"
      >
        The modern Succubus
        <span class="absolute bottom-0 right-12">
          <svg
            width="285"
            height="15"
            viewBox="0 0 285 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7.52502C75.5 3.19169 236.3 -1.87498 283.5 12.525"
              stroke="#FDC157"
              stroke-width="5"
            />
          </svg>
        </span>
      </h2>
      <p class="text-white">Consuming the minds and souls of men</p>
      <div class="py-6">
        <button
          class="bg-primary px-[24px] flex items-center gap-4 shadow-xl shadow-primary/50 py-[16px] rounded-full"
        >
          <span class="text-[18px] font-semibold">Get Started</span>
          <span class="p-1 text-white bg-black rounded-full">
            <ChevronRightIcon class="w-5 h-5" />
          </span>
        </button>
      </div>
    </div>
    <div>
      <img :src="BannerImg" alt="Banner-img" class="w-[100vw] h-auto" />
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import BannerImg from "../assets/imgs/banner-img.png";
</script>
