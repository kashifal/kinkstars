<template>
  <div class="w-full overflow-auto">
    <div class="block py-8 sm:py-16 overflow-x-auto">
      <nav class="flex space-x-4" aria-label="Tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.name"
          @click="setActive(index)"
          :class="[
            activeTab === index
              ? 'bg-gray-200 text-gray-800'
              : 'text-gray-600 hover:text-gray-800',
            'rounded-full whitespace-nowrap px-6  hover:bg-gray-200 py-2 text-sm font-medium',
          ]"
          :aria-current="tab.current ? 'page' : undefined"
        >
          {{ tab.name }}
        </button>
      </nav>
    </div>

    <!-- Description -->
    <div class="">
      <h1 class="text-lx font-semibold text-black">Description</h1>
      <p class="text-paragraph text-sm py-4 font-normal">
        Consuming the minds and souls of men. Whether you’re a complete beginner
        or you want to step up your routine, get the full studio experience at
        home with thousands of classes for body, mind, and spirit. Consuming the
        minds and souls of men. Whether you’re a complete beginner or you want
        to step up your routine, get the full studio experience at home with
        thousands of classes for body, mind, and spirit. Consuming the minds and
        souls of men. Whether you’re a complete beginner or you want to step up
        your routine, get the full studio experience at home with thousands of
        classes for body, mind, and spirit.. Consuming the minds and souls of
        men. Wheth. Mix-and-match dozens of responsive elements to quickly
        configure your favorite landing page layouts.  Or hit the ground running
        with 10 pre-built templates, all in light or dark mode."
      </p>

      <div
        class="my-6 px-4 py-3.5 flex flex-wrap gap-8 bg-gray-100 rounded-sm items-center justify-between"
      >
        <div class="flex flex-row-reverse mx-auto sm:mx-0 items-center gap-4">
          <div class="">
            <h1 class="text-black sm:text-lx text-sm font-semibold">Karima</h1>
            <p class="text-paragraph sm:text-[14px] text-[10px]">
              Professional dominatrix
            </p>
          </div>
          <img
            class="h-14 shrink-0 w-14 rounded-full object-cover"
            src="https://picsum.photos/id/237/200/300"
            alt=""
          />
        </div>

        <button
          class="bg-white mx-auto sm:mx-0 font-bold text-sm px-6 py-2 flex items-center gap-2 rounded-xl border-2 border-borderSecondary"
        >
          <span>View Profile </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
              fill="#141416"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  { name: "Item Overview", href: "#", current: true },
  { name: "Size and Fit", href: "#", current: false },
  { name: "Payment and Shipping", href: "#", current: false },
  { name: "Terms", href: "#", current: false },
];
const activeTab = ref(0);

const setActive = (index) => {
  if (activeTab === index) {
    return;
  }
  activeTab.value = index;
};
</script>
