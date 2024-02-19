<template>
  <AppLayout>
    <div class="px-4 pt-10 pb-4 mx-auto space-y-8 max-w-7xl">
      <div class="flex items-center">
        <h2 class="text-xxl font-semibold">Messages</h2>
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div
          style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
          class="h-screen bg-white md:block hidden overflow-y-auto col-span-2 rounded-[16px] border border-borderSecondary"
        >
          <SearchMessages />
          <MessengerChats />
        </div>
        <div
          style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
          class="h-screen bg-white overflow-y-auto col-span-6 md:col-span-4 rounded-[16px] border border-borderSecondary"
        >
          <MessengerRoomBar />
          <MessengerRoom />
          <MessengerWriteMessage />
        </div>
      </div>
    </div>
    <div class="py-10"></div>
  </AppLayout>
  <Footer />
</template>
<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import Message from "~/components/Messenger/Message.vue";
import SearchMessages from "~/components/Messenger/SearchMessages.vue";
</script>
