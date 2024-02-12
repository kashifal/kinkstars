.
<template>
  <div class="max-w-7xl px-4 mx-auto">
    <div class="flex items-center justify-between w-full pb-10">
      <div class="space-y-2">
        <h2 class="text-[32px] font-semibold">Fetish on Auction</h2>
        <p class="text-sm font-normal text-[#6B7280]">
          the latest store product we have from our best influencers
        </p>
        <p></p>
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
      <AuctionDetailPageAuctionSlide />
      <AuctionDetailPageAuctionSlide />
      <AuctionDetailPageAuctionSlide />
      <AuctionDetailPageAuctionSlide />
      <AuctionDetailPageAuctionSlide />
      <AuctionDetailPageAuctionSlide />
      <AuctionDetailPageAuctionSlide />
      <AuctionDetailPageAuctionSlide />
    </Splide>

    <div class="flex my-10">
      <div
        class="bg-[#E6E8EC] font-bold cursor-pointer px-4 mx-auto py-2.5 rounded-full text-[#23262F] inline-flex text-[14px]"
      >
        Show More
      </div>
    </div>
  </div>
</template>

<script setup>
import AppLayout from "~/layouts/AppLayout.vue";
import Pics from "../assets/imgs/Pics.png";
import wow from "../assets/imgs/wow.png";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/solid";
import videoSrc from "../assets/imgs/clip.mp4";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import Bitmap from "../assets/imgs/Bitmap.png";
import model from "../assets/imgs/model.png";
import { PlayIcon } from "@heroicons/vue/24/solid";
import Girl from "../assets/imgs/girl.png";

const splide = ref(null);
const slideToNext = () => {
  splide.value.splide.go("+");
};

const slideToPrev = () => {
  splide.value.splide.go("-");
};
</script>
