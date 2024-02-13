<template>
  <AppLayout>
    <div
      class="h-[calc(100vh_-_64px)] grid grid-cols-1 md:grid-cols-6 overflow-y-auto p-5 gap-x-5 mx-auto"
    >
      <div
        class="relative flex flex-col w-full col-span-1 md:col-span-4 gap-y-5"
      >
        <video class="rounded-2xl" controls>
          <source :src="clip" />
        </video>
        <span
          class="absolute px-4 py-1 text-sm text-white bg-red-500 rounded-full top-4 right-4"
        >
          • Live
        </span>
        <span
          class="absolute flex items-center gap-2 px-4 py-1 text-sm text-white bg-[#35383F99] border border-gray-700 rounded-full top-4 right-28"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4659 6.86063C13.4659 8.8187 11.9049 10.3888 9.95817 10.3888C8.01142 10.3888 6.45044 8.8187 6.45044 6.86063C6.45044 4.90181 8.01142 3.33325 9.95817 3.33325C11.9049 3.33325 13.4659 4.90181 13.4659 6.86063ZM9.95818 16.6666C7.09886 16.6666 4.65739 16.2133 4.65739 14.4001C4.65739 12.5861 7.08319 12.1163 9.95818 12.1163C12.8175 12.1163 15.259 12.5696 15.259 14.3835C15.259 16.1968 12.8332 16.6666 9.95818 16.6666ZM14.9649 6.92427C14.9649 7.92244 14.6672 8.85232 14.1449 9.62534C14.0911 9.7049 14.1389 9.81222 14.2336 9.82873C14.3642 9.85124 14.4993 9.864 14.6366 9.86775C16.0058 9.90378 17.2347 9.01743 17.5742 7.68303C18.0772 5.70095 16.6005 3.9215 14.7202 3.9215C14.5157 3.9215 14.3202 3.94326 14.1299 3.98229C14.1038 3.98829 14.0762 4.0003 14.0613 4.02357C14.0434 4.05209 14.0568 4.09036 14.0747 4.11513C14.6396 4.91142 14.9649 5.88257 14.9649 6.92427ZM17.2325 11.2604C18.1525 11.4413 18.7577 11.8105 19.0084 12.3471C19.2203 12.7877 19.2203 13.2988 19.0084 13.7386C18.6249 14.5709 17.3885 14.8381 16.9079 14.9071C16.8087 14.9221 16.7288 14.8358 16.7393 14.736C16.9848 12.4297 15.0321 11.3362 14.5269 11.0848C14.5053 11.0735 14.5008 11.0563 14.503 11.0457C14.5045 11.0382 14.5135 11.0262 14.5299 11.024C15.623 11.0037 16.7982 11.1538 17.2325 11.2604ZM5.36491 9.86768C5.5022 9.86393 5.63651 9.85192 5.76784 9.82865C5.8626 9.81214 5.91036 9.70482 5.85663 9.62527C5.33432 8.85225 5.03659 7.92237 5.03659 6.9242C5.03659 5.88249 5.36192 4.91134 5.92677 4.11505C5.94468 4.09029 5.95737 4.05201 5.94021 4.02349C5.92528 4.00098 5.89693 3.98822 5.87156 3.98221C5.68054 3.94319 5.48504 3.92142 5.28059 3.92142C3.40025 3.92142 1.92358 5.70087 2.42724 7.68296C2.76675 9.01736 3.99569 9.9037 5.36491 9.86768ZM5.4981 11.0453C5.50034 11.0566 5.49586 11.0731 5.47497 11.0851C4.96907 11.3365 3.01634 12.43 3.26183 14.7355C3.27228 14.8361 3.19318 14.9217 3.09394 14.9074C2.61341 14.8384 1.37701 14.5712 0.993478 13.7389C0.78082 13.2983 0.78082 12.788 0.993478 12.3474C1.24419 11.8108 1.84859 11.4416 2.76861 11.2599C3.20363 11.1541 4.3781 11.004 5.47198 11.0243C5.4884 11.0265 5.49661 11.0385 5.4981 11.0453Z"
              fill="white"
            />
          </svg>
          <span>3.6k</span>
        </span>
        <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div class="col-span-1 px-2 py-6 space-y-4 md:col-span-4">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <img
                  :src="model"
                  class="w-[60px] object-cover h-[60px] rounded-full"
                  alt=""
                />
                <div class="flex flex-col w-full md:flex-1 md:w-auto">
                  <div class="text-2xl font-semibold">Sofia Gurio</div>
                  <div class="text-[#6B7280] max-w-lg">
                    SEA SUBATHON (im doing it again cause roulette) Chilling
                    With Elephants in Thailand !socials
                  </div>
                </div>
                <div class="flex gap-x-4">
                  <button
                    class="w-[52px] h-12 flex justify-center items-center bg-white rounded-xl border border-[#E4E7EC] shadow"
                  >
                    <DollarCircle />
                  </button>
                  <button
                    class="w-[52px] h-12 flex justify-center items-center bg-white rounded-xl border border-[#E4E7EC] shadow"
                  >
                    <ShareSocial />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="flex flex-wrap items-center justify-between gap-4 p-4 bg-white shadow rounded-2xl"
            >
              <div class="flex flex-col gap-y-5">
                <div class="space-y-4">
                  <div class="text-[#6B7280]">About Sofia</div>
                  <div class="flex gap-x-5">
                    <div class="text-center">
                      <div class="text-xl font-bold">492</div>
                      <div class="text-[#6B7280]">Followers</div>
                    </div>
                    <div class="text-center">
                      <div class="text-xl font-bold">329</div>
                      <div class="text-[#6B7280]">Followers</div>
                    </div>
                    <div class="text-center">
                      <div class="text-xl font-bold">32</div>
                      <div class="text-[#6B7280]">Subscribers</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center w-full md:w-auto">
                <button
                  class="px-[48px] w-full py-[12px] rounded-[12px] flex justify-center items-center bg-white font-semibold border border-[#E4E7EC] shadow"
                >
                  Following
                </button>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-between col-span-1 gap-4 px-2 py-6 bg-white shadow md:col-span-2 rounded-2xl"
          >
            <div class="">
              <span class="text-[#6B7280]">Time Remaining</span>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex flex-col items-center gap-2">
                <span class="text-4xl font-semibold">00</span>
                <span class="text-[#6B7280]">Hours</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <span class="text-4xl font-semibold">24</span>
                <span class="text-[#6B7280]">Minutes</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <span class="text-4xl font-semibold">32</span>
                <span class="text-[#6B7280]">Seconds</span>
              </div>
            </div>
            <div>
              <button
                class="w-full px-[24px] py-[13px] bg-[#141416] text-white font-semibold rounded-[12px]"
              >
                Pay $2 for more minute
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col w-full h-full col-span-1 bg-white md:col-span-2 rounded-2xl"
      >
        <!-- Top banner -->
        <div class="font-semibold">
          <div class="flex items-center justify-between px-4 py-5 text-lg">
            <span>Stream chat</span> <User />
          </div>
          <div class="px-5 py-[7px] border-t border-b">
            <div
              class="px-3 py-[10px] flex justify-between items-center gap-y-1 flex-wrap bg-[#FBFBFB] rounded-lg"
            >
              <div class="text-[#6B7280]">Top Member</div>
              <div class="flex items-center gap-x-[10px]">
                <div class="flex gap-x-1">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="model"
                    alt=""
                  />
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="model"
                    alt=""
                  />
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="model"
                    alt=""
                  />
                </div>
                <Right />
              </div>
            </div>
          </div>
        </div>
        <!-- Chatbox -->
        <div class="flex flex-col h-full">
          <!-- Chat -->
          <div
            class="flex flex-col-reverse h-full px-6 py-4 overflow-y-auto gap-y-3"
          >
            <!-- Message -->
            <div
              class="flex items-center gap-4 p-2 rounded-[12px] cursor-pointer hover:bg-gray-100"
            >
              <img
                class="object-cover w-8 h-8 rounded-full"
                :src="model"
                alt=""
              />
              <div class="wrapper">
                <div class="text-[14px] font-semibold">Tynisha Obey</div>
                <div class="text-[12px] text-[#6B7280]">
                  I'd like if we could elaborate more on this.
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-4 p-2 rounded-[12px] cursor-pointer hover:bg-gray-100"
            >
              <img
                class="object-cover w-8 h-8 rounded-full"
                :src="model"
                alt=""
              />
              <div class="wrapper">
                <div class="text-[14px] font-semibold">Tynisha Obey</div>
                <div class="text-[12px] text-[#6B7280]">
                  I'd like if we could elaborate more on this.
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-4 p-2 rounded-[12px] cursor-pointer hover:bg-gray-100"
            >
              <img
                class="object-cover w-8 h-8 rounded-full"
                :src="model"
                alt=""
              />
              <div class="wrapper">
                <div class="text-[14px] font-semibold">Tynisha Obey</div>
                <div class="text-[12px] text-[#6B7280]">
                  I'd like if we could elaborate more on this.
                </div>
              </div>
            </div>
          </div>
          <!-- New Chat -->
          <div class="p-6 border-t">
            <div class="relative">
              <input
                class="w-full text-sm text-[#495057] px-4 py-[13px] bg-[#FBFBFB] rounded-xl outline-none"
                type="text"
                placeholder="Your comment..."
              />
              <button
                class="absolute -translate-y-1/2 w-fit h-fit top-1/2 bottom-1/2 right-4"
              >
                <Emoji />
              </button>
            </div>
            <div class="flex mt-3 gap-x-2">
              <button
                class="flex flex-col items-center justify-between w-10 h-10"
              >
                <QNA />
                <span class="text-[10px] font-medium"> QnA </span>
              </button>
              <button
                class="flex flex-col items-center justify-between w-10 h-10"
              >
                <DollarCircle />
                <span class="text-[10px] font-medium"> Tip </span>
              </button>

              <button
                class="flex flex-col items-center justify-between w-10 h-10"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.07555 5.94946C3.07555 5.94946 1.86617 6.04509 1.70492 6.31696C1.5418 6.58884 1.53242 7.00696 1.53242 7.46634C1.53242 7.92759 1.51367 8.98509 1.51367 8.98509L1.80242 9.60571C1.80242 9.60571 1.8568 17.5163 1.8568 17.762C1.8568 18.0057 1.8568 18.3038 2.2093 18.4932C2.5618 18.6826 11.5205 23.0101 11.7999 23.1263C12.2218 23.3007 12.4224 23.2351 12.4224 23.2351L22.3768 6.58696C22.3768 6.58696 22.3449 6.13134 21.9305 6.02259C21.6924 5.96259 3.07555 5.94946 3.07555 5.94946Z"
                    fill="#F5B03E"
                  />
                  <path
                    d="M12.3157 11.4225C12.1638 11.8406 12.2332 16.1644 12.2595 19.3087C12.2857 22.4512 12.1788 23.1019 12.2595 23.2106C12.3401 23.3194 12.5595 23.2144 13.1801 22.9387C14.3332 22.4287 19.872 19.6875 20.2788 19.4437C20.6857 19.2 21.6795 18.6956 21.8426 18.4237C22.0057 18.1519 22.0938 15.6225 22.1482 13.5919C22.2026 11.5594 22.257 9.93373 22.257 9.93373L22.5007 9.20248C22.5007 9.20248 22.4482 7.22623 22.4388 7.00873C22.422 6.64873 22.3826 6.4631 22.2907 6.5081C22.1595 6.56998 21.0645 7.4681 18.1657 8.8781C16.3451 9.76123 12.4207 11.1337 12.3157 11.4225Z"
                    fill="#E07F14"
                  />
                  <path
                    d="M12.3409 2.10188C11.5291 2.06438 9.30718 3.34875 7.16593 4.05188C5.02468 4.755 1.79218 6.16875 1.76406 6.25125C1.73781 6.33188 3.06531 6.92625 3.91281 7.33313C4.91968 7.815 8.76343 9.63563 9.46656 9.93375C10.1716 10.2319 11.8516 10.9294 12.1216 10.9088C12.5003 10.8825 16.0778 9.4725 17.8928 8.60625C19.7078 7.74 21.9766 6.3975 22.0066 6.07125C22.0197 5.925 18.6691 4.67438 16.9984 3.91875C13.7734 2.45813 12.9353 2.13 12.3409 2.10188Z"
                    fill="#FDD717"
                  />
                  <path
                    d="M1.52281 9.33183C1.55094 9.68433 1.74406 9.80995 2.23531 10.0237C2.72656 10.2375 12.0134 15.0618 12.2272 15.0618C12.4409 15.0618 12.5047 14.2968 12.2703 14.3175C12.1428 14.3287 9.09219 12.8793 6.24219 11.4318C3.82344 10.2056 1.50781 8.9812 1.50781 8.9812L1.52281 9.33183Z"
                    fill="#E37D14"
                  />
                  <path
                    d="M22.5016 9.18555C22.5016 9.18555 12.5847 14.2293 12.4872 14.278C12.3897 14.3268 12.2341 14.3099 12.2341 14.3099L12.2266 15.0618C12.2266 15.0618 12.3184 15.0824 12.4216 15.0505C12.4816 15.0318 22.2147 9.99367 22.2578 9.97867C22.3009 9.96367 22.4884 9.85117 22.5278 9.61305C22.5616 9.4218 22.5016 9.18555 22.5016 9.18555Z"
                    fill="#BA5E0D"
                  />
                  <path
                    d="M5.41039 18.2664L7.35102 21.1539L8.20039 21.4445C8.20039 21.4445 8.26977 18.2945 8.29789 15.9601C8.33727 12.5495 8.32227 9.43887 8.37102 9.26262C8.45164 8.96449 12.226 7.74012 12.226 7.74012C12.226 7.74012 16.4898 9.07699 16.6248 9.37512C16.6848 9.50637 16.6379 11.7151 16.6248 14.2895C16.6079 17.5407 16.6135 21.2945 16.6135 21.2945C16.6135 21.2945 17.0541 21.2926 17.1066 21.1295C17.161 20.9664 17.3785 19.7082 17.3785 19.7082L19.0323 8.68512L19.8723 7.60137L18.706 5.38137L13.921 3.02637L12.2766 3.39574L10.4973 3.12387L4.85352 7.17949L5.51164 8.51449L7.12602 9.33762L5.41039 18.2664Z"
                    fill="#AF0F1B"
                  />
                  <path
                    d="M17.1152 9.26068C17.012 9.48756 17.072 21.1782 17.072 21.1782C17.072 21.1782 17.5877 20.8932 18.2514 20.5744C18.9114 20.2576 19.3858 20.0607 19.427 19.8957C19.4683 19.7307 19.5414 8.16943 19.5414 8.16943L17.1152 9.26068Z"
                    fill="#DC0D28"
                  />
                  <path
                    d="M7.75227 9.01875C7.81414 9.08625 7.71289 21.2175 7.58727 21.2456C7.48789 21.27 5.22852 20.2612 5.22852 20.1581C5.22852 20.055 5.41039 8.46187 5.41039 8.46187C5.41039 8.46187 7.56852 8.8125 7.75227 9.01875ZM12.2298 2.67188C11.6054 2.67188 10.9154 2.85 10.7148 3.37312C10.5141 3.89625 10.4691 4.67438 10.4691 5.25563C10.4691 5.8125 10.3791 7.2375 12.0948 7.215C13.8104 7.1925 13.861 6.55687 13.8873 5.15438C13.9098 3.98438 13.7541 3.41625 13.5985 3.1725C13.4598 2.95313 12.9985 2.67188 12.2298 2.67188Z"
                    fill="#FF2A23"
                  />
                  <path
                    d="M11.2389 5.56699C11.6289 5.58949 11.7958 4.73262 12.0958 4.26387C12.3958 3.79699 12.7089 3.48387 12.5964 3.24012C12.5046 3.03762 11.6889 2.97199 11.2483 3.58512C10.9389 4.01824 10.8846 5.54637 11.2389 5.56699Z"
                    fill="#FCC9D2"
                  />
                  <path
                    d="M13.75 3.07877C13.75 3.07877 14.3031 3.64127 14.4475 4.74377C14.5919 5.84627 14.425 6.70315 14.425 6.70315C14.425 6.70315 17.1737 6.62064 18.1225 6.80252C19.0581 6.9844 19.3844 7.39689 19.3844 7.69689C19.3844 7.99689 18.7694 8.23877 18.145 8.19377C17.5206 8.14877 17.0987 8.11502 17.02 8.27252C16.9412 8.43002 17.0538 8.67377 17.9219 8.7394C18.79 8.8069 19.7931 8.68315 20.1044 7.60314C20.4156 6.52314 20.4269 4.6519 20.3162 3.30377C20.2056 1.95565 19.9619 1.18502 19.3581 0.89252C18.7225 0.586895 17.1306 0.53627 15.6269 1.3819C14.1231 2.22752 13.75 3.07877 13.75 3.07877Z"
                    fill="#FF2A23"
                  />
                  <path
                    d="M16.8632 1.79623C16.6682 1.54498 16.0401 1.55248 15.7044 1.94061C15.3482 2.35311 15.2694 3.92248 15.7269 4.01248C16.2444 4.11373 16.1507 3.26623 16.5294 2.74311C16.9007 2.23123 17.0526 2.04186 16.8632 1.79623Z"
                    fill="#FCC9D2"
                  />
                  <path
                    d="M10.5717 3.13312C10.5717 3.13312 8.46608 0.678746 6.06046 0.716246C4.61296 0.738746 4.24546 1.57312 4.16671 1.91812C4.08796 2.26312 3.48796 5.69437 4.28858 7.5525C5.08921 9.41062 6.75046 8.92875 7.01108 8.86875C7.34483 8.79 8.05546 8.54625 7.98796 8.28937C7.92046 8.0325 5.55983 8.95687 5.53733 7.89937C5.51483 6.84187 7.20796 6.72937 7.98796 6.70687C8.76796 6.68437 10.1048 6.8625 10.1048 6.8625C10.1048 6.8625 9.87046 5.58187 10.0261 4.66875C10.1817 3.75562 10.5717 3.13312 10.5717 3.13312Z"
                    fill="#FF2A23"
                  />
                  <path
                    d="M5.41434 1.60682C5.11434 1.91807 4.99059 3.71244 5.17996 4.60307C5.36934 5.49369 5.53621 5.87244 5.92621 5.79557C6.25246 5.72994 6.44934 3.98244 6.60496 3.36744C6.77184 2.71119 7.18434 2.01369 7.01746 1.70807C6.76246 1.23932 5.72746 1.28244 5.41434 1.60682Z"
                    fill="#FCC9D2"
                  />
                </svg>

                <span class="text-[10px] font-medium"> Gift </span>
              </button>
              <button
                class="flex flex-col items-center justify-between w-10 h-10"
              >
                <Share />
                <span class="text-[10px] font-medium"> 5.7K </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>
import AppLayout from "~/layouts/AppLayout.vue";
import User from "~/components/Icons/User.vue";
import Right from "~/components/Icons/Right.vue";
import QNA from "~/components/Icons/QNA.vue";
import Share from "~/components/Icons/Share.vue";
import Emoji from "~/components/Icons/Emoji.vue";
import DollarCircle from "~/components/Icons/DollarCircle.vue";
import ShareSocial from "~/components/Icons/ShareSocial.vue";
import model from "../assets/imgs/model.png";
import clip from "../assets/imgs/clip.mp4";
</script>
<style scoped></style>
