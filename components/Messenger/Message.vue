<template>
  <div
    class="flex items-center justify-between p-4 cursor-pointer font-inter hover:bg-gray-100"
  >
    <div class="flex items-center gap-4">
      <img
        class="object-cover w-10 h-10 rounded-full"
        :src="userAvatar"
        alt="user avatar"
      />
      <div>
        <h2 class="text-[14px] font-semibold text-[#11142D]">{{ userName }}</h2>
        <p class="text-graySuper text-[12px]">{{ message }}</p>
      </div>
    </div>
    <div>
      <div>
        <div class="flex flex-col items-end gap-2">
          <div
            v-if="unreadMessages > 0"
            class="flex items-cennter justify-center min-w-[20px] p-[2px] h-[20px] text-xs text-white bg-red-600 rounded-full"
          >
            {{
              unreadMessages > 0
                ? unreadMessages > 9
                  ? "9+"
                  : unreadMessages
                : ""
            }}
          </div>
          <div class="text-[12px] text-graySuper">{{ time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  userAvatar: String,
  userName: String,
  message: String,
  unreadMessages: Number,
  time: String,
});
</script>
