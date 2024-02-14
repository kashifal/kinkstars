<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <NuxtLink to="/">
            <img class="h-7" :src="logo" alt="Kinkstars" />
        </NuxtLink>
          <p class="text-[16px] leading-6 text-[#6B7280]">
            actually building an audience is not difficult, as long as you know
            how, and this is an easy step to make it happen
          </p>
        </div>
        <div
          class="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 xl:col-span-2 xl:mt-0"
        >
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-[20px] font-semibold leading-6 text-[#141416]">
                Stores
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.stores" :key="item.name">
                  <NuxtLink
                    :to="item.to"
                    class="text-[16px] leading-6 text-[#141416]"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-[20px] font-semibold leading-6 text-[#141416]">
                About
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.about" :key="item.name">
                  <NuxtLink
                    :to="item.to"
                    class="text-[16px] leading-6 text-[#141416]"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-1">
            <div>
              <h3 class="text-[20px] font-semibold leading-6 text-[#141416]">
                Subscribe
              </h3>
            </div>
            <div class="relative py-4">
              <div className=" py-3 rounded-md">
                <button
                  class="absolute rounded-full bg-primary p-2 top-[21px] right-2 flex items-center text-[#141416]"
                >
                  <ArrowRightIcon class="w-5 h-5 text-white" />
                </button>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full px-4 py-3 text-[16px] rounded-full outline-none border border-gray-500"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <p class="text-[16px] text-[#141416]">
                By click sign in you, you agree with Stacks
                <span class="text-primary">terms</span> and
                <span class="text-primary">policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-between pt-8 mt-16 border-t border-gray-900/10 sm:mt-20 lg:mt-24"
      >
        <p class="text-[#6B7280] text-[18px]">@2022 Copyright</p>
        <div class="flex items-center gap-12">
          <a class="text-[#6B7280] text-[18px]" href="#">Terms & Condition</a>
          <a class="text-[#6B7280] text-[18px]" href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import logo from "../assets/imgs/logo-black.png";
const navigation = {
  stores: [
    { name: "Video Clip", to: "/clips" },
    { name: "Fetish Store", to: "/store" },
    { name: "Dommes", to: "/dommes" },
    { name: "Love", to: "#" },
  ],
  about: [
    { name: "Home", to: "/home" },
    { name: "How it Works", to: "#" },
    { name: "About Us", to: "#" },
    { name: "Contact Us", to: "#" },
  ],
};
</script>
