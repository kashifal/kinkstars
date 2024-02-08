<template>
  <div>
    <div class="flex flex-col items-center gap-4">
      <div>
        <h2 class="text-[48px] font-semibold text-center">Video clips</h2>
      </div>
      <div>
        <p class="text-[18px] text-[#6B7280]">
          the latest store product we have from our best influencers
        </p>
      </div>
      <div class="flex items-center gap-4 py-4">
        <div class="flex items-center gap-10">
          <button
            class="text-black font-semibold px-4 py-2 rounded-full bg-[#E6E8EC]"
          >
            Popular
          </button>
          <button class="text-[#6B7280] py-2 rounded-full">Newest</button>
          <button class="text-[#6B7280] py-2 rounded-full">Title</button>
        </div>
      </div>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2"
      >
        <Clip />
        <Clip />
        <Clip />
        <Clip />
        <Clip />
        <Clip />
        <Clip />
        <Clip />
      </div>
      <div class="flex items-center justify-center py-4">
        <button
          class="text-black font-semibold px-6 py-3 rounded-full bg-[#E6E8EC] hover:bg-[#D1D5DB] transition-all duration-300 ease-in-out"
        >
          Show more
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
