<template>
  <AppLayout>
    <div class="relative">
      <Breadcrumb :breadLinks="breadLinks" />
      <Splide
        ref="splide"
        class="splide max-w-7xl mx-auto px-4 py-32"
        :options="{
          rewind: true,
          perPage: 1,
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
              perPage: 1,
            },
            1024: {
              perPage: 1,
            },
            1440: {
              perPage: 1,
            },
          },
        }"
        aria-label="Latest Clips"
      >
        <SplideSlide
          v-for="item in prod"
          :key="item"
          class="w-full grid md:grid-cols-2 gap-10"
        >
          <!-- Splide here -->
          <div class="">
            <div class=" ">
              <div
                class="lg:grid lg:grid-cols-1 lg:items-start overflow-y-hidden lg:gap-x-8"
              >
                <!-- Image gallery -->
                <TabGroup as="div" class="flex flex-col-reverse md:flex-row">
                  <!-- Image selector -->
                  <div
                    class="mx-auto overflow-y-auto md:h-[450px] overflow-x-auto md:max-w-xs w-full md:w-32 block lg:max-w-none"
                  >
                    <TabList
                      class="flex flex-wrap md:grid gap-6 px-1 md:overflow-y-auto py-2"
                    >
                      <Tab
                        v-for="image in product.images"
                        :key="image.id"
                        class="relative flex w-24 md:w-full h-24 cursor-pointer items-center justify-center bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-transparent focus:ring-offset-4"
                        v-slot="{ selected }"
                      >
                        <span class="sr-only">{{ image.name }}</span>

                        <span
                          class="absolute inset-0 overflow-hidden rounded-md"
                        >
                          <img
                            :src="image.src"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          :class="[
                            selected
                              ? 'ring-primary bg-primary/20'
                              : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                          ]"
                          aria-hidden="true"
                        />
                      </Tab>
                    </TabList>
                  </div>

                  <TabPanels class="aspect-h-1 aspect-w-1 w-full">
                    <TabPanel v-for="image in product.images" :key="image.id">
                      <img
                        :src="image.src"
                        :alt="image.alt"
                        class="h-full w-full object-cover object-center sm:rounded-lg"
                      />
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </div>
            </div>
          </div>
          <!-- Product Info here -->
          <div class="">
            <h1 class="text-[32px] font-semibold">Auction Thing 1</h1>

            <!-- Time -->
            <div
              class="px-6 my-6 items-center gap-6 py-2 bg-[#E6E8EC] rounded-[12px] inline-flex"
            >
              <div class="flex items-center flex-col">
                <h1 class="text-[18px] font-semibold">32</h1>
                <h1 class="text-[14px] text-[#6B7280] font-semibold">Days</h1>
              </div>
              <span>:</span>
              <div class="flex items-center flex-col">
                <h1 class="text-[18px] font-semibold">10</h1>
                <h1 class="text-[14px] text-[#6B7280] font-semibold">Hours</h1>
              </div>
              <span>:</span>
              <div class="flex items-center flex-col">
                <h1 class="text-[18px] font-semibold">10</h1>
                <h1 class="text-[14px] text-[#6B7280] font-semibold">
                  Minutes
                </h1>
              </div>
            </div>

            <!-- Address -->
            <div class="flex flex-col my-6 border-b pb-6 space-y-3">
              <h1 class="text-[#6B7280] text-[16px] font-normal">
                Bargain Hunt Auctions
              </h1>

              <div class="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_34_52603)">
                    <path
                      d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 9V5H17V7H15V5H9V7H7V5H4V9H20ZM20 11H4V19H20V11ZM6 13H11V17H6V13Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_52603">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[16px] font-medium">September 8, 2022</p>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 17.938C8.98271 17.6813 7.13885 16.6661 5.84319 15.0988C4.54752 13.5314 3.89728 11.5295 4.02462 9.49997C4.15196 7.47041 5.04733 5.56549 6.52874 4.17238C8.01016 2.77927 9.96645 2.00252 12 2C14.036 1.99849 15.9961 2.77334 17.4807 4.16668C18.9653 5.56002 19.8628 7.467 19.9903 9.49904C20.1178 11.5311 19.4657 13.5353 18.1669 15.1033C16.868 16.6712 15.0203 17.685 13 17.938V20.012C16.946 20.104 20 20.735 20 21.5C20 22.328 16.418 23 12 23C7.582 23 4 22.328 4 21.5C4 20.735 7.054 20.104 11 20.012V17.938ZM12 16C13.5913 16 15.1174 15.3679 16.2426 14.2426C17.3679 13.1174 18 11.5913 18 10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10C6 11.5913 6.63214 13.1174 7.75736 14.2426C8.88258 15.3679 10.4087 16 12 16ZM12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2107 11.0391 10 10.5304 10 10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21072 11.4696 8 12 8C12.5304 8 13.0391 8.21072 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z"
                    fill="black"
                  />
                </svg>

                <p class="text-[16px] font-medium">Thornleigh, Australia</p>
              </div>
            </div>

            <!-- Buttons -->
            <div class="my-8">
              <h1 class="text-[16px] font-semibold">Place a bid</h1>
              <div
                class="flex flex-wrap mt-2 items-start sm:items-center gap-4"
              >
                <input
                  placeholder="$50"
                  class="px-2 sm:max-w-sm sm:w-full sm:mx-0 whitespace-nowrap py-2 bg-white rounded-xl border-2 border-[#6B7280] text-black font-normal"
                />

                <button
                  class="md:px-6 px-6 sm:mx-0 whitespace-nowrap py-2 flex items-center border-2 transition-all group hover:text-white hover:bg-black hover:border-black border-black gap-2 bg-black rounded-lg text-white font-bold"
                >
                  Place a bid
                </button>
              </div>
              <a class="flex my-3 items-center gap-2" href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 6.66659H13.3333C13.5101 6.66659 13.6797 6.73682 13.8047 6.86185C13.9298 6.98687 14 7.15644 14 7.33325V13.9999C14 14.1767 13.9298 14.3463 13.8047 14.4713C13.6797 14.5963 13.5101 14.6666 13.3333 14.6666H2.66667C2.48986 14.6666 2.32029 14.5963 2.19526 14.4713C2.07024 14.3463 2 14.1767 2 13.9999V7.33325C2 7.15644 2.07024 6.98687 2.19526 6.86185C2.32029 6.73682 2.48986 6.66659 2.66667 6.66659H3.33333V5.99992C3.33333 5.38708 3.45404 4.78025 3.68856 4.21406C3.92308 3.64788 4.26683 3.13343 4.70017 2.70009C5.13351 2.26675 5.64796 1.923 6.21414 1.68848C6.78033 1.45396 7.38716 1.33325 8 1.33325C8.61284 1.33325 9.21967 1.45396 9.78586 1.68848C10.352 1.923 10.8665 2.26675 11.2998 2.70009C11.7332 3.13343 12.0769 3.64788 12.3114 4.21406C12.546 4.78025 12.6667 5.38708 12.6667 5.99992V6.66659ZM11.3333 6.66659V5.99992C11.3333 5.11586 10.9821 4.26802 10.357 3.6429C9.7319 3.01777 8.88406 2.66659 8 2.66659C7.11595 2.66659 6.2681 3.01777 5.64298 3.6429C5.01786 4.26802 4.66667 5.11586 4.66667 5.99992V6.66659H11.3333ZM7.33333 9.33325V11.9999H8.66667V9.33325H7.33333Z"
                    fill="black"
                  />
                </svg>

                <span class="text-[12px] font-normal">Secure bidding</span></a
              >
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <div class="mx-auto max-w-7xl px-4">
      <!-- Tabs -->
      <AuctionDetailPageTabs />
      <div class="px-4 py-10 mx-auto max-w-7xl">
        <AuctionDetailPageAuctions />
      </div>
    </div>
    <Footer />
  </AppLayout>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};
const breadLinks = [
  {
    name: "Home",
    link: "#",
    current: false,
  },
  {
    name: "Store",
    link: "#",
    current: false,
  },
  {
    name: "Auction Thing 1",
    link: "#",
    current: true,
  },
];
const colors = [
  { name: "Pink", bgColor: "bg-pink-500", selectedColor: "ring-pink-500" },
  {
    name: "Purple",
    bgColor: "bg-purple-500",
    selectedColor: "ring-purple-500",
  },
  { name: "Blue", bgColor: "bg-blue-500", selectedColor: "ring-blue-500" },
  { name: "Green", bgColor: "bg-green-500", selectedColor: "ring-green-500" },
  {
    name: "Yellow",
    bgColor: "bg-yellow-500",
    selectedColor: "ring-yellow-500",
  },
];

const memoryOptions = [
  { name: "38", inStock: true },
  { name: "39", inStock: true },
  { name: "40", inStock: true },
  { name: "41", inStock: true },
  { name: "42", inStock: true },
  { name: "46", inStock: false },
];

const mem = ref(memoryOptions[2]);

const selectedColor = ref(colors[1]);

import {
  LockClosedIcon,
  PhotoIcon,
  PuzzlePieceIcon,
  Squares2X2Icon,
  VideoCameraIcon,
} from "@heroicons/vue/24/solid";
import AppLayout from "~/layouts/AppLayout.vue";

const splide = ref(null);

const selectedTab = ref("Free Posts");

const changeTab = (tab) => {
  selectedTab.value = tab;
};
const slideToNext = () => {
  splide.value.splide.go("+");
};

const slideToPrev = () => {
  splide.value.splide.go("-");
};

const prod = [1, 2, 3, 4, 5];
</script>
