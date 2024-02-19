<template>
  <AppLayout :variant="'v2'">
    <div class="relative bg overflow-hidden bg-bgSecondary px-4 py-20">
      <div
        class="flex flex-col items-center justify-center gap-4 text-center text-white"
      >
        <h2 class="text-xxxl font-sf font-semibold">Clips For you</h2>
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
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="col-span-1">
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
        </div>
        <div class="px-8">
          <div class="flex flex-col justify-between">
            <div class="space-y-4">
              <span class="text-paragraph">Featured</span>
              <h2
                class="max-w-lg font-sf text-gray700 font-semibold md:text-xxxl text-xxl"
              >
                Hai, I am Sofia. Subs for more Content
              </h2>
              <p class="text-paragraph">
                Consuming the minds and souls of men. Whether you’re a complete
                beginner or you want to step up your routine, get the full
                studio experience at home with thousands of classes for body,
                mind, and spirit.
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div class="flex items-center gap-4">
              <img
                class="object-cover w-8 h-8 rounded-full"
                :src="model"
                alt=""
              />
              <h2 class="text-[18px] font-semibold">Karin Shane</h2>
            </div>
            <div>
              <a
                href="#"
                style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
                class="flex border border-borderSecondary items-center gap-4 px-[24px] py-[12px] font-semibold rounded-[12px]"
              >
                View Profile
                <ArrowRightIcon class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-4 py-8">
      <div class="flex items-center gap-10">
        <button
          class="text-black font-semibold px-4 py-2 rounded-full bg-hoverBg"
        >
          Popular
        </button>
        <button class="text-paragraph py-2 rounded-full">Newest</button>
        <button class="text-paragraph py-2 rounded-full">Title</button>
      </div>
    </div>
    <div class="px-4 py-16 mx-auto max-w-7xl">
      <div
        class="grid grid-cols-1 gap-4 py-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2"
      >
        <div class="col-span-1">
          <div class="relative">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="model"
              alt="random-img"
            />
            <button
              class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
            >
              <PlayIcon class="" />
            </button>
          </div>
          <div class="py-2 border-b">
            <h3 class="max-w-xs text-lx font-semibold">
              Can you resist the feeling of turn on?!
            </h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <img class="w-8 h-8 rounded-full" :src="model" alt="" />
                <span class="text-[14px] text-steal">Sarah coheil</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div>
              <span class="text-[14px] text-steal">Feb 03, 2021</span>
            </div>
            <div>
              <span
                class="px-4 py-2 font-semibold text-gray200 rounded bg-primary"
                >$ 50</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="model"
              alt="random-img"
            />
            <button
              class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
            >
              <PlayIcon class="" />
            </button>
          </div>
          <div class="py-2 border-b">
            <h3 class="max-w-xs text-lx font-semibold">
              Can you resist the feeling of turn on?!
            </h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <img class="w-8 h-8 rounded-full" :src="model" alt="" />
                <span class="text-[14px] text-steal">Sarah coheil</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div>
              <span class="text-[14px] text-steal">Feb 03, 2021</span>
            </div>
            <div>
              <span
                class="px-4 py-2 font-semibold text-gray200 rounded bg-primary"
                >$ 50</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="model"
              alt="random-img"
            />
            <button
              class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
            >
              <PlayIcon class="" />
            </button>
          </div>
          <div class="py-2 border-b">
            <h3 class="max-w-xs text-lx font-semibold">
              Can you resist the feeling of turn on?!
            </h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <img class="w-8 h-8 rounded-full" :src="model" alt="" />
                <span class="text-[14px] text-steal">Sarah coheil</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div>
              <span class="text-[14px] text-steal">Feb 03, 2021</span>
            </div>
            <div>
              <span
                class="px-4 py-2 font-semibold text-gray200 rounded bg-primary"
                >$ 50</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="model"
              alt="random-img"
            />
            <button
              class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
            >
              <PlayIcon class="" />
            </button>
          </div>
          <div class="py-2 border-b">
            <h3 class="max-w-xs text-lx font-semibold">
              Can you resist the feeling of turn on?!
            </h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <img class="w-8 h-8 rounded-full" :src="model" alt="" />
                <span class="text-[14px] text-steal">Sarah coheil</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div>
              <span class="text-[14px] text-steal">Feb 03, 2021</span>
            </div>
            <div>
              <span
                class="px-4 py-2 font-semibold text-gray200 rounded bg-primary"
                >$ 50</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="model"
              alt="random-img"
            />
            <button
              class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
            >
              <PlayIcon class="" />
            </button>
          </div>
          <div class="py-2 border-b">
            <h3 class="max-w-xs text-lx font-semibold">
              Can you resist the feeling of turn on?!
            </h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <img class="w-8 h-8 rounded-full" :src="model" alt="" />
                <span class="text-[14px] text-steal">Sarah coheil</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div>
              <span class="text-[14px] text-steal">Feb 03, 2021</span>
            </div>
            <div>
              <span
                class="px-4 py-2 font-semibold text-gray200 rounded bg-primary"
                >$ 50</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="model"
              alt="random-img"
            />
            <button
              class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
            >
              <PlayIcon class="" />
            </button>
          </div>
          <div class="py-2 border-b">
            <h3 class="max-w-xs text-lx font-semibold">
              Can you resist the feeling of turn on?!
            </h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <img class="w-8 h-8 rounded-full" :src="model" alt="" />
                <span class="text-[14px] text-steal">Sarah coheil</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div>
              <span class="text-[14px] text-steal">Feb 03, 2021</span>
            </div>
            <div>
              <span
                class="px-4 py-2 font-semibold text-gray200 rounded bg-primary"
                >$ 50</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="model"
              alt="random-img"
            />
            <button
              class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
            >
              <PlayIcon class="" />
            </button>
          </div>
          <div class="py-2 border-b">
            <h3 class="max-w-xs text-lx font-semibold">
              Can you resist the feeling of turn on?!
            </h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <img class="w-8 h-8 rounded-full" :src="model" alt="" />
                <span class="text-[14px] text-steal">Sarah coheil</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div>
              <span class="text-[14px] text-steal">Feb 03, 2021</span>
            </div>
            <div>
              <span
                class="px-4 py-2 font-semibold text-gray200 rounded bg-primary"
                >$ 50</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <img
              class="object-cover w-full h-full rounded-md"
              :src="model"
              alt="random-img"
            />
            <button
              class="absolute flex items-center justify-center w-12 h-12 p-2 text-gray-500 transform bg-white rounded-full left-[45%] top-[45%]"
            >
              <PlayIcon class="" />
            </button>
          </div>
          <div class="py-2 border-b">
            <h3 class="max-w-xs text-lx font-semibold">
              Can you resist the feeling of turn on?!
            </h3>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 py-2">
                <img class="w-8 h-8 rounded-full" :src="model" alt="" />
                <span class="text-[14px] text-steal">Sarah coheil</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <div>
              <span class="text-[14px] text-steal">Feb 03, 2021</span>
            </div>
            <div>
              <span
                class="px-4 py-2 font-semibold text-gray200 rounded bg-primary"
                >$ 50</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center pb-20">
      <button
        class="text-black font-semibold px-6 py-3 rounded-full bg-hoverBg hover:bg-grayFilled transition-all duration-300 ease-in-out"
      >
        Show more
      </button>
    </div>
  </AppLayout>
  <Footer />
</template>

<script setup>
import AppLayout from "~/layouts/AppLayout.vue";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import videoSrc from "../assets/imgs/clip.mp4";
import model from "../assets/imgs/model.png";
import { PlayIcon } from "@heroicons/vue/24/solid";
</script>
<style scoped>
.bg {
  background-image: url("../assets/imgs/models.png");
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
}
</style>
