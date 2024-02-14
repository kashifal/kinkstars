<template>
  <div class="flex items-center">
    <div
      class="relative flex-col items-center justify-center flex-1 hidden h-screen gap-12 p-4 bg-black lg:flex"
    >
      <div class="absolute bottom-0 left-0">
        <svg
          width="339"
          height="354"
          viewBox="0 0 339 354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle
              cx="-53.6355"
              cy="307.838"
              r="207.669"
              transform="rotate(-30 -53.6355 307.838)"
              stroke="white"
            />
            <circle
              cx="-53.6355"
              cy="307.838"
              r="207.669"
              transform="rotate(-30 -53.6355 307.838)"
              stroke="white"
            />
            <circle
              cx="-53.6355"
              cy="307.838"
              r="207.669"
              transform="rotate(-30 -53.6355 307.838)"
              stroke="white"
            />
            <circle
              cx="-53.6355"
              cy="307.838"
              r="207.669"
              transform="rotate(-30 -53.6355 307.838)"
              stroke="white"
            />
            <circle
              cx="54.3519"
              cy="400.985"
              r="207.669"
              transform="rotate(-30 54.3519 400.985)"
              stroke="white"
            />
            <circle
              cx="54.3519"
              cy="400.985"
              r="207.669"
              transform="rotate(-30 54.3519 400.985)"
              stroke="white"
            />
            <circle
              cx="54.3519"
              cy="400.985"
              r="207.669"
              transform="rotate(-30 54.3519 400.985)"
              stroke="white"
            />
            <circle
              cx="54.3519"
              cy="400.985"
              r="207.669"
              transform="rotate(-30 54.3519 400.985)"
              stroke="white"
            />
          </g>
        </svg>
      </div>
      <div>
        <img :src="logo" class="w-auto h-auto" alt="kink-stars-logo" />
      </div>
      <div>
        <img :src="ornament" class="" alt="kink-stars-logo" />
      </div>
      <div class="space-y-4 text-center">
        <h2 class="font-semibold text-white text-[24px]">
          Influencers who is professional in his field
        </h2>
        <p class="max-w-lg text-gray-400">
          thas been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
      </div>
    </div>
    <div
      class="lg:w-[55%] w-full min-h-screen bg-[#FBFBFB] flex items-center justify-center"
    >
      <div
        class="px-12 py-12 max-w-2xl w-full space-y-6 bg-white border rounded-xl"
        style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
      >
        <div>
          <NuxtLink to="/">
            <img :src="logoBlack" class="w-auto h-auto" alt="" />
          </NuxtLink>
        </div>
        <div class="space-y-2">
          <h2 class="text-[32px] text-[#374151] font-semibold">
            Reset your password
          </h2>
          <p class="text-[#00000099]">
            Don't worry we will help you, please fill out the form below
          </p>
        </div>
        <div>
          <form class="space-y-4">
            <div class="flex flex-col gap-2">
              <label for="email"> Email address </label>
              <input
                id="email"
                type="email"
                class="px-[18px] py-[12px] rounded-xl outline-none bg-[#FBFBFB]"
                placeholder="Email address"
              />
            </div>
            <div class="pt-4">
              <button
                class="text-white rounded-xl font-semibold bg-primary px-[24px] py-[13px] w-full"
              >
                Submit Now
              </button>
            </div>
          </form>
          <div class="flex items-center justify-center pt-6">
            <div>
              <p class="text-[#6B7280]">
                Remember your password?
                <NuxtLink
                  to="/sign-in"
                  class="font-semibold text-black hover:underline"
                  >Sign In</NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/imgs/logo.png";
import logoBlack from "../assets/imgs/logo-black.png";
import ornament from "../assets/imgs/ornament.png";
import { ref } from "vue";
const showPassword = ref(false);
const changePasswordType = () => {
  showPassword.value = !showPassword.value;
};
</script>
