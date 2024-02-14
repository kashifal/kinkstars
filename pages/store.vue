<template>
  <AppLayout :variant="'v2'">
    <div class="relative bg overflow-hidden bg-[#141416] px-4 py-12">
      <div
        class="flex flex-col items-center justify-center gap-4 text-center text-white"
      >
        <h2 class="text-[48px] font-semibold">Fetish Store</h2>
        <p class="max-w-xl">100+ fetish stuff.</p>
        <div
          class="flex items-center justify-center flex-1 w-full px-2 lg:ml-6 lg:justify-end"
        >
          <div class="w-full max-w-2xl mx-auto">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <MagnifyingGlassIcon
                  class="w-5 h-5 text-black"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                class="block w-full rounded-xl outline-none focus:ring-2 ring-primary border-0 bg-white py-[16px] pl-10 pr-3 text-gray-900"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured -->
    <div class="bg-white px-4 w-full py-24">
      <div
        class="flex max-w-7xl bg-white mx-auto items-center justify-between w-full mt-24"
      >
        <div class="space-y-2">
          <h2 class="text-[32px] font-semibold">Similar Auctions</h2>
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
      <!-- Splide -->
      <div class="py-8 mx-auto max-w-7xl">
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
                perPage: 2,
              },
              1250: {
                perPage: 2,
              },
              1440: {
                perPage: 4,
              },
            },
          }"
          aria-label="Latest Clips"
        >
          <SplideSlide>
            <div
              class="bg-[#FBFBFB] py-12 border w-full h-full flex items-center gap-4 flex-col"
            >
              <img :src="Bitmap" alt="" />
              <div class="py-4 space-y-2">
                <h1 class="font-bold text-[#31363D] text-center text-[14px]">
                  GREG LAUREN
                </h1>
                <p class="text-[12px] text-[#79808E] font-normal text-center">
                  “Western Studio’ shirt
                </p>
                <h1 class="text-[14px] text-center font-bold text-[#31363D]">
                  $559
                </h1>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="bg-[#FBFBFB] py-12 border w-full h-full flex items-center gap-4 flex-col"
            >
              <img :src="Bitmap" alt="" />
              <div class="py-4 space-y-2">
                <h1 class="font-bold text-[#31363D] text-center text-[14px]">
                  GREG LAUREN
                </h1>
                <p class="text-[12px] text-[#79808E] font-normal text-center">
                  “Western Studio’ shirt
                </p>
                <h1 class="text-[14px] text-center font-bold text-[#31363D]">
                  $559
                </h1>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="bg-[#FBFBFB] relative py-12 border w-full h-full flex px-6 items-start gap-4 flex-col"
            >
              <img
                class="absolute bottom-0 right-0 lg:h-full h-20 lg:block hidden"
                :src="Girl"
                alt=""
              />

              <div class="py-4 space-y-4">
                <h1 class="text-primary text-[12px] font-bold">EXCLUSIVE</h1>
                <h1 class="text-[28px] font-bold text-[#31363D]">
                  Theory Dakui dress
                </h1>
                <p
                  class="text-[#79808E] max-w-sm w-full text-[12px] font-normal"
                >
                  Show your allegiance to 'New York's Pirate Radio' with this
                  cool cap featuring the graphic Know Wave logo.
                </p>

                <div
                  class="border border-[#D9D9D9] rounded-full inline-flex relative z-50"
                >
                  <button
                    class="px-5 text-[14px] text-[#34495E] font-bold py-2.5 border-r border-[#D9D9D9]"
                  >
                    $115
                  </button>
                  <button
                    class="px-10 text-[14px] text-[#34495E] font-bold py-2.5 border-gray-500"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="bg-[#FBFBFB] py-12 border w-full h-full flex items-center gap-4 flex-col"
            >
              <img :src="Bitmap" alt="" />
              <div class="py-4 space-y-2">
                <h1 class="font-bold text-[#31363D] text-center text-[14px]">
                  GREG LAUREN
                </h1>
                <p class="text-[12px] text-[#79808E] font-normal text-center">
                  “Western Studio’ shirt
                </p>
                <h1 class="text-[14px] text-center font-bold text-[#31363D]">
                  $559
                </h1>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="bg-[#FBFBFB] py-12 border w-full h-full flex items-center gap-4 flex-col"
            >
              <img :src="Bitmap" alt="" />
              <div class="py-4 space-y-2">
                <h1 class="font-bold text-[#31363D] text-center text-[14px]">
                  GREG LAUREN
                </h1>
                <p class="text-[12px] text-[#79808E] font-normal text-center">
                  “Western Studio’ shirt
                </p>
                <h1 class="text-[14px] text-center font-bold text-[#31363D]">
                  $559
                </h1>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="bg-[#FBFBFB] py-12 border w-full h-full flex items-center gap-4 flex-col"
            >
              <img :src="Bitmap" alt="" />
              <div class="py-4 space-y-2">
                <h1 class="font-bold text-[#31363D] text-center text-[14px]">
                  GREG LAUREN
                </h1>
                <p class="text-[12px] text-[#79808E] font-normal text-center">
                  “Western Studio’ shirt
                </p>
                <h1 class="text-[14px] text-center font-bold text-[#31363D]">
                  $559
                </h1>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>

    <!--  -->
    <div class="px-4 py-16 mx-auto max-w-7xl">
      <div
        class="flex gap-6 md:items-center md:flex-row flex-col justify-between"
      >
        <div class="space-y-2">
          <h2 class="md:text-[48px] text-[32px] font-semibold">
            Fetish Product
          </h2>
          <p class="text-[#6B7280] text-[18px]">
            the latest store product we have from our best influencers
          </p>
        </div>
        <!-- Tags -->
        <div class="flex items-center gap-3">
          <div
            class="px-4 cursor-pointer text-[14px] font-semibold py-2 rounded-full bg-[#E6E8EC]"
          >
            Popular
          </div>
          <div
            class="px-4 text-[#777E90] cursor-pointer hover:text-black hover:bg-[#E6E8EC] text-[14px] font-semibold py-2 rounded-full"
          >
            Newst
          </div>
        </div>
      </div>
      <div
        class="grid my-8 grid-cols-1 gap-4 py-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2"
      >
        <div class="col-span-1">
          <div class="">
            <img class="w-full rounded-xl" :src="model" alt="" />
          </div>
          <div class="py-2">
            <h3 class="max-w-xs text-[16px] font-semibold">Auction Thing 1</h3>
            <p class="text-[14px] pb-4 font-normal text-[#777E90]">
              Auction brief description will be here. And here if the text was
              long.
            </p>
            <div class="flex pt-4 border-t items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <span class="text-[14px] text-[#777E90]">Feb 03, 2021</span>
              </div>

              <div>
                <button class="px-4 py-2 rounded-[4px] text-[20px] font-bold">
                  $590,000
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex my-10">
        <div
          class="bg-[#E6E8EC] font-semibold cursor-pointer px-4 mx-auto py-2.5 rounded-full text-[#23262F] inline-flex text-[14px]"
        >
          Show More
        </div>
      </div>
    </div>

    <!-- Cotton -->
    <div class="bg-white w-full py-16">
      <div class="max-w-7xl px-4 gap-8 mx-auto lg:grid lg:grid-cols-4">
        <div
          class="lg:col-span-1 flex flex-col space-y-4 items-center rounded-xl bg-black py-12 px-6"
        >
          <h1 class="text-[#FFFFFF] text-[12px] text-center">
            Exclusive Products
          </h1>
          <h1 class="text-center text-[52px] font-light text-white">
            2564 <br />
            Items
          </h1>
          <p class="text-white text-[16px] font-normal text-center">
            Thom Browne, Tricker's, Valentino, Wacko Maria, Y-3, Yeezy Season 1
          </p>

          <img class="mx-auto" :src="Pics" alt="" />
          <NuxtLink to="/sign-up">
            <button
              class="px-10 py-2 text-[13px] font-bold bg-white rounded-full"
            >
              JOIN NOW
            </button>
          </NuxtLink >
        </div>

        <div class="grad relative rounded-[24px] col-span-3 px-6 py-20">
          <img
            class="absolute bottom-0 right-0 md:block hidden"
            :src="wow"
            alt=""
          />

          <div class="py-4 space-y-4">
            <h1 class="text-primary text-[12px] font-bold">EXCLUSIVE</h1>
            <h1 class="text-[28px] font-bold text-[#31363D]">
              The Cotton Poplin <br />
              Culotte
            </h1>
            <p class="text-[#79808E] max-w-xs w-full text-[12px] font-normal">
              Apple may be experimenting in the virtual reality space. The
              company has been granted a patent for a head-mounted virtual
              reality device that would use the iPhone screen as the display.
            </p>
            
            <NuxtLink to="/sign-up">
              <button
                class="px-10 bg-black text-white text-[14px] border rounded-full font-bold py-2.5 border-[#D9D9D9"
              >
                BUY NOW
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="bg-white py-16">
      <StorePageSlider />
    </div>
  </AppLayout>
  <Footer />
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
<style scoped>
.bg {
  background-image: url("../assets/imgs/models.png");
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
}

.grad {
  background: linear-gradient(180deg, #fcfdff 42.25%, #f1f1fb 100%);
}

@media all and (min-width: 1050px) {
  .splide__slide:nth-child(3) {
    margin-right: 20px;
    width: calc(50% - 10px) !important;
  }
}
</style>
