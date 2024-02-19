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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  { name: "Item Overview", href: "#", current: true },
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
