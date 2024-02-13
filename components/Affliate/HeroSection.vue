<template>
  <div class="py-32 max-w-7xl mx-auto px-4">
    <div class="">
      <h1
        class="md:text-[81px] max-w-2xl w-full text-[42px] relative font-semibold leading-tight text-white font-urbanist"
      >
        Ready to meet with your fans?
      </h1>
      <p class="text-white text-[16px] max-w-xs py-4">
        We help you build great meeting and easy-to schedule with your fans.
      </p>
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
  </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import BannerImg from "../assets/imgs/banner-img.png";
</script>
