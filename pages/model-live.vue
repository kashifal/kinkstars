<template>
  <AppLayout>
    <div
      class="h-[calc(100vh_-_64px)] grid grid-cols-1 md:grid-cols-6 overflow-y-auto p-5 gap-x-5 mx-auto"
    >
      <div
        class="relative flex flex-col w-full col-span-1 md:col-span-4 gap-y-5"
      >
        <video class="rounded-2xl" controls>
          <source :src="clip" />
        </video>
        <span
          class="absolute px-4 py-1 text-sm text-white bg-red-500 rounded-full top-4 right-4"
        >
          • Live
        </span>
        <span
          class="absolute flex items-center gap-2 px-4 py-1 text-sm text-white bg-darkBg border border-gray-700 rounded-full top-4 right-28"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4659 6.86063C13.4659 8.8187 11.9049 10.3888 9.95817 10.3888C8.01142 10.3888 6.45044 8.8187 6.45044 6.86063C6.45044 4.90181 8.01142 3.33325 9.95817 3.33325C11.9049 3.33325 13.4659 4.90181 13.4659 6.86063ZM9.95818 16.6666C7.09886 16.6666 4.65739 16.2133 4.65739 14.4001C4.65739 12.5861 7.08319 12.1163 9.95818 12.1163C12.8175 12.1163 15.259 12.5696 15.259 14.3835C15.259 16.1968 12.8332 16.6666 9.95818 16.6666ZM14.9649 6.92427C14.9649 7.92244 14.6672 8.85232 14.1449 9.62534C14.0911 9.7049 14.1389 9.81222 14.2336 9.82873C14.3642 9.85124 14.4993 9.864 14.6366 9.86775C16.0058 9.90378 17.2347 9.01743 17.5742 7.68303C18.0772 5.70095 16.6005 3.9215 14.7202 3.9215C14.5157 3.9215 14.3202 3.94326 14.1299 3.98229C14.1038 3.98829 14.0762 4.0003 14.0613 4.02357C14.0434 4.05209 14.0568 4.09036 14.0747 4.11513C14.6396 4.91142 14.9649 5.88257 14.9649 6.92427ZM17.2325 11.2604C18.1525 11.4413 18.7577 11.8105 19.0084 12.3471C19.2203 12.7877 19.2203 13.2988 19.0084 13.7386C18.6249 14.5709 17.3885 14.8381 16.9079 14.9071C16.8087 14.9221 16.7288 14.8358 16.7393 14.736C16.9848 12.4297 15.0321 11.3362 14.5269 11.0848C14.5053 11.0735 14.5008 11.0563 14.503 11.0457C14.5045 11.0382 14.5135 11.0262 14.5299 11.024C15.623 11.0037 16.7982 11.1538 17.2325 11.2604ZM5.36491 9.86768C5.5022 9.86393 5.63651 9.85192 5.76784 9.82865C5.8626 9.81214 5.91036 9.70482 5.85663 9.62527C5.33432 8.85225 5.03659 7.92237 5.03659 6.9242C5.03659 5.88249 5.36192 4.91134 5.92677 4.11505C5.94468 4.09029 5.95737 4.05201 5.94021 4.02349C5.92528 4.00098 5.89693 3.98822 5.87156 3.98221C5.68054 3.94319 5.48504 3.92142 5.28059 3.92142C3.40025 3.92142 1.92358 5.70087 2.42724 7.68296C2.76675 9.01736 3.99569 9.9037 5.36491 9.86768ZM5.4981 11.0453C5.50034 11.0566 5.49586 11.0731 5.47497 11.0851C4.96907 11.3365 3.01634 12.43 3.26183 14.7355C3.27228 14.8361 3.19318 14.9217 3.09394 14.9074C2.61341 14.8384 1.37701 14.5712 0.993478 13.7389C0.78082 13.2983 0.78082 12.788 0.993478 12.3474C1.24419 11.8108 1.84859 11.4416 2.76861 11.2599C3.20363 11.1541 4.3781 11.004 5.47198 11.0243C5.4884 11.0265 5.49661 11.0385 5.4981 11.0453Z"
              fill="white"
            />
          </svg>
          <span>3.6k</span>
        </span>
        <div>
          <div class="flex flex-wrap items-center justify-between gap-4">
            <img
              :src="model"
              class="w-[60px] object-cover h-[60px] rounded-full"
              alt=""
            />
            <div class="flex flex-col w-full md:flex-1 md:w-auto">
              <div class="text-2xl font-semibold">Sofia Gurio</div>
              <div class="text-paragraph max-w-lg">
                SEA SUBATHON (im doing it again cause roulette) Chilling With
                Elephants in Thailand !socials
              </div>
            </div>
            <div class="flex gap-x-4">
              <button
                class="w-[52px] h-12 flex justify-center items-center bg-white rounded-xl border border-borderSecondary shadow"
              >
                <DollarCircle />
              </button>
              <button
                class="w-[52px] h-12 flex justify-center items-center bg-white rounded-xl border border-borderSecondary shadow"
              >
                <ShareSocial />
              </button>
            </div>
          </div>
        </div>
        <!-- About -->
        <div class="flex flex-col p-4 bg-white shadow gap-y-5 rounded-2xl">
          <div class="text-paragraph">About Sofia</div>
          <div class="flex gap-x-5">
            <div class="text-center">
              <div class="text-xl font-bold">492</div>
              <div class="text-paragraph">Followers</div>
            </div>
            <div class="text-center">
              <div class="text-xl font-bold">329</div>
              <div class="text-paragraph">Followers</div>
            </div>
            <div class="text-center">
              <div class="text-xl font-bold">32</div>
              <div class="text-paragraph">Subscribers</div>
            </div>
          </div>
        </div>
        <div class="p-4"></div>
      </div>
      <div
        class="flex flex-col w-full h-full col-span-1 bg-white md:col-span-2 rounded-2xl"
      >
        <!-- Top banner -->
        <div class="font-semibold">
          <div class="flex items-center justify-between px-4 py-5 text-lg">
            <span>Stream chat</span> <User />
          </div>
          <div class="px-5 py-[7px] border-t border-b">
            <div
              class="px-3 py-[10px] flex justify-between items-center gap-y-1 flex-wrap bg-primaryBg rounded-lg"
            >
              <div class="text-paragraph">Top Member</div>
              <div class="flex items-center gap-x-[10px]">
                <div class="flex gap-x-1">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="model"
                    alt=""
                  />
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="model"
                    alt=""
                  />
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="model"
                    alt=""
                  />
                </div>
                <Right />
              </div>
            </div>
          </div>
        </div>
        <!-- Chatbox -->
        <div class="flex flex-col h-full">
          <!-- Chat -->
          <div
            class="flex flex-col-reverse h-full px-6 py-4 overflow-y-auto gap-y-3"
          >
            <!-- Message -->
            <div
              class="flex items-center gap-4 p-2 rounded-[12px] cursor-pointer hover:bg-gray-100"
            >
              <img
                class="object-cover w-8 h-8 rounded-full"
                :src="model"
                alt=""
              />
              <div class="wrapper">
                <div class="text-[14px] font-semibold">Tynisha Obey</div>
                <div class="text-[12px] text-paragraph">
                  I'd like if we could elaborate more on this.
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-4 p-2 rounded-[12px] cursor-pointer hover:bg-gray-100"
            >
              <img
                class="object-cover w-8 h-8 rounded-full"
                :src="model"
                alt=""
              />
              <div class="wrapper">
                <div class="text-[14px] font-semibold">Tynisha Obey</div>
                <div class="text-[12px] text-paragraph">
                  I'd like if we could elaborate more on this.
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-4 p-2 rounded-[12px] cursor-pointer hover:bg-gray-100"
            >
              <img
                class="object-cover w-8 h-8 rounded-full"
                :src="model"
                alt=""
              />
              <div class="wrapper">
                <div class="text-[14px] font-semibold">Tynisha Obey</div>
                <div class="text-[12px] text-paragraph">
                  I'd like if we could elaborate more on this.
                </div>
              </div>
            </div>
          </div>
          <!-- New Chat -->
          <div class="p-6 border-t">
            <div class="relative">
              <input
                class="w-full text-sm text-lightestPro px-4 py-[13px] bg-primaryBg rounded-xl outline-none"
                type="text"
                placeholder="Your comment..."
              />
              <button
                class="absolute -translate-y-1/2 w-fit h-fit top-1/2 bottom-1/2 right-4"
              >
                <Emoji />
              </button>
            </div>
            <div class="flex mt-3 gap-x-2">
              <button
                class="flex flex-col items-center justify-between w-10 h-10"
              >
                <QNA />
                <span class="text-[10px] font-medium"> QnA </span>
              </button>
              <button
                class="flex flex-col items-center justify-between w-10 h-10"
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
import model from "../assets/imgs/model.png";
import clip from "../assets/imgs/clip.mp4";
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
      @apply text-xs text-paragraph;
    }
  }
}
</style>
