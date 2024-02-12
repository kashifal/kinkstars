<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex items-center justify-center min-h-full p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                <div class="flex items-center justify-between py-3">
                  <h2
                    class="text-[#141416] text-[24px] font-inter font-semibold"
                  >
                    Start A Stream
                  </h2>
                  <button>
                    <XCircleIcon
                      class="w-6 h-6 text-[#141416]"
                      @click="closeModal"
                    />
                  </button>
                </div>
              </DialogTitle>
              <form>
                <div class="py-4 mt-4 space-y-4 border-y">
                  <div class="flex flex-col gap-2">
                    <label for="description" class="text-[#141416] font-sans"
                      >Stream Description</label
                    >
                    <textarea
                      defaultValue="I am going to start a live stream in 30 minutes. Join me and let's have some fun together."
                      class="h-36 p-4 resize-none rounded-[16px] bg-[#FBFBFB] outline-none"
                      placeholder="Write description..."
                    >
                    </textarea>
                  </div>
                  <div class="flex flex-col gap-2">
                    <label for="description" class="text-[#141416] font-sans"
                      >Price rate per minute</label
                    >
                    <input
                      type="text"
                      class="px-4 py-2 rounded-[16px] bg-[#FBFBFB] outline-none"
                      defaultValue="$ 3"
                      placeholder="Write description..."
                    />
                  </div>
                </div>
              </form>
              <div class="mt-4">
                <div
                  class="flex items-center justify-between w-full px-4 py-2 rounded-[12px] cursor-pointer hover:bg-gray-100 hover:gray-100"
                >
                  <div class="flex items-center gap-4 font-semibold font-inter">
                    <LockClosedIcon class="w-5 h-5 text-[#141416]" />
                    <span>Visible to Everyone</span>
                  </div>
                  <button>
                    <ChevronRightIcon class="w-5 h-5 text-[#141416]" />
                  </button>
                </div>
                <div
                  class="flex items-center justify-between w-full px-4 py-2 rounded-[12px] cursor-pointer hover:bg-gray-100 hover:gray-100"
                >
                  <div class="flex items-center gap-4 font-semibold font-inter">
                    <ChatBubbleLeftEllipsisIcon
                      class="w-5 h-5 text-[#141416]"
                    />
                    <span>Allow Comments</span>
                  </div>
                  <Switch
                    v-model="allowComments"
                    :class="allowComments ? 'bg-primary' : 'bg-gray-200'"
                    class="relative inline-flex h-[30px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    <span class="sr-only">Allow comments</span>
                    <span
                      aria-hidden="true"
                      :class="
                        allowComments ? 'translate-x-[20px]' : 'translate-x-0'
                      "
                      class="pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                    />
                  </Switch>
                </div>
                <div
                  class="flex items-center justify-between w-full px-4 py-2 rounded-[12px] cursor-pointer hover:bg-gray-100 hover:gray-100"
                >
                  <div class="flex items-center gap-4 font-semibold font-inter">
                    <LockClosedIcon class="w-5 h-5 text-[#141416]" />
                    <span>Allow others to join</span>
                  </div>
                  <Switch
                    v-model="allowOthersToJoin"
                    :class="allowOthersToJoin ? 'bg-primary' : 'bg-gray-200'"
                    class="relative inline-flex h-[30px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    <span class="sr-only">Allow others to join</span>
                    <span
                      aria-hidden="true"
                      :class="
                        allowOthersToJoin
                          ? 'translate-x-[20px]'
                          : 'translate-x-0'
                      "
                      class="pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                    />
                  </Switch>
                </div>
              </div>
              <div class="flex items-center justify-end mt-4">
                <button
                  class="py-3 px-[48px] font-semibold text-white bg-primary rounded-[12px]"
                >
                  Start Stream
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import {
  ChatBubbleLeftEllipsisIcon,
  ChevronRightIcon,
  LockClosedIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";
import { Switch } from "@headlessui/vue";

const allowComments = ref(false);
const allowOthersToJoin = ref(false);

const isOpen = ref(true);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
