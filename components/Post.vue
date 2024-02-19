<template>
  <div
    class="md:px-6 px-2 space-y-4 py-4 bg-white rounded-[16px]"
    style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075)"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <a href="/dommes-profile">
          <img class="w-16 h-16 rounded-full" :src="user.avatar" alt="" />
        </a>
        <div>
          <h2 class="text-lx font-semibold text-gray700">
            {{ user.name }}
          </h2>
          <p class="text-paragraph text-[14px]">
            {{ location }} • {{ user.date }}
          </p>
        </div>
      </div>
      <div>
        <button class="p-2 rounded-[12px] hover:bg-gray-100">
          <EllipsisHorizontalIcon class="w-6 h-6 text-paragraph" />
        </button>
      </div>
    </div>
    <div>
      <p class="text-gray700 md:text-base text-[12px]">
        {{ content }}
      </p>
    </div>
    <div>
      <img
        v-if="img"
        class="w-full h-[400px] md:h-[600px] object-cover rounded-[12px] md:rounded-[0px]"
        :src="img"
        alt="post-img"
      />
    </div>
    <div class="flex flex-wrap items-center justify-between gap-4 md:gap-0">
      <div class="flex items-center justify-center gap-8 p-2">
        <button class="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_536_25900)">
              <path
                d="M12.1668 6.66675H17.5002C17.9422 6.66675 18.3661 6.84234 18.6787 7.1549C18.9912 7.46746 19.1668 7.89139 19.1668 8.33342V10.0867C19.1671 10.3045 19.1246 10.5203 19.0418 10.7217L16.4627 16.9842C16.3997 17.1369 16.2929 17.2675 16.1556 17.3593C16.0184 17.4512 15.857 17.5002 15.6918 17.5001H1.66683C1.44582 17.5001 1.23385 17.4123 1.07757 17.256C0.921293 17.0997 0.833496 16.8878 0.833496 16.6667V8.33342C0.833496 8.1124 0.921293 7.90044 1.07757 7.74416C1.23385 7.58788 1.44582 7.50008 1.66683 7.50008H4.5685C4.70191 7.50012 4.83338 7.46812 4.95186 7.40678C5.07033 7.34544 5.17235 7.25655 5.24933 7.14758L9.7935 0.708416C9.85094 0.62701 9.93565 0.568883 10.0323 0.544574C10.1289 0.520266 10.231 0.531385 10.3202 0.575916L11.8318 1.33175C12.2572 1.54438 12.5971 1.89618 12.7949 2.32868C12.9928 2.76118 13.0367 3.24835 12.9193 3.70925L12.1668 6.66675ZM5.8335 8.82342V15.8334H15.1335L17.5002 10.0867V8.33342H12.1668C11.913 8.33338 11.6625 8.27536 11.4345 8.1638C11.2065 8.05223 11.007 7.89006 10.8512 7.68965C10.6954 7.48925 10.5875 7.25591 10.5356 7.00744C10.4837 6.75896 10.4893 6.50192 10.5518 6.25592L11.3043 3.29925C11.3279 3.20702 11.3191 3.10951 11.2796 3.02294C11.24 2.93637 11.172 2.86596 11.0868 2.82342L10.536 2.54842L6.611 8.10841C6.40266 8.40341 6.136 8.64508 5.8335 8.82342ZM4.16683 9.16675H2.50016V15.8334H4.16683V9.16675Z"
                fill="#6B7280"
              />
            </g>
            <defs>
              <clipPath id="clip0_536_25900">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>{{ comments }}</span>
        </button>
        <button class="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2825 10.3442H13.29"
              stroke="#707281"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.94173 10.3442H9.94923"
              stroke="#707281"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.60091 10.3442H6.60841"
              stroke="#707281"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8924 15.8916C13.3465 18.4387 9.5745 18.989 6.48843 17.5618C6.03284 17.3783 3.08412 18.195 2.44429 17.5559C1.80446 16.916 2.62183 13.9669 2.43843 13.5112C1.01054 10.4256 1.5616 6.65225 4.10834 4.106C7.35939 0.853665 12.6413 0.853665 15.8924 4.106C19.1501 7.36336 19.1434 12.6401 15.8924 15.8916Z"
              stroke="#707281"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ likes }}</span>
        </button>
        <button class="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8336 5.875V3.33333C10.8336 3.11232 10.9214 2.90036 11.0777 2.74408C11.2339 2.5878 11.4459 2.5 11.6669 2.5C11.8855 2.50092 12.095 2.58771 12.2502 2.74167L18.0836 8.575C18.1617 8.65247 18.2237 8.74464 18.266 8.84619C18.3083 8.94774 18.3301 9.05666 18.3301 9.16667C18.3301 9.27668 18.3083 9.3856 18.266 9.48715C18.2237 9.5887 18.1617 9.68086 18.0836 9.75833L12.2502 15.5917C12.1333 15.7063 11.9851 15.784 11.8242 15.8149C11.6633 15.8458 11.4969 15.8286 11.3458 15.7655C11.1946 15.7024 11.0654 15.5961 10.9743 15.4599C10.8832 15.3238 10.8343 15.1638 10.8336 15V12.4167H10.1252C8.80865 12.397 7.50354 12.6641 6.30052 13.1995C5.0975 13.7348 4.02538 14.5255 3.15858 15.5167C3.05412 15.6557 2.90876 15.7586 2.74288 15.8109C2.577 15.8632 2.39892 15.8623 2.23358 15.8083C2.06532 15.7516 1.91961 15.6425 1.81767 15.4971C1.71574 15.3517 1.66292 15.1775 1.66691 15C1.66691 7.4 8.40025 6.1 10.8336 5.875ZM10.1252 10.7333C10.6826 10.7316 11.2395 10.7678 11.7919 10.8417C11.9892 10.8716 12.1692 10.9713 12.2992 11.1227C12.4292 11.2741 12.5005 11.4671 12.5002 11.6667V12.9917L16.3169 9.16667L12.5002 5.34167V6.66667C12.5002 6.88768 12.4124 7.09964 12.2562 7.25592C12.0999 7.4122 11.8879 7.5 11.6669 7.5C10.9086 7.5 4.90858 7.66667 3.60858 12.8583C5.4955 11.4671 7.78094 10.7219 10.1252 10.7333Z"
              fill="#707281"
            />
          </svg>
          <span>Share</span>
        </button>
      </div>
      <div v-show="sendTipButton">
        <button class="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_536_25921)">
              <path
                d="M9.99984 18.3334C5.39734 18.3334 1.6665 14.6026 1.6665 10.0001C1.6665 5.39758 5.39734 1.66675 9.99984 1.66675C14.6023 1.66675 18.3332 5.39758 18.3332 10.0001C18.3332 14.6026 14.6023 18.3334 9.99984 18.3334ZM9.99984 16.6667C11.7679 16.6667 13.4636 15.9644 14.7139 14.7141C15.9641 13.4639 16.6665 11.7682 16.6665 10.0001C16.6665 8.23197 15.9641 6.53628 14.7139 5.28604C13.4636 4.03579 11.7679 3.33341 9.99984 3.33341C8.23173 3.33341 6.53604 4.03579 5.28579 5.28604C4.03555 6.53628 3.33317 8.23197 3.33317 10.0001C3.33317 11.7682 4.03555 13.4639 5.28579 14.7141C6.53604 15.9644 8.23173 16.6667 9.99984 16.6667ZM7.08317 11.6667H11.6665C11.777 11.6667 11.883 11.6229 11.9611 11.5447C12.0393 11.4666 12.0832 11.3606 12.0832 11.2501C12.0832 11.1396 12.0393 11.0336 11.9611 10.9555C11.883 10.8773 11.777 10.8334 11.6665 10.8334H8.33317C7.78064 10.8334 7.25073 10.6139 6.86003 10.2232C6.46933 9.83252 6.24984 9.30262 6.24984 8.75008C6.24984 8.19755 6.46933 7.66764 6.86003 7.27694C7.25073 6.88624 7.78064 6.66675 8.33317 6.66675H9.1665V5.00008H10.8332V6.66675H12.9165V8.33342H8.33317C8.22266 8.33342 8.11668 8.37731 8.03854 8.45545C7.9604 8.53359 7.9165 8.63958 7.9165 8.75008C7.9165 8.86059 7.9604 8.96657 8.03854 9.04471C8.11668 9.12285 8.22266 9.16675 8.33317 9.16675H11.6665C12.219 9.16675 12.7489 9.38624 13.1396 9.77694C13.5303 10.1676 13.7498 10.6975 13.7498 11.2501C13.7498 11.8026 13.5303 12.3325 13.1396 12.7232C12.7489 13.1139 12.219 13.3334 11.6665 13.3334H10.8332V15.0001H9.1665V13.3334H7.08317V11.6667Z"
                fill="#6B7280"
              />
            </g>
            <defs>
              <clipPath id="clip0_536_25921">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Send Tip</span>
        </button>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div>
        <img
          class="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="user-img"
        />
      </div>
      <div class="relative flex-1">
        <input
          type="text"
          class="w-full bg-primaryBg outline-none focus:ring-2 ring-primary px-[16px] py-[12px] rounded-[12px]"
          placeholder="Your comment..."
        />
        <button class="absolute right-4 top-[14px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.828 12.828C12.0779 13.5779 11.0607 13.9991 10 13.9991C8.93934 13.9991 7.92211 13.5779 7.172 12.828M7 8H7.01M13 8H13.01M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
              stroke="#374151"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/solid";

import { defineProps } from "vue";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  comments: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  sendTipButton: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>
