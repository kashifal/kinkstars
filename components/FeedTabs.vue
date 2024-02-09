<template>
  <div class="flex items-center gap-4 py-4">
    <button
      :class="{
        'text-[#777E90]': selectedTab === 'popular',
        'text-[#23262F]': selectedTab === 'popular',
        'bg-[#E6E8EC]': selectedTab === 'popular',
        'text-[#495057]': selectedTab !== 'popular',
      }"
      @click="selectTab('popular')"
      class="px-[24px] font-semibold py-[12px] rounded-full"
    >
      Popular
    </button>
    <button
      :class="{
        'text-[#777E90]': selectedTab === 'newest',
        'text-[#23262F]': selectedTab === 'newest',
        'bg-[#E6E8EC]': selectedTab === 'newest',
        'text-[#495057]': selectedTab !== 'newest',
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
