<template>
  <AppLayout :variant="'v2'">
    <div class="relative bg overflow-hidden bg-[#141416] px-4 py-20">
      <div
        class="flex flex-col items-center justify-center gap-4 text-center text-white"
      >
        <h2 class="text-[48px] font-semibold">Dommes Model</h2>
        <p class="max-w-xl">
          We have scored over 100+ models with tens of millions of followers,
          ready to fulfill your desires.
        </p>
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
    <div class="px-4 py-16 mx-auto max-w-7xl">
      <div>
        <div class="flex items-center justify-between w-full pb-10">
          <div class="space-y-2">
            <h2 class="md:text-[48px] text-[32px] font-semibold">
              Popular Models
            </h2>
            <p class="text-[#6B7280]">Dommes on popularity</p>
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
          <SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div> </SplideSlide
          ><SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div> </SplideSlide
          ><SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div> </SplideSlide
          ><SplideSlide>
            <div class="col-span-1 rounded-md">
              <div class="">
                <img class="w-full rounded-md" :src="model" alt="" />
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
                <p class="text-[#6B7280]">Sexy Babe</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <div class="px-4 py-16 mx-auto max-w-7xl">
      <div class="space-y-2">
        <h2 class="md:text-[48px] text-[32px] font-semibold">Popular Models</h2>
        <p class="text-[#6B7280]">Dommes on popularity</p>
      </div>
      <div
        class="grid grid-cols-1 gap-4 py-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2"
      >
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="">
            <img class="w-full" :src="model" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center py-2">
            <h2 class="text-[20px] font-semibold">Sofia Guirno</h2>
            <p class="text-[#6B7280]">Sexy Babe</p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center py-4">
        <button
          class="text-black font-semibold px-6 py-3 rounded-full bg-[#E6E8EC] hover:bg-[#D1D5DB] transition-all duration-300 ease-in-out"
        >
          Show more
        </button>
      </div>
      <CTA />
    </div>
  </AppLayout>
  <Footer />
</template>
<script setup>
import AppLayout from "~/layouts/AppLayout.vue";
import model from "../assets/imgs/model.png";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

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
</style>
