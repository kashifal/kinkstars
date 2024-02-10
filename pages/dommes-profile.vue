<template>
  <AppLayout>
    <div class="bg-white">
      <div class="px-4 pt-10 pb-4 mx-auto space-y-8 max-w-7xl">
        <div class="flex flex-col items-center justify-center gap-6">
          <div class="relative border rounded-full border-primary">
            <img
              class="object-cover w-[150px] h-[150px] border-[3px] rounded-full border-red-500"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="model avatar"
            />
            <button
              class="absolute -bottom-2 text-white left-[40px] px-[16px] py-[6px] rounded-full bg-[#DC3545]"
            >
              • Live
            </button>
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
          <div class="flex items-center justify-center gap-4">
            <button
              class="px-[24px] flex items-center gap-2 py-[13px] rounded-[12px] bg-primary text-white font-semibold"
            >
              <PlusIcon class="w-6 h-6" />
              Follow
            </button>
            <div>
              <button
                class="flex items-center border font-semibold px-[24px] gap-2 py-[13px] rounded-[12px]"
                style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
              >
                <CurrencyDollarIcon class="w-6 h-6" />
                Give a Tip
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end py-2 md:justify-between">
          <div class="flex-wrap items-center hidden gap-4 md:flex">
            <button
              class="flex items-center gap-2 rounded-full bg-[#E6E8EC] font-semibold px-[24px] py-[10px] text-[#23262F] hover:bg-gray-300"
            >
              <Squares2X2Icon class="w-5 h-5" />
              Free Posts
            </button>
            <button
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
            <FilterBar />
            <div class="space-y-6">
              <Post
                v-for="post in posts"
                :key="post.id"
                :user="post.user"
                :location="post.location"
                :content="post.content"
                :likes="post.likes"
                :comments="post.comments"
                :date="post.date"
                :img="post.img"
                :sendTipButton="false"
              />
            </div>
          </div>
          <div class="col-span-1 space-y-4 md:col-span-2">
            <SubscribeCard />
            <CallMeCard />
            <RecommendedModels />
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import {
  LockClosedIcon,
  PhotoIcon,
  PuzzlePieceIcon,
  Squares2X2Icon,
  VideoCameraIcon,
} from "@heroicons/vue/24/solid";
import AppLayout from "~/layouts/AppLayout.vue";
const posts = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Sofia Guirno",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "20 hours ago",
    },
    content: `It's never too late to start something new. Start easy. Consuming the
        minds and souls of men. Whether you’re a complete beginner or you want
        to step up your routine, get the full studio experience at home with
        thousands of classes for body, mind, and spirit.`,
    img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    likes: 10,
    comments: 5,
    location: "Tokyo, Japan",
  },
  {
    id: 1,
    user: {
      id: 1,
      name: "Sofia Guirno",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "20 hours ago",
    },
    content: `It's never too late to start something new. Start easy. Consuming the
        minds and souls of men. Whether you’re a complete beginner or you want
        to step up your routine, get the full studio experience at home with
        thousands of classes for body, mind, and spirit.`,
    img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    likes: 10,
    comments: 5,
    location: "Tokyo, Japan",
  },
];
</script>
