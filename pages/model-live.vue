<template>
  <AppLayout>
    <div
      class="h-[calc(100vh_-_64px)] overflow-y-auto p-5 flex gap-x-5 mx-auto"
    >
      <div class="w-3/4 flex flex-col gap-y-5">
        <video class=" rounded-2xl" controls>
          <source src="https://www.bigbuckbunny.org/" />
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
      @apply text-xs text-[#6B7280];
    }
  }
}
</style>
