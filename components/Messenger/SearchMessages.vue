<template>
  <div
    class="sticky top-0 p-4 bg-white border-b border-[#E4E7EC] flex items-center gap-2"
  >
    <div class="flex-1">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <MagnifyingGlassIcon
            class="w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          class="block w-full rounded-[12px] bg-[#F7F7F8] py-[16px] pl-10 outline-none pr-3 text-gray-900 border border-[#E4E7EC]"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
    <div>
      <button
        class="p-[16px] border rounded-[12px] border-[#E4E7EC] bg-[#F7F7F8]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.748 18.4428H19.0006"
            stroke="#11142D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.78 1.79479C11.5557 0.867787 12.95 0.731856 13.8962 1.49173C13.9485 1.53296 15.6295 2.83879 15.6295 2.83879C16.669 3.46719 16.992 4.80311 16.3494 5.82259C16.3153 5.87718 6.81195 17.7645 6.81195 17.7645C6.49578 18.1589 6.01583 18.3918 5.50291 18.3973L1.86353 18.443L1.04353 14.9723C0.928662 14.4843 1.04353 13.9718 1.3597 13.5773L10.78 1.79479Z"
            stroke="#11142D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.02148 4.00098L14.4737 8.1881"
            stroke="#11142D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>
