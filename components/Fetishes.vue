<template>
  <div class="px-4 py-10 mx-auto max-w-7xl lg:px-0">
    <div class="space-y-4">
      <h2 class="text-[48px] font-semibold max-w-2xl">
        Get your desire up by your Fetish!!
      </h2>
      <p class="text-[#6B7280] max-w-3xl">
        Whether you’re a complete beginner or you want to step up your routine,
        get the full studio experience at home with thousands of classes for
        body, mind, and spirit.
      </p>
      <div class="flex justify-end gap-4">
        <button class="" @click="slideToPrev">
          <ArrowLeftIcon class="w-5 h-5" />
        </button>
        <button class="" @click="slideToNext">
          <ArrowRightIcon class="w-5 h-5" />
        </button>
      </div>
      <div>
        <Splide
          ref="splide"
          class="flex items-center justify-center splide"
          :options="{
            rewind: true,
            perPage: 6,
            navigation: false,
            centered: true,
            gap: 0,
            arrows: false,
            drag: true,
            pagination: false,
            breakpoints: {
              640: {
                perPage: 2,
              },
              768: {
                perPage: 4,
              },
              1024: {
                perPage: 5,
              },
              1440: {
                perPage: 6,
              },
            },
          }"
          aria-label="Fetishes"
        >
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
          <SplideSlide class="flex items-center justify-center">
            <div class="w-[200px] h-[200px] rounded-lg">
              <figure class="flex flex-col items-center gap-4 font-semibold">
                <img
                  src="https://picsum.photos/seed/picsum/150/150"
                  class="rounded-md"
                  alt=""
                />
                <figcaption class="text-center">Fetish 1</figcaption>
              </figure>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script setup>
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
