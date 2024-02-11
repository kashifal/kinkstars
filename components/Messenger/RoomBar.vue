<template>
  <div
    class="p-4 border-b bg-white sticky top-0 flex items-center justify-between border-[#E4E7EC]"
  >
    <div class="flex items-center gap-4">
      <img
        class="object-cover w-10 h-10 rounded-full"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        alt="user avatar"
      />
      <div>
        <h2 class="text-[14px] font-semibold text-[#11142D]">Tobias Ricky</h2>
        <p class="text-[#707281] text-[12px]">Online</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button class="p-2 rounded-[12px] hover:bg-gray-100">
        <PhoneIcon class="w-5 h-5" />
      </button>
      <button class="p-2 rounded-[12px] hover:bg-gray-100">
        <VideoCameraIcon class="w-5 h-5" />
      </button>
      <button class="p-2 rounded-[12px] hover:bg-gray-100">
        <EllipsisHorizontalIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { PhoneIcon, VideoCameraIcon } from "@heroicons/vue/24/solid";
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/outline";
</script>
