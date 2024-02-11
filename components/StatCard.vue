<template>
  <div
    class="flex-1 font-inter px-4 border bg-white w-full border-[#E4E7EC] rounded-[8px] py-5 sm:p-6"
    style="
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06);
      box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
    "
  >
    <dt class="text-base uppercase text-[14px] font-normal text-[#667085]">
      {{ item.name }}
    </dt>
    <dd class="flex items-baseline justify-between mt-1 md:block lg:flex">
      <div class="flex items-baseline text-[24px] font-semibold text-[#1A1A1A]">
        {{ item.stat }}
      </div>

      <div
        :class="[
          item.changeType === 'increase'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800',
          'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
        ]"
      >
        <ArrowUpIcon
          v-if="item.changeType === 'increase'"
          class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
          aria-hidden="true"
        />
        <ArrowDownIcon
          v-else
          class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
          aria-hidden="true"
        />
        <span class="sr-only">
          {{ item.changeType === "increase" ? "Increased" : "Decreased" }}
          by
        </span>
        {{ item.change }}
      </div>
    </dd>
  </div>
</template>

<script setup>
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/vue/24/outline";
import { defineProps } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
