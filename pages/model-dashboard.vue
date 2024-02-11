<template>
  <AppLayout>
    <div class="bg-white font-inter">
      <div class="px-4 pt-16 pb-10 mx-auto space-y-8 max-w-7xl">
        <div class="flex flex-wrap items-center gap-12 text-left">
          <div class="relative rounded-full">
            <img
              class="object-cover w-[150px] h-[150px] rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="model avatar"
            />
          </div>
          <div class="space-y-6">
            <h2 class="text-[48px] font-semibold text-[#141416]">
              Sofia Guirno
            </h2>
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-12">
                <div class="flex flex-col items-center gap-1">
                  <h2 class="text-[24px] text-[#141416] font-semibold">492</h2>
                  <span class="text-[#6B7280]">Followers</span>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <h2 class="text-[24px] text-[#141416] font-semibold">492</h2>
                  <span class="text-[#6B7280]">Followers</span>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <h2 class="text-[24px] text-[#141416] font-semibold">392</h2>
                  <span class="text-[#6B7280]">Subscribers</span>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div>
                  <button
                    class="flex items-center border font-semibold px-[24px] gap-2 py-[13px] rounded-[12px]"
                    style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
                  >
                    <EyeIcon class="w-6 h-6" />
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 pt-16 pb-10 mx-auto space-y-8 max-w-7xl">
      <div class="flex flex-col items-center gap-4 md:flex-row">
        <StatCard :item="subscribers" />
        <StatCard :item="openPost" />
        <StatCard :item="openChat" />
        <StatCard :item="openVideoCall" />
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-6">
        <div class="col-span-1 space-y-4 md:col-span-4">
          <div
            style="
              box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06);

              box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
            "
            class="p-6 border rounded-[8px] bg-[#FFFFFF] border-[#E4E7EC]"
          >
            <div class="flex items-start justify-between">
              <div>
                <h2 class="text-[18px] font-semibold">Earning Overview</h2>
                <p class="text-[#141416] text-[14px]">
                  The amount of income currentlyget.
                </p>
              </div>
              <button class="rounded-[12px] hover:bg-gray-100 p-2">
                <EllipsisVerticalIcon class="w-6 h-6" />
              </button>
            </div>
            <div class="flex items-center justify-between py-8">
              <div>
                <h2 class="text-[#141416] text-[36px] font-semibold">
                  128,937.12 USD
                </h2>
                <p class="font-semibold font-inter">
                  23,992.00
                  <span class="text-[14px] text-[#667085] font-normal"
                    >since last week</span
                  >
                </p>
              </div>
              <div>
                <span class="flex items-center gap-2">
                  <ArrowUpIcon class="w-5 h-5 text-green-500" />
                  <span class="text-green-500">12.4%</span>
                </span>
              </div>
            </div>
          </div>
          <div
            style="
              box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06);

              box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
            "
            class="p-6 border rounded-[8px] bg-[#FFFFFF] border-[#E4E7EC]"
          >
            <div class="flex items-start justify-between">
              <div>
                <h2 class="text-[18px] font-semibold">
                  Estiamated Post Earning
                </h2>
                <p class="text-[#141416] text-[14px]">
                  Overview of your post rates
                </p>
              </div>
              <button class="rounded-[12px] hover:bg-gray-100 p-2">
                <EllipsisVerticalIcon class="w-6 h-6" />
              </button>
            </div>
            <div class="py-4 space-y-2">
              <EarningForecast />
              <EarningForecast />
              <EarningForecast />
              <EarningForecast />
              <EarningForecast />
            </div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-2">
          <div
            style="
              box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06);

              box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
            "
            class="p-6 border rounded-[8px] bg-[#FFFFFF] border-[#E4E7EC]"
          >
            <div class="flex items-start justify-between">
              <div>
                <h2 class="text-[18px] font-semibold">Payouts</h2>
                <p class="text-[#141416] text-[14px]">
                  The amount of income to draw.
                </p>
              </div>
              <button class="rounded-[12px] hover:bg-gray-100 p-2">
                <EllipsisVerticalIcon class="w-6 h-6" />
              </button>
            </div>
            <div class="flex items-center gap-4 py-6">
              <div>
                <span class="text-[14px] text-[#667085] uppercase"
                  >Total Payout</span
                >
                <h2 class="text-[24px] text-[#1A1A1A] font-semibold">
                  $4,401.12 USD
                </h2>
              </div>
              <div>
                <span
                  class="flex items-center gap-2 px-2 py-2 text-xs text-green-500 rounded-full bg-green-50"
                >
                  <ArrowUpIcon class="w-3 h-3" />
                  6.4%
                </span>
              </div>
            </div>
            <div>
              <button
                class="w-full bg-[#141416] rounded-[12px] px-[24px] py-[13px] text-white font-semibold font-sans"
              >
                Payout
              </button>
            </div>
            <div class="py-6">
              <h2 class="text-[18px] font-semibold">Payout report</h2>
              <div class="flow-root mt-8">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div
                    class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                  >
                    <div
                      class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
                    >
                      <table class="min-w-full divide-y divide-gray-300">
                        <thead class="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              Start Date
                            </th>
                            <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr v-for="payout in payouts" :key="payout.email">
                            <td
                              class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                            >
                              {{ payout.date }}
                            </td>
                            <td
                              class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                            >
                              {{ payout.amount }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>
import {
  ArrowUpIcon,
  EllipsisVerticalIcon,
  EyeIcon,
} from "@heroicons/vue/24/outline";
import AppLayout from "~/layouts/AppLayout.vue";
const subscribers = {
  name: "Followers",
  stat: "492",
  previousStat: "392",
  changeType: "increase",
  change: "12.4%",
};
const openPost = {
  name: "Open Post",
  stat: "492",
  changeType: "increase",
  change: "12.4%",
};
const openChat = {
  name: "Open Chat",
  stat: "492",
  changeType: "increase",
  change: "12.4%",
};
const openVideoCall = {
  name: "Open Video Call",
  stat: "492",
  changeType: "increase",
  change: "12.4%",
};
const payouts = [
  {
    date: "Dec 7, 2019 23:26",
    amount: "$1,231.32",
  },
  {
    date: "Dec 30, 2019 05:18",
    amount: "$10,075.14",
  },
  {
    date: "Dec 30, 2019 07:52",
    amount: "$7,231.85",
  },
  {
    date: "Mar 20, 2019 23:14",
    amount: "$48,013.11",
  },
  {
    date: "Dec 30, 2019 05:18",
    amount: "$2,321.53",
  },
  // More payouts...
];
</script>
