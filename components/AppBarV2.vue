<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-bgSecondary shadow-sm" v-slot="{ open }">
      <div class="px-12 sm:px-6 lg:px-16">
        <div class="flex justify-between w-full h-16">
          <div class="flex relative items-center gap-4">
            <div class="flex items-center flex-shrink-0">
              <NuxtLink to="/">
                <img
                  class="block w-auto h-8 lg:hidden"
                  :src="logo"
                  alt="Your Company"
                />
                <img
                  class="hidden w-auto h-8 lg:block"
                  :src="logo"
                  alt="Your Company"
                />
              </NuxtLink>
            </div>
            <div
              class="flex absolute left-36 w-[56px] items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end"
            >
              <div
                class="flex justify-center items-center hover:text-gray-200 text-white xl:hidden cursor-pointer pt-3"
                @click="showSearchBar"
              >
                <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
              </div>

              <div class="hidden w-full max-w-xl xl:block lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-gray-400 focus-within:text-gray-600">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <MagnifyingGlassIcon class="w-5 h-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    class="block w-56 border-0 outline-none rounded-full py-2 pl-10 pr-3 text-gray-100 bg-[#000000]"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="justify-center flex-1 hidden w-full sm:-my-px sm:ml-6 lg:flex sm:space-x-8"
          >
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :class="[
                item.current
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-200 hover:border-gray-300 hover:text-gray-300',
                'inline-flex flex-col gap-1 items-center border-b-2 px-1 pt-3 pb-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <span v-html="item.icon"> </span>
              <span>{{ item.name }}</span>
            </NuxtLink>
          </div>
          <div
            class="items-center justify-end hidden sm:ml-6 lg:flex sm:items-center"
          >
            <div class="flex items-center gap-4 px-4">
              <button
                type="button"
                class="relative p-1 text-gray-100 bg-bgSecondary rounded-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 14H14.25V8.77325C14.25 5.861 11.8995 3.5 9 3.5C6.1005 3.5 3.75 5.861 3.75 8.77325V14ZM9 2C12.7275 2 15.75 5.03225 15.75 8.77325V15.5H2.25V8.77325C2.25 5.03225 5.2725 2 9 2ZM7.125 16.25H10.875C10.875 16.7473 10.6775 17.2242 10.3258 17.5758C9.97419 17.9275 9.49728 18.125 9 18.125C8.50272 18.125 8.02581 17.9275 7.67417 17.5758C7.32254 17.2242 7.125 16.7473 7.125 16.25Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="relative p-1 text-gray-100 bg-bgSecondary rounded-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 7.24551C1.49961 6.65466 1.61576 6.06954 1.84183 5.52365C2.06789 4.97775 2.39941 4.48182 2.81741 4.06423C3.23541 3.64665 3.73168 3.31562 4.2778 3.09011C4.82392 2.86459 5.40915 2.74902 6 2.75001H12C14.4848 2.75001 16.5 4.77126 16.5 7.24551V16.25H6C3.51525 16.25 1.5 14.2288 1.5 11.7545V7.24551ZM15 14.75V7.24551C14.998 6.45088 14.6812 5.68943 14.1189 5.12797C13.5565 4.5665 12.7946 4.2508 12 4.25001H6C5.60614 4.24902 5.21595 4.32579 4.85182 4.47593C4.48769 4.62606 4.15678 4.8466 3.87807 5.12489C3.59936 5.40319 3.37832 5.73377 3.22764 6.09767C3.07696 6.46157 2.9996 6.85164 3 7.24551V11.7545C3.00199 12.5491 3.31884 13.3106 3.88114 13.872C4.44345 14.4335 5.20537 14.7492 6 14.75H15ZM10.5 8.75001H12V10.25H10.5V8.75001ZM6 8.75001H7.5V10.25H6V8.75001Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="relative flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    :src="user.imageUrl"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-bgSecondary rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-800' : '',
                        'block px-4 py-2 text-sm text-gray-300',
                      ]"
                    >
                      <span>{{ item.name }}</span>
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="flex items-center -mr-2 lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center p-2 text-gray-100 bg-bgSecondary rounded-md hover:bg-gray-900 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block w-6 h-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-200 hover:border-gray-300 hover:bg-primary/20 hover:text-gray-200',
              'flex items-center gap-2 border-l-4 py-2 pl-3 pr-4 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <span v-html="item.icon"> </span>
            {{ item.name }}
          </DisclosureButton>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="w-10 h-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-200">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium text-gray-200">
                {{ user.email }}
              </div>
            </div>
            <button
              type="button"
              class="relative flex-shrink-0 p-1 ml-auto text-gray-100 bg-bgSecondary rounded-full hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block px-4 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-gray-200"
              >{{ item.name }}</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
import logo from "../assets/imgs/LogoWhite.svg";
import { ref } from "vue";

const show = ref(false);
const showSearchBar = () => {
  show.value = !show.value;
};

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  {
    name: "Home",
    to: "/home",
    icon: `
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.5 19.9999C20.5 20.2651 20.3946 20.5195 20.2071 20.707C20.0196 20.8946 19.7652 20.9999 19.5 20.9999H5.5C5.23478 20.9999 4.98043 20.8946 4.79289 20.707C4.60536 20.5195 4.5 20.2651 4.5 19.9999V10.9999H1.5L11.827 1.61192C12.0111 1.4444 12.2511 1.35156 12.5 1.35156C12.7489 1.35156 12.9889 1.4444 13.173 1.61192L23.5 10.9999H20.5V19.9999ZM12.5 16.9999L15.859 13.6409C16.0679 13.432 16.2337 13.1839 16.3467 12.911C16.4598 12.638 16.518 12.3454 16.518 12.0499C16.518 11.7544 16.4598 11.4619 16.3467 11.1889C16.2337 10.9159 16.0679 10.6679 15.859 10.4589C15.6501 10.25 15.402 10.0843 15.129 9.97118C14.8561 9.8581 14.5635 9.79991 14.268 9.79991C13.9725 9.79991 13.6799 9.8581 13.407 9.97118C13.134 10.0843 12.8859 10.25 12.677 10.4589L12.5 10.6359L12.323 10.4589C12.1141 10.25 11.866 10.0843 11.593 9.97118C11.3201 9.8581 11.0275 9.79991 10.732 9.79991C10.4365 9.79991 10.1439 9.8581 9.87096 9.97118C9.59797 10.0843 9.34993 10.25 9.141 10.4589C8.93207 10.6679 8.76633 10.9159 8.65326 11.1889C8.54018 11.4619 8.48199 11.7544 8.48199 12.0499C8.48199 12.3454 8.54018 12.638 8.65326 12.911C8.76633 13.1839 8.93207 13.432 9.141 13.6409L12.5 16.9999Z" fill="currentColor"/>
  </svg>
  
    `,
    current: false,
  },
  {
    name: "Dommes",
    to: "/dommes",
    icon: `
      <svg width="25" height="24" viewBox="0 0 25 24" fill="#FDC157" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.9809 12.1666L16.9868 12.1666C19.7731 12.1666 22.4432 14.2728 22.4818 16.9958C22.5759 17.9013 22.3027 18.8016 21.7287 19.5119L21.6992 19.5484L21.6663 19.582C21.5322 19.7194 21.3723 19.8255 21.1985 19.8964C21.0272 19.9663 20.8443 20.0011 20.6609 20M16.9809 12.1666L20.6649 19M16.9809 12.1666C16.6817 12.1684 16.3862 12.2636 16.1401 12.4452C15.8933 12.6273 15.7074 12.8888 15.6226 13.1952L15.6202 13.2036L15.6194 13.2069C15.6167 13.2097 15.6096 13.2156 15.5965 13.2203L15.585 13.2244L15.5737 13.2287C15.5668 13.2314 15.5573 13.233 15.5469 13.2321C15.5379 13.2313 15.5314 13.2287 15.5278 13.2268C13.9239 12.2081 11.7448 10.0846 9.89902 8.12944C8.98798 7.16442 8.17969 6.26387 7.59263 5.59956C7.3153 5.28574 7.08777 5.02513 6.9213 4.83446L6.89287 4.80189C6.80938 4.70627 6.74054 4.62748 6.69112 4.57162C6.66685 4.54419 6.64346 4.51798 6.62375 4.49649C6.61506 4.48703 6.60277 4.47376 6.58919 4.45976C6.3895 4.24092 6.12815 4.09433 5.8468 4.03288L5.63343 5.00985L5.8468 4.03288C5.5453 3.96704 5.22843 4.00035 4.94581 4.13047L4.92054 4.14211L4.89595 4.15513C4.16711 4.54118 3.55534 5.11168 3.13102 5.81121C2.70639 6.51124 2.48698 7.31205 2.5006 8.12774L2.50051 8.12774L2.5009 8.14079C2.52911 9.08918 2.77524 10.0182 3.21964 10.8621C4.32667 12.9843 4.91799 15.313 4.95252 17.6772V18.6111C4.95252 18.9959 5.11362 19.3543 5.38286 19.6105C5.65042 19.8651 6.00316 20 6.36119 20H7.9959C8.35393 20 8.70667 19.8651 8.97423 19.6105C9.24347 19.3543 9.40457 18.9959 9.40457 18.6111V14.4297M16.9809 12.1666L9.40457 14.4297M20.6609 20C20.6583 20 20.6558 19.9999 20.6533 19.9999L20.6649 19M20.6609 20H20.6649V19M20.6609 20H14.126H14.1192L14.1192 19.9999C13.7971 19.9977 13.4796 19.8871 13.2239 19.678C12.9865 19.4837 12.815 19.2137 12.7458 18.9058M20.6649 19H14.126C14.0273 18.9993 13.9321 18.9653 13.8573 18.9041C13.7824 18.8428 13.7328 18.7583 13.7174 18.6655M12.7458 18.9058C12.7492 18.9174 12.7526 18.9289 12.7559 18.9405L13.7174 18.6655M12.7458 18.9058C12.7402 18.8808 12.7353 18.8556 12.731 18.8301L13.7174 18.6655M12.7458 18.9058C12.649 18.579 12.5083 18.264 12.3265 17.9689L11.953 17.3625M13.7174 18.6655C13.6961 18.5913 13.6731 18.5176 13.6484 18.4444L12.8171 17.6666H12.6875H12.1635L11.953 17.3625M11.953 17.3625L11.8653 17.2358C11.4798 16.6789 11.0613 16.143 10.6117 15.6306L10.6015 15.619L10.5917 15.6071C10.2378 15.1777 9.84 14.7834 9.40457 14.4297M11.953 17.3625L9.40457 14.4297" stroke="currentColor" stroke-width="2"/>
  </svg>
  
  
    `,
    current: true,
  },
  {
    name: "Store",
    to: "/store",
    icon: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.1483 4.48841C21.1005 4.41028 21.0358 4.34394 20.9588 4.29434C20.8819 4.24474 20.7948 4.21314 20.704 4.2019C20.5681 4.19472 20.432 4.19472 20.2961 4.2019C19.4633 4.2012 18.6486 4.44492 17.9526 4.90293C18.2607 4.42139 18.6623 4.00679 19.1335 3.68374C19.221 3.62369 19.2912 3.54179 19.3374 3.44616C19.3835 3.35054 19.4039 3.24451 19.3965 3.13856C19.3891 3.03262 19.3542 2.93045 19.2953 2.84217C19.2364 2.75389 19.1554 2.68255 19.0605 2.63524C18.2665 2.28396 17.3881 2.16958 16.5308 2.30583C15.6735 2.44207 14.8737 2.82315 14.2273 3.40333L13.0768 4.43355C12.8403 4.64841 12.6976 4.94774 12.6793 5.26702C12.6611 5.5863 12.7689 5.89996 12.9794 6.14041L7.92105 9.79798C7.13033 9.5216 6.27481 9.49009 5.46595 9.70755C4.65709 9.92501 3.93236 10.3814 3.38616 11.0172C2.78108 11.6571 2.39334 12.4721 2.2783 13.3458C2.15011 14.4544 2.46066 15.5691 3.14337 16.4511C3.82608 17.333 4.82663 17.9121 5.93057 18.0641C6.08236 19.1696 6.66057 20.1716 7.54127 20.8553C8.42196 21.539 9.53506 21.85 10.642 21.7217C11.5109 21.615 12.3243 21.2375 12.9673 20.6427C13.6022 20.0957 14.0578 19.3699 14.275 18.5599C14.4921 17.7498 14.4607 16.8931 14.1847 16.1012L17.8978 11.0842C18.1405 11.2727 18.4454 11.3624 18.7513 11.3352C19.0572 11.3081 19.3416 11.1662 19.5474 10.9379L20.5762 9.78579C21.2191 9.07712 21.621 8.18239 21.7238 7.23043C21.8266 6.27846 21.6251 5.31838 21.1483 4.48841V4.48841Z" stroke="currentColor" stroke-width="2"/>
  </svg>
  
    `,
    current: false,
  },
  {
    name: "Clips",
    to: "/clips",
    icon: `
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_536_17387)">
  <path d="M12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.477 6.977 2 12.5 2C18.023 2 22.5 6.477 22.5 12C22.5 17.523 18.023 22 12.5 22ZM12.5 20C14.6217 20 16.6566 19.1571 18.1569 17.6569C19.6571 16.1566 20.5 14.1217 20.5 12C20.5 9.87827 19.6571 7.84344 18.1569 6.34315C16.6566 4.84285 14.6217 4 12.5 4C10.3783 4 8.34344 4.84285 6.84315 6.34315C5.34285 7.84344 4.5 9.87827 4.5 12C4.5 14.1217 5.34285 16.1566 6.84315 17.6569C8.34344 19.1571 10.3783 20 12.5 20ZM11.122 8.415L16.001 11.667C16.0559 11.7035 16.1009 11.753 16.132 11.8111C16.1631 11.8692 16.1794 11.9341 16.1794 12C16.1794 12.0659 16.1631 12.1308 16.132 12.1889C16.1009 12.247 16.0559 12.2965 16.001 12.333L11.121 15.585C11.0608 15.6249 10.991 15.6477 10.9189 15.6512C10.8468 15.6546 10.7751 15.6384 10.7114 15.6043C10.6477 15.5703 10.5945 15.5197 10.5573 15.4578C10.52 15.396 10.5003 15.3252 10.5 15.253V8.747C10.5001 8.67465 10.5199 8.60369 10.5572 8.54168C10.5944 8.47967 10.6478 8.42893 10.7116 8.39486C10.7755 8.36079 10.8473 8.34467 10.9196 8.34822C10.9919 8.35177 11.0618 8.37485 11.122 8.415Z" fill="currentColor"/>
  </g>
  <defs>
  <clipPath id="clip0_536_17387">
  <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
  </clipPath>
  </defs>
  </svg>
  `,
    current: false,
  },
  {
    name: "Games",
    to: "games",
    icon: `
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_536_17395)">
  <path d="M17.5 4C19.0913 4 20.6174 4.63214 21.7426 5.75736C22.8679 6.88258 23.5 8.4087 23.5 10V14C23.5 15.5913 22.8679 17.1174 21.7426 18.2426C20.6174 19.3679 19.0913 20 17.5 20H7.5C5.9087 20 4.38258 19.3679 3.25736 18.2426C2.13214 17.1174 1.5 15.5913 1.5 14V10C1.5 8.4087 2.13214 6.88258 3.25736 5.75736C4.38258 4.63214 5.9087 4 7.5 4H17.5ZM17.5 6H7.5C6.47376 6 5.48677 6.39444 4.74319 7.10172C3.9996 7.80901 3.55631 8.77504 3.505 9.8L3.5 10V14C3.5 15.0262 3.89444 16.0132 4.60172 16.7568C5.30901 17.5004 6.27504 17.9437 7.3 17.995L7.5 18H17.5C18.5262 18 19.5132 17.6056 20.2568 16.8983C21.0004 16.191 21.4437 15.225 21.495 14.2L21.5 14V10C21.5 8.97376 21.1056 7.98677 20.3983 7.24319C19.691 6.4996 18.725 6.05631 17.7 6.005L17.5 6ZM10.5 9V11H12.5V13H10.499L10.5 15H8.5L8.499 13H6.5V11H8.5V9H10.5ZM18.5 13V15H16.5V13H18.5ZM16.5 9V11H14.5V9H16.5Z" fill="currentColor"/>
  </g>
  <defs>
  <clipPath id="clip0_536_17395">
  <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
  </clipPath>
  </defs>
  </svg>
  `,
    current: false,
  },
];
const userNavigation = [
  { name: "Your Profile", to: "/dommes-profile" },
  { name: "Settings", to: "#" },
  { name: "Sign out", to: "#" },
];
</script>
