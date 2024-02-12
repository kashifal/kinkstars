<template>
  <!-- Mobile Version -->
  <div class="block md:hidden relative h-screen">
    <video class="absolute top-0 left-0 w-full h-full" autoplay muted>
      <source
        id="mp4"
        src="http://media.w3.org/2010/05/sintel/trailer.mp4"
        type="video/mp4"
      />
    </video>
    <div
      class="px-4 py-5 flex flex-col absolute top-0 left-0 w-full h-full text-white backdrop-brightness-50"
    >
      <!-- Header -->
      <div class="flex justify-between items-center flex-wrap gap-y-1">
        <div class="flex gap-x-3">
          <img
            class="rounded-full"
            src="https://placeholder.co/32x32"
            width="32"
            height="32"
            alt=""
          />
          <div class="flex flex-col justify-between">
            <div class="text-sm font-bold">Sofia Gurino</div>
            <div class="text-xs font-medium">Dominatrix</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex gap-x-1">
            <img src="https://placeholder.co/28x30" alt="" />
            <img src="https://placeholder.co/28x30" alt="" />
            <img src="https://placeholder.co/28x30" alt="" />
          </div>
          <Right class="mr-2" />
          <Cross class="mr-3" />
        </div>
      </div>
      <div class="mt-3 flex gap-x-3">
        <button
          class="w-20 h-7 rounded-full bg-[#35383F99] flex justify-center items-center gap-x-2"
        >
          <ThreeUser /> <span class="text-xs font-semibold">3.6K</span>
        </button>
        <button
          class="w-20 h-7 rounded-full bg-[#35383F99] flex justify-center items-center gap-x-2"
        >
          <span class="text-xs font-semibold">3:07:48</span>
        </button>
      </div>

      <!-- Chatbox -->
      <div class="h-full flex flex-col">
        <!-- Chat -->
        <div
          class="h-full px-6 py-4 gap-y-3 flex flex-col-reverse overflow-y-auto"
        >
          <!-- Message -->
          <div class="msg">
            <img src="https://placehold.co/32x32" alt="" />
            <div class="wrapper">
              <div class="name">Username</div>
              <div class="msg">Coment</div>
            </div>
          </div>
        </div>
        <!-- New Chat -->
        <div class="h-12 flex">
          <div class="w-full relative">
            <input
              class="w-full text-sm text-[#495057] px-4 py-[13px] bg-[#FBFBFB] rounded-xl outline-none"
              type="text"
              placeholder="Your comment..."
            />
            <button
              class="absolute w-fit h-fit top-1/2 bottom-1/2 right-4 -translate-y-1/2"
            >
              <Emoji />
            </button>
          </div>
          <div class="mt-3 flex gap-x-2">
            <button
              class="w-10 h-10 flex flex-col items-center justify-between"
            >
              <QNA />
              <span class="text-[10px] font-medium"> QnA </span>
            </button>
            <button
              class="w-10 h-10 flex flex-col items-center justify-between"
            >
              <Share />
              <span class="text-[10px] font-medium"> 5.7K </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Desktop version -->
  <AppLayout :show-on-mobile="false">
    <div
      class="hidden md:flex h-[calc(100vh_-_64px)] overflow-y-auto p-5 gap-x-5 mx-auto"
    >
      <div class="w-3/4 flex flex-col gap-y-5">
        <video class="rounded-2xl" controls>
          <source src="https://www.bigbuckbunny.org/" type="video/mp4" />
        </video>
        <div>
          <div class="flex justify-between items-center gap-x-4">
            <img src="https://placehold.co/60x60" alt="" />
            <div class="w-full flex flex-col">
              <div class="text-2xl font-semibold">Sofia Gurio</div>
              <div class="text-[#6B7280]">
                SEA SUBATHON (im doing it again cause roulette) Chilling With
                Elephants in Thailand !socials
              </div>
            </div>
            <div class="flex gap-x-4">
              <button
                class="w-[52px] h-12 flex justify-center items-center bg-white rounded-xl border border-[#E4E7EC] shadow"
              >
                <DollarCircle />
              </button>
              <button
                class="w-[52px] h-12 flex justify-center items-center bg-white rounded-xl border border-[#E4E7EC] shadow"
              >
                <ShareSocial />
              </button>
            </div>
          </div>
        </div>
        <!-- About -->
        <div class="p-4 flex flex-col gap-y-5 bg-white rounded-2xl shadow">
          <div class="text-[#6B7280]">About Sofia</div>
          <div class="flex gap-x-5">
            <div class="text-center">
              <div class="font-bold text-xl">492</div>
              <div class="text-[#6B7280]">Followers</div>
            </div>
            <div class="text-center">
              <div class="font-bold text-xl">329</div>
              <div class="text-[#6B7280]">Followers</div>
            </div>
            <div class="text-center">
              <div class="font-bold text-xl">32</div>
              <div class="text-[#6B7280]">Subscribers</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 h-full flex flex-col bg-white rounded-2xl">
        <!-- Top banner -->
        <div class="font-semibold">
          <div class="px-4 py-5 text-lg flex items-center justify-between">
            <span>Stream chat</span> <User />
          </div>
          <div class="px-5 py-[7px] border-t border-b">
            <div
              class="px-3 py-[10px] flex justify-between items-center gap-y-1 flex-wrap bg-[#FBFBFB] rounded-lg"
            >
              <div class="text-[#6B7280]">Top Member</div>
              <div class="flex items-center gap-x-[10px]">
                <div class="flex gap-x-1">
                  <img src="https://placehold.co/40x45" alt="" />
                  <img src="https://placehold.co/40x45" alt="" />
                  <img src="https://placehold.co/40x45" alt="" />
                </div>
                <Right />
              </div>
            </div>
          </div>
        </div>
        <!-- Chatbox -->
        <div class="h-full flex flex-col">
          <!-- Chat -->
          <div
            class="h-full px-6 py-4 gap-y-3 flex flex-col-reverse overflow-y-auto"
          >
            <!-- Message -->
            <div class="msg">
              <img src="https://placehold.co/32x32" alt="" />
              <div class="wrapper">
                <div class="name">Username</div>
                <div class="msg">Coment</div>
              </div>
            </div>
          </div>
          <!-- New Chat -->
          <div class="border-t p-6">
            <div class="relative">
              <input
                class="w-full text-sm text-[#495057] px-4 py-[13px] bg-[#FBFBFB] rounded-xl outline-none"
                type="text"
                placeholder="Your comment..."
              />
              <button
                class="absolute w-fit h-fit top-1/2 bottom-1/2 right-4 -translate-y-1/2"
              >
                <Emoji />
              </button>
            </div>
            <div class="mt-3 flex gap-x-2">
              <button
                class="w-10 h-10 flex flex-col items-center justify-between"
              >
                <QNA />
                <span class="text-[10px] font-medium"> QnA </span>
              </button>
              <button
                class="w-10 h-10 flex flex-col items-center justify-between"
              >
                <Share />
                <span class="text-[10px] font-medium"> 5.7K </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>
import AppLayout from "~/layouts/AppLayout.vue";
import User from "~/components/Icons/User.vue";
import Right from "~/components/Icons/Right.vue";
import QNA from "~/components/Icons/QNA.vue";
import Share from "~/components/Icons/Share.vue";
import Emoji from "~/components/Icons/Emoji.vue";
import DollarCircle from "~/components/Icons/DollarCircle.vue";
import ShareSocial from "~/components/Icons/ShareSocial.vue";
import Cross from "~/components/Icons/Cross.vue";
import ThreeUser from "~/components/Icons/ThreeUser.vue";
</script>
<style scoped lang="postcss">
.msg {
  @apply flex items-start gap-x-3;
  > img {
    @apply rounded-full;
  }
  > .wrapper {
    @apply flex flex-col gap-y-1;
    > .name {
      @apply text-sm font-medium;
    }
    > .msg {
      @apply text-xs md:text-[#6B7280];
    }
  }
}
</style>
