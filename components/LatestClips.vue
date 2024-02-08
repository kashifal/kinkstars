<template>
  <div>
    <div class="flex items-center justify-between w-full pb-10">
      <div class="space-y-2">
        <h2 class="text-[48px] font-semibold">Latest Clips</h2>
        <p class="text-[#6B7280]">
          the latest store product we have from our best influencers
        </p>
      </div>
      <div class="flex justify-end gap-4">
        <button @click="slideToPrev" class="">
          <ArrowLeftIcon class="w-5 h-5" />
        </button>
        <button @click="slideToNext" class="">
          <ArrowRightIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
    <Splide
      ref="splide"
      class="splide"
      :options="{
        rewind: true,
        perPage: 4,
        navigation: false,
        gap: 20,
        arrows: false,
        drag: true,
        pagination: false,
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          1024: {
            perPage: 3,
          },
          1440: {
            perPage: 5,
          },
        },
      }"
      aria-label="Latest Clips"
    >
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </Splide>
  </div>
</template>

<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { Splide } from "@splidejs/vue-splide";

const splide = ref(null);

const slideToNext = () => {
  splide.value.splide.go("+");
};

const slideToPrev = () => {
  splide.value.splide.go("-");
};
</script>
