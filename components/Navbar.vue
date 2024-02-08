<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="px-4 mx-auto font-sans max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex items-center mr-2 -ml-2 md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white"
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
          <div class="flex items-center flex-shrink-0">
            <img class="w-auto h-6" :src="logo" alt="Your Company" />
          </div>
        </div>
        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current ? 'text-primary' : 'text-gray-300  hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</a
          >
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <button
              type="button"
              class="relative inline-flex items-center gap-x-1.5 rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-primary text-white'
              : 'text-gray-300  hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import logo from "../assets/imgs/logo.png";
const navigation = [
  { name: "Becoming a Dommes?", href: "#", current: false },
  { name: "Home", href: "#", current: true },
  { name: "Dommes", href: "#", current: false },
  { name: "Store", href: "#", current: false },
  { name: "Clip", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];
</script>
