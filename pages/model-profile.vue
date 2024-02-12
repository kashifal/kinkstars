<template>
  <StartLiveStream />
  <AppLayout>
    <div class="bg-white">
      <div class="px-4 pt-10 pb-4 mx-auto space-y-8 max-w-7xl">
        <div class="flex flex-col items-center justify-center gap-6">
          <div class="relative rounded-full">
            <img
              class="object-cover w-[150px] h-[150px] rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="model avatar"
            />
          </div>
          <div>
            <h2 class="text-[48px] font-semibold text-[#141416] text-center">
              Sofia Guirno
            </h2>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-12">
            <div class="flex flex-col items-center gap-1 text-center">
              <h2 class="text-[24px] text-[#141416] font-semibold">492</h2>
              <span class="text-[#6B7280]">Followers</span>
            </div>
            <div class="flex flex-col items-center gap-1 text-center">
              <h2 class="text-[24px] text-[#141416] font-semibold">492</h2>
              <span class="text-[#6B7280]">Followers</span>
            </div>
            <div class="flex flex-col items-center gap-1 text-center">
              <h2 class="text-[24px] text-[#141416] font-semibold">392</h2>
              <span class="text-[#6B7280]">Subscribers</span>
            </div>
          </div>
          <div>
            <div class="space-y-1 font-sans text-center">
              <p>👜 Fashion, beauty, lifestyle & aesthetic inspo</p>
              <p>🙌 Founder of @beatyhstudio</p>
              <p>📍 Berlin</p>
              <p class="max-w-3xl">
                Consuming the minds and souls of men. Whether you’re a complete
                beginner or you want to step up your routine, get the full
                studio experience at home with thousands of classes for body,
                mind, and spirit.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <button
              class="flex items-center border font-semibold px-[48px] gap-2 py-[13px] rounded-[12px]"
              style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
            >
              <PencilSquareIcon class="w-6 h-6" />
              Edit Profile
            </button>
            <button
              class="flex items-center border font-semibold px-[48px] gap-2 py-[13px] rounded-[12px]"
              style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
            >
              <ChartPieIcon class="w-6 h-6" />
              Statistics
            </button>
          </div>
        </div>
        <div class="flex items-center justify-end py-2 md:justify-between">
          <div class="flex-wrap items-center hidden gap-4 md:flex">
            <button
              @click="changeTab('Free Posts')"
              :class="{
                'bg-gray-100': selectedTab === 'Free Posts',
                'text-black': selectedTab === 'Free Posts',
              }"
              class="flex items-center gap-2 rounded-full font-semibold px-[24px] py-[10px] text-[#777E90] hover:bg-gray-100"
            >
              <Squares2X2Icon class="w-5 h-5" />
              Free Posts
            </button>
            <button
              @click="changeTab('Subs-Only')"
              :class="{
                'bg-gray-100': selectedTab === 'Subs-Only',
                'text-black': selectedTab === 'Subs-Only',
              }"
              class="flex items-center gap-2 rounded-full font-semibold px-[24px] py-[10px] text-[#777E90] hover:bg-gray-100"
            >
              <LockClosedIcon class="w-5 h-5" />
              Subs-Only
            </button>
            <button
              class="flex items-center gap-2 rounded-full font-semibold px-[24px] py-[10px] text-[#777E90] hover:bg-gray-100"
            >
              <VideoCameraIcon class="w-5 h-5" />
              Video
            </button>
            <button
              class="flex items-center gap-2 rounded-full font-semibold px-[24px] py-[10px] text-[#777E90] hover:bg-gray-100"
            >
              <PhotoIcon class="w-5 h-5" />
              Photos
            </button>
            <button
              class="flex items-center gap-2 rounded-full font-semibold px-[24px] py-[10px] text-[#777E90] hover:bg-gray-100"
            >
              <ArrowTrendingUpIcon class="w-5 h-5" />
              Auction
            </button>
            <button
              class="flex items-center gap-2 rounded-full font-semibold px-[24px] py-[10px] text-[#777E90] hover:bg-gray-100"
            >
              <PuzzlePieceIcon class="w-5 h-5" />
              Games
            </button>
          </div>
          <div>
            <button
              class="flex items-center gap-2 rounded-[12px] text-[#777E90] px-4 py-2 hover:bg-gray-100"
            >
              <EllipsisHorizontalIcon class="w-6 h-6" />
              More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#FAFAFA]">
      <div class="px-4 py-10 mx-auto max-w-7xl md:px-0">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-6">
          <div class="col-span-1 space-y-4 md:col-span-4">
            <div class="pb-4">
              <WriteModelPost />
            </div>
            <FilterBar />
            <div v-if="selectedTab === 'Free Posts'">
              <FreePosts />
            </div>
            <div v-if="selectedTab === 'Subs-Only'">
              <SubsOnly />
            </div>
          </div>
          <div class="col-span-1 space-y-4 md:col-span-2">
            <div
              class="bg-white rounded-[16px]"
              style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075)"
            >
              <div class="p-6 space-y-4 text-center">
                <div>
                  <span class="text-[12px] font-semibold text-[#6B7280]"
                    >Exclusive content</span
                  >
                </div>
                <div>
                  <h2
                    class="text-[48px] font-semibold text-[#141416] max-w-xs leading-[1.2] mx-auto"
                  >
                    Subscribe for all
                  </h2>
                </div>
                <div>
                  <span class="text-[#141416]"
                    ><span class="text-[32px] font-semibold">$16</span>
                    <span class="text-[24px]">/ Month</span></span
                  >
                </div>
                <div class="w-full">
                  <button
                    class="flex w-full text-center justify-center items-center border font-semibold px-[48px] gap-2 py-[13px] rounded-[12px]"
                    style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
                  >
                    <PencilSquareIcon class="w-6 h-6" />
                    Edit Subscriptions
                  </button>
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-b-[16px] border-t-[4px] border-primary shadow-lg"
              style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075)"
            >
              <div class="p-6 space-y-4 text-center">
                <div class="flex items-center justify-center py-4">
                  <span class="text-primary">
                    <SparklesIcon class="w-8 h-8" />
                  </span>
                </div>
                <div>
                  <h2
                    class="text-[32px] font-semibold text-[#141416] max-w-xs leading-[1.2] mx-auto"
                  >
                    Want to Video call with me?
                  </h2>
                </div>

                <div>
                  <span class="text-[#141416]"
                    ><span class="text-[32px] font-semibold">$25</span>
                  </span>
                </div>
                <div class="w-full">
                  <button
                    class="flex w-full text-center justify-center items-center border font-semibold px-[48px] gap-2 py-[13px] rounded-[12px]"
                    style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
                  >
                    <PencilSquareIcon class="w-6 h-6" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import {
  ArrowTrendingUpIcon,
  ChartPieIcon,
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  SparklesIcon,
} from "@heroicons/vue/24/outline";
import {
  LockClosedIcon,
  PhotoIcon,
  PuzzlePieceIcon,
  Squares2X2Icon,
  VideoCameraIcon,
} from "@heroicons/vue/24/solid";
import AppLayout from "~/layouts/AppLayout.vue";

import { ref } from "vue";

const selectedTab = ref("Free Posts");

const changeTab = (tab) => {
  selectedTab.value = tab;
};
</script>
