<template>
  <AppLayout>
    <div class="bg-white">
      <div class="px-4 pt-10 pb-4 mx-auto space-y-8 max-w-7xl">
        <div class="flex items-center">
          <button
            class="flex items-center gap-2 bg-hoverBg px-[16px] py-[10px] rounded-full text-darkest hover:bg-gray-100"
          >
            <ChevronLeftIcon class="w-5 h-5" />
            Back
          </button>
        </div>
        <div class="py-4 space-y-4">
          <span class="text-paragraph">Previews</span>
          <h2 class="text-gray700 text-xxl font-semibold">
            Hai, I am Sofia. Subs for more Content
          </h2>
          <p class="text-paragraph">
            Consuming the minds and souls of men. Whether you’re a complete
            beginner or you want to step up your routine, get the full studio
            experience at home with thousands of classes for body, mind, and
            spirit.
          </p>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img :src="model" class="w-8 h-8 rounded-full" alt="" />
            <span class="text-gray700 font-semibold text-[18px]"
              >Sofia Shane</span
            >
          </div>
          <div class="flex items-center gap-4">
            <button
              style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
              class="flex border border-borderSecondary items-center gap-4 px-[24px] py-[12px] font-semibold rounded-[12px]"
            >
              <HeartIcon class="w-5 h-5" />

              Like
            </button>
            <button
              style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
              class="flex border border-borderSecondary items-center gap-4 px-[24px] py-[12px] font-semibold rounded-[12px]"
            >
              <ShareIcon class="w-5 h-5" />

              Share
            </button>
            <button
              class="flex items-center text-white bg-black gap-4 px-[24px] py-[12px] font-semibold rounded-[12px]"
            >
              Buy for $25
            </button>
          </div>
        </div>
        <div>
          <video
            class="w-full h-full border rounded-xl"
            ref="videoPlayer"
            controls
          >
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <div class="flex items-center justify-between w-full pb-10">
            <div class="space-y-2">
              <h2 class="text-xxl font-semibold">Similar Videos</h2>
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
      </div>
    </div>
  </AppLayout>
  <Footer />
</template>
<script setup>
import {
  ChevronLeftIcon,
  HeartIcon,
  ShareIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/vue/24/outline";
import AppLayout from "~/layouts/AppLayout.vue";
import model from "../assets/imgs/model.png";
import { Splide } from "@splidejs/vue-splide";
import videoSrc from "../assets/imgs/clip.mp4";

const splide = ref(null);

const slideToNext = () => {
  splide.value.splide.go("+");
};

const slideToPrev = () => {
  splide.value.splide.go("-");
};
</script>
