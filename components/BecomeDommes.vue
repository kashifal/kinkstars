<template>
  <div class="px-4 py-10 mx-auto max-w-7xl md:px-0">
    <div class="flex flex-col items-center justify-between md:flex-row">
      <img
        :src="dommes"
        class="object-cover w-full h-full md:w-[40%] md:h-[70%]"
        alt=""
      />
      <div class="space-y-4 font-sf text-xxxl font-semibold">
        <div>
          <h2 class="font-sf">
            <span>Hello creators, greetings</span>
          </h2>
          <h2 class="flex font-sf items-center max-w-lg gap-2">
            form
            <img :src="logo" class="w-auto h-auto" alt="" />
          </h2>
        </div>
        <p class="text-[18px] text-paragraph font-medium">
          We are an agency that focuses on providing special training to become
          an influencer, starting from finding followers, building a brand,
          creating content, to becoming a great influencer.
        </p>
        <p class="text-[18px] text-paragraph font-medium">
          We have fostered more than 100+ people and became celebrities on a
          national scale.
        </p>
        <button
          class="bg-primary px-[24px] flex items-center gap-4 shadow-xl shadow-primary/50 py-[16px] rounded-full"
        >
          <span class="text-[18px] font-semibold">Become a Dommes</span>
          <span class="p-1 text-white bg-black rounded-full">
            <ChevronRightIcon class="w-5 h-5" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import dommes from "../assets/imgs/dommes.png";
import logo from "../assets/imgs/logo-black.png";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>
