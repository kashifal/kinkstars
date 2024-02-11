<template>
  <div
    class="px-6 py-4 bg-white rounded-[16px]"
    style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075)"
  >
    <div class="flex items-start h-full gap-1">
      <div class="w-[10%] md:block hidden p-4">
        <img class="w-12 h-12 rounded-full" :src="model" alt="" />
      </div>
      <div class="flex-1 p-2 space-y-4">
        <textarea
          class="w-full h-36 resize-none placeholder:text-[#6B7280] focus:ring-2 outline-none px-4 py-4 focus:ring-primary rounded-[5px] bg-[#FBFBFB]"
          placeholder="Write something to post"
        ></textarea>
        <div class="flex flex-wrap items-center justify-between gap-4 md:gap-0">
          <div class="flex items-center gap-2">
            <button class="p-2 rounded-[12px] hover:bg-gray-100">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_28_64281)">
                  <path
                    d="M23 17V20H26V22H23V25H21V22H18V20H21V17H23ZM23.008 5C23.556 5 24 5.445 24 5.993V15H22V7H6V20.999L16 11L19 14V16.829L16 13.829L8.827 21H16V23H4.992C4.72881 22.9997 4.4765 22.895 4.29049 22.7088C4.10448 22.5226 4 22.2702 4 22.007V5.993C4.00183 5.73038 4.1069 5.47902 4.29251 5.29322C4.47813 5.10742 4.72938 5.00209 4.992 5H23.008ZM10 9C10.5304 9 11.0391 9.21071 11.4142 9.58579C11.7893 9.96086 12 10.4696 12 11C12 11.5304 11.7893 12.0391 11.4142 12.4142C11.0391 12.7893 10.5304 13 10 13C9.46957 13 8.96086 12.7893 8.58579 12.4142C8.21071 12.0391 8 11.5304 8 11C8 10.4696 8.21071 9.96086 8.58579 9.58579C8.96086 9.21071 9.46957 9 10 9Z"
                    fill="#495057"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_64281">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(2 2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button class="p-2 rounded-[12px] hover:bg-gray-100">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_28_64283)">
                  <path
                    d="M18 6C18.552 6 19 6.448 19 7V11.2L24.213 7.55C24.439 7.392 24.751 7.447 24.91 7.674C24.968 7.758 25 7.858 25 7.96V20.04C25 20.316 24.776 20.54 24.5 20.54C24.397 20.54 24.297 20.508 24.213 20.45L19 16.8V21C19 21.552 18.552 22 18 22H4C3.448 22 3 21.552 3 21V7C3 6.448 3.448 6 4 6H18ZM17 8H5V20H17V8ZM10 10H12V13H15V15H11.999L12 18H10L9.999 15H7V13H10V10ZM23 10.841L19 13.641V14.359L23 17.159V10.84V10.841Z"
                    fill="#495057"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_64283">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(2 2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button class="p-2 rounded-[12px] hover:bg-gray-100">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="4" fill="#F6F6F6" />
                <g clip-path="url(#clip0_28_64285)">
                  <path
                    d="M23 15.242V22H24V24H4V22H5V15.242C4.38437 14.8311 3.87971 14.2745 3.53082 13.6218C3.18193 12.969 2.99959 12.2402 3 11.5C3 10.673 3.224 9.876 3.633 9.197L6.345 4.5C6.43277 4.34798 6.559 4.22175 6.71101 4.13398C6.86303 4.04621 7.03547 4 7.211 4H20.79C20.9655 4 21.138 4.04621 21.29 4.13398C21.442 4.22175 21.5682 4.34798 21.656 4.5L24.358 9.182C24.9546 10.1729 25.1463 11.3555 24.8934 12.4841C24.6405 13.6127 23.9624 14.6005 23 15.242ZM21 15.972C20.3124 16.0491 19.6163 15.9665 18.9659 15.7307C18.3155 15.4948 17.7283 15.1119 17.25 14.612C16.8302 15.0511 16.3258 15.4005 15.7672 15.6393C15.2086 15.878 14.6075 16.001 14 16.001C13.3927 16.0013 12.7916 15.8786 12.233 15.6402C11.6745 15.4018 11.17 15.0527 10.75 14.614C10.2716 15.1138 9.68437 15.4964 9.03395 15.7321C8.38353 15.9678 7.68749 16.0503 7 15.973V22H21V15.973V15.972ZM7.789 6L5.356 10.213C5.11958 10.7971 5.11248 11.449 5.33613 12.0382C5.55978 12.6273 5.99768 13.1103 6.56218 13.3904C7.12668 13.6705 7.77614 13.7271 8.38058 13.5488C8.98502 13.3706 9.49984 12.9706 9.822 12.429C10.157 11.592 11.342 11.592 11.678 12.429C11.8633 12.8934 12.1836 13.2916 12.5975 13.5721C13.0115 13.8526 13.5 14.0025 14 14.0025C14.5 14.0025 14.9885 13.8526 15.4025 13.5721C15.8164 13.2916 16.1367 12.8934 16.322 12.429C16.657 11.592 17.842 11.592 18.178 12.429C18.3078 12.7484 18.5022 13.0376 18.7491 13.2783C18.996 13.519 19.2901 13.706 19.6127 13.8275C19.9354 13.9491 20.2797 14.0026 20.6241 13.9847C20.9684 13.9668 21.3053 13.8778 21.6136 13.7234C21.9219 13.569 22.1949 13.3525 22.4155 13.0875C22.6361 12.8225 22.7995 12.5148 22.8955 12.1836C22.9914 11.8524 23.0178 11.5049 22.973 11.1631C22.9281 10.8212 22.8131 10.4923 22.635 10.197L20.21 6H7.79H7.789Z"
                    fill="#495057"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_64285">
                    <rect
                      x="2"
                      y="2"
                      width="24"
                      height="24"
                      rx="3"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button class="p-2 rounded-[12px] hover:bg-gray-100">
              <ChartBarSquareIcon class="w-6 h-6" />
            </button>
          </div>
          <div class="flex flex-wrap items-center gap-4 font-semibold">
            <button
              class="px-[48px] w-full md:w-auto py-[12px] text-white bg-[#141416] rounded-[12px]"
            >
              Live Stream
            </button>
            <button
              class="px-[48px] w-full md:w-auto py-[12px] text-white bg-primary rounded-[12px]"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChartBarSquareIcon } from "@heroicons/vue/24/outline";
import model from "../assets/imgs/model.png";
</script>
