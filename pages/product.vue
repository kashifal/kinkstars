<template>
  <AppLayout>
    <div class="relative">
      <Breadcrumb :breadLinks="breadLinks" />

      <Splide
        ref="splide"
        class="splide max-w-7xl mx-auto px-4 py-16"
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
            <p class="font-normal text-sm text-[#6B7280]">Selena Guirno</p>
            <h1 class="text-[32px] font-semibold">
              T-shirt Product bu Selena Augnant
            </h1>
            <p class="text-[#95909E] text-[14px]">
              Silver leather glitter lace-up shoes from Giuseppe Zanotti Design
              featuring a pointed toe, a brand embossed insole and a flat heel.
            </p>

            <!-- Price -->
            <div class="text-[24px] mt-12 font-bold">
              <h1>$430,00</h1>
            </div>

            <!-- Colors Radio -->
            <RadioGroup class="my-8" v-model="selectedColor">
              <RadioGroupLabel
                class="block text-[12px] font-medium leading-6 text-[#3D3D3D]"
                >COLOUR</RadioGroupLabel
              >
              <div class="mt-2 flex items-center space-x-3">
                <RadioGroupOption
                  as="template"
                  v-for="color in colors"
                  :key="color.name"
                  :value="color"
                  v-slot="{ active, checked }"
                >
                  <div
                    :class="[
                      color.selectedColor,
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring-2' : '',
                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                    ]"
                  >
                    <RadioGroupLabel as="span" class="sr-only">{{
                      color.name
                    }}</RadioGroupLabel>
                    <span
                      aria-hidden="true"
                      :class="[
                        color.bgColor,
                        'h-8 w-8 rounded-full border border-black border-opacity-10',
                      ]"
                    />
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>

            <!-- Sizes -->
            <div>
              <div class="flex items-center justify-between">
                <h2
                  class="block text-[12px] font-medium leading-6 text-[#3D3D3D]"
                >
                  UK SIZES
                </h2>
              </div>

              <RadioGroup v-model="mem" class="mt-2">
                <RadioGroupLabel class="sr-only"
                  >Choose a memory option</RadioGroupLabel
                >
                <div
                  class="grid grid-cols-7 sm:grid-cols-12 gap-3 lg:grid-cols-9 lg:grid-cols-12"
                >
                  <RadioGroupOption
                    as="template"
                    v-for="option in memoryOptions"
                    :key="option.name"
                    :value="option"
                    :disabled="!option.inStock"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        option.inStock
                          ? 'cursor-pointer focus:outline-none'
                          : 'cursor-not-allowed opacity-25',
                        active ? 'ring-2 ring-[#FDC157] ring-offset-2' : '',
                        checked
                          ? 'bg-[#FDC157] text-white hover:bg-[#FDC157]'
                          : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                        'flex items-center justify-center rounded-full h-10 w-10  text-sm font-semibold uppercase sm:flex-1',
                      ]"
                    >
                      <RadioGroupLabel as="span">{{
                        option.name
                      }}</RadioGroupLabel>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <!-- Buttons -->
            <div class="my-8 flex flex-wrap items-center gap-4">
              <button
                class="px-10 mx-auto sm:mx-0 whitespace-nowrap py-2 bg-black rounded-lg border-2 border-black text-white font-bold"
              >
                Buy Now
              </button>

              <button
                class="md:px-10 px-10 mx-auto sm:mx-0 whitespace-nowrap py-2 flex items-center border-2 transition-all group hover:text-white hover:bg-black hover:border-black border-[#E4E7EC] gap-2 bg-white rounded-lg text-black font-bold"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_34_54832)">
                    <path
                      d="M12.0004 21.9999L2.80843 12.8079C0.62843 10.2399 0.74243 6.3879 3.16143 3.9679C4.32144 2.80791 5.87717 2.12945 7.51654 2.06861C9.1559 2.00778 10.7576 2.56908 12.0004 3.6399C13.242 2.56908 14.8423 2.00699 16.4808 2.06627C18.1192 2.12554 19.6748 2.80181 20.8357 3.95956C21.9966 5.1173 22.6771 6.67099 22.7408 8.30929C22.8046 9.94758 22.2469 11.5494 21.1794 12.7939L12.0004 21.9999ZM19.6624 11.4909C20.4013 10.6293 20.7872 9.52034 20.743 8.3862C20.6988 7.25206 20.2276 6.17653 19.4239 5.3751C18.6202 4.57367 17.5433 4.10555 16.4091 4.06453C15.2748 4.02351 14.1669 4.41262 13.3074 5.1539L12.0004 6.2819L10.6934 5.1539C9.83393 4.41262 8.72607 4.02351 7.59181 4.06453C6.45755 4.10555 5.38068 4.57367 4.57698 5.3751C3.77328 6.17653 3.3021 7.25206 3.25786 8.3862C3.21363 9.52034 3.59959 10.6293 4.33843 11.4909L4.45243 11.6229L12.0004 19.1719L19.5484 11.6229L19.6624 11.4909Z"
                      fill="currentcolor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_54832">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                Like
              </button>
            </div>

            <!-- Arrows -->
            <div
              class="w-full flex items-center justify-between gap-4 bottom-0 right-0"
            >
              <button @click="slideToPrev" class="flex items-center gap-3">
                <ArrowLeftIcon class="w-5 h-5" />
                <span>Previous items</span>
              </button>
              <button @click="slideToNext" class="flex items-center gap-3">
                <span>Next items</span>
                <ArrowRightIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <div class="mx-auto max-w-7xl px-4">
      <!-- Tabs -->
      <ProductPageTabs />
      <div class="px-4 py-10 mx-auto max-w-7xl">
        <ProductPageProducts />
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
    link: "/home",
    current: false,
  },
  {
    name: "Store",
    link: "/store",
    current: false,
  },
  {
    name: "T-shirt Product bu Selena Augnant",
    link: "/product",
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
