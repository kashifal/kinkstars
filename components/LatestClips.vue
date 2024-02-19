<template>
  <div>
    <div class="md:flex-row flex-col items-center justify-between w-full pb-10">
      <div class="space-y-2">
        <h2 class="text-xxxl font-semibold font-sf">{{ title }}</h2>
        <p class="text-paragraph">
          the latest store product we have from our best influencers
        </p>
      </div>
      <div class="flex justify-end gap-4 mt-5 md:mt-0">
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
            perPage: 4,
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

const { title } = defineProps({
  title: {
    type: String,
    default: "Latest Clips",
  },
});

const splide = ref(null);

const slideToNext = () => {
  splide.value.splide.go("+");
};

const slideToPrev = () => {
  splide.value.splide.go("-");
};
</script>
