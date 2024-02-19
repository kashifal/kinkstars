<template>
  <div class="flex items-center gap-4 py-4">
    <button
      :class="{
        'text-steal': selectedTab === 'popular',
        'text-darkest': selectedTab === 'popular',
        'bg-hoverBg': selectedTab === 'popular',
        'text-lightestPro': selectedTab !== 'popular',
      }"
      @click="selectTab('popular')"
      class="px-[24px] font-semibold py-[12px] rounded-full"
    >
      Popular
    </button>
    <button
      :class="{
        'text-steal': selectedTab === 'newest',
        'text-darkest': selectedTab === 'newest',
        'bg-hoverBg': selectedTab === 'newest',
        'text-lightestPro': selectedTab !== 'newest',
      }"
      @click="selectTab('newest')"
      class="px-[24px] font-semibold py-[12px] rounded-full"
    >
      Newest
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectedTab = ref("popular");

const selectTab = (tab) => {
  selectedTab.value = tab;
};
</script>
