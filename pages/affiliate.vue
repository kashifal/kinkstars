<template>
  <AppLayout variant="v2">
    <!-- Hero -->
    <div class="bg-bgSecondary">
      <div class="relative isolate">
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pt-10 md:pt-0 lg:px-8">
            <div
              class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
            >
              <div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1
                  class="text-[56px] leading-[56px] font-bold text-center md:text-left font-urban text-white sm:text-[81px] sm:leading-[1.1]"
                >
                  Ready to meet <br />
                  with your

                  <div class="inline-block">
                    <span> fans? </span>
                    <div class="w-[91px] h-[5px] md:w-[165px] md:h-[14px]">
                      <svg
                        viewBox="0 0 165 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.80053C43.7221 3.161 135.933 -1.09446 163 11"
                          stroke="#FDC157"
                          stroke-width="5"
                        />
                      </svg>
                    </div>
                  </div>
                </h1>
                <p
                  class="mt-6 text-lg text-center md:text-left leading-8 text-white sm:max-w-md lg:max-w-none"
                >
                  We help you build great meeting and easy- <br />
                  to schedule with your fans.
                </p>
                <div
                  class="mt-10 flex items-center justify-center md:justify-start"
                >
                  <button
                    class="bg-primary px-[24px] flex items-center gap-4 shadow-xl shadow-primary/50 py-[16px] rounded-full"
                  >
                    <span class="text-[18px] font-semibold">Get Started</span>
                    <span class="p-1 text-white bg-black rounded-full">
                      <ChevronRightIcon class="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
              <!-- sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 -->
              <div
                class="flex justify-center md:justify-end items-end gap-4 -mt-20 md:mt-0 md:-mr-20"
              >
                <div class="flex-none sm:ml-0 lg:order-last xl:order-none">
                  <div class="hero_img mb-[81px]">
                    <img :src="hero_1" alt="" class="" />
                  </div>
                </div>
                <div class="flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="hero_img">
                    <img :src="hero_2" alt="" class="" />
                  </div>
                  <div class="hero_img">
                    <img :src="hero_3" alt="" class="" />
                  </div>
                </div>
                <div class="flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="hero_img">
                    <img :src="hero_4" alt="" class="" />
                  </div>
                  <div class="hero_img">
                    <img :src="hero_5" alt="" class="" />
                  </div>
                </div>
                <div class="flex-none space-y-4 pt-32 sm:pt-0">
                  <div class="hero_img">
                    <img :src="hero_6" alt="" class="" />
                  </div>
                  <div class="hero_img">
                    <img :src="hero_7" alt="" class="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Company partner -->

    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-0 p-6 md:py-[50px]"
    >
      <div class="text-center font-sans font-semibold text-xl">
        Company Partner
      </div>
      <div
        class="h-[16px] md:h-[30px] flex justify-between gap-x-0 md:gap-x-[60px]"
      >
        <img class="w-[51px] md:w-auto" :src="uber" alt="" />
        <img class="w-[51px] md:w-auto" :src="google" alt="" />
        <img class="w-[51px] md:w-auto" :src="paypal" alt="" />
        <img class="w-[51px] md:w-auto" :src="microsoft" alt="" />
        <img class="w-[51px] md:w-auto" :src="dribble" alt="" />
      </div>
    </div>

    <!-- Steps -->
    <div class="py-10 md:py-[100px]">
      <div class="text-center">
        <div class="mb-[10px] text-2xl md:text-5xl font-semibold">
          Steps to build your own audience and affiliate
        </div>
        <div class="text-sm md:text-lg text-paragraph">
          actually building an audience is not difficult, as long as you know
          how, and <br />
          this is an easy step to make it happen
        </div>
      </div>
      <!-- Steps -->
      <div class="mt-10 max-w-7xl mx-auto flex justify-center flex-wrap">
        <div
          class="w-[162px] h-[175px] md:h-[250px] md:w-1/4 flex flex-col justify-between p-4 border-r-2"
        >
          <div class="w-8 md:w-12">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.4136 22.588L25.4576 4.58799C25.0828 4.2124 24.5741 4.001 24.0434 4.00025C23.5128 3.9995 23.0035 4.20946 22.6276 4.58399L4.58562 22.584C4.39937 22.7698 4.2516 22.9905 4.15077 23.2335C4.04995 23.4764 3.99805 23.7369 3.99805 24C3.99805 24.2631 4.04995 24.5235 4.15077 24.7665C4.2516 25.0095 4.39937 25.2302 4.58562 25.416L22.6276 43.416C23.4076 44.194 24.6796 44.192 25.4576 43.412L43.4136 25.412C43.5992 25.2266 43.7463 25.0065 43.8467 24.7642C43.9472 24.522 43.9989 24.2623 43.9989 24C43.9989 23.7377 43.9472 23.478 43.8467 23.2358C43.7463 22.9935 43.5992 22.7734 43.4136 22.588ZM29.9996 32H25.9996V24H19.9996V28L13.9996 22L19.9996 16V20H29.9996V32Z"
                fill="#FDC157"
              />
            </svg>
          </div>

          <div class="text-sm font-semibold">
            Choose the appropriate platform
          </div>
          <div class="text-xs md:text-sm text-steal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div
          class="w-[162px] h-[175px] md:h-[250px] md:w-1/4 flex flex-col justify-between p-4 border-0 md:border-r-2"
        >
          <div class="w-8 md:w-12">
            <svg
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.666 18C36.666 15.794 34.872 14 32.666 14H29.798L24.962 5.942C24.6056 5.35105 24.103 4.8619 23.5025 4.52174C22.9021 4.18158 22.2241 4.00189 21.534 4H10.666V8H21.534L25.134 14H8.66602C6.46002 14 4.66602 15.794 4.66602 18V36C4.66602 38.206 6.46002 40 8.66602 40H32.666C34.872 40 36.666 38.206 36.666 36V30L44.666 34V20L36.666 24V18ZM22.666 34H10.666V30H22.666V34Z"
                fill="#FDC157"
              />
            </svg>
          </div>

          <div class="text-sm font-semibold">Create content you like</div>
          <div class="text-xs md:text-sm text-steal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div
          class="w-[162px] h-[175px] md:h-[250px] md:w-1/4 flex flex-col justify-between p-4 border-r-2"
        >
          <div class="w-8 md:w-12">
            <svg
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.334 10.828L39.748 7.414L36.92 4.586L33.794 7.71C31.3 5.416 27.982 4 24.334 4C20.686 4 17.368 5.416 14.874 7.71L11.748 4.586L8.91998 7.414L12.334 10.828C11.0263 12.9918 10.3347 15.4718 10.334 18H6.33398V22H10.334V26H6.33398V30H10.334C10.334 37.72 16.616 44 24.334 44C32.052 44 38.334 37.72 38.334 30H42.334V26H38.334V22H42.334V18H38.334C38.3332 15.4718 37.6417 12.9918 36.334 10.828ZM30.334 30H18.334V26H30.334V30ZM30.334 22H18.334V18H30.334V22Z"
                fill="#FDC157"
              />
            </svg>
          </div>

          <div class="text-sm font-semibold">Advertise your content</div>
          <div class="text-xs md:text-sm text-steal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div
          class="w-[162px] h-[175px] md:h-[250px] md:w-1/4 flex flex-col justify-between p-4"
        >
          <div class="w-8 md:w-12">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9993 35.832V40H17.9993V44H29.9993V40H25.9993V35.832C32.3233 35.028 37.6973 30.512 39.4253 24.246C39.9533 22.342 40.0493 20.186 39.7113 17.834L37.9793 5.716C37.911 5.2396 37.6732 4.80382 37.3095 4.48862C36.9458 4.17342 36.4806 3.99994 35.9993 4H11.9993C11.5181 3.99994 11.0529 4.17342 10.6892 4.48862C10.3255 4.80382 10.0877 5.2396 10.0193 5.716L8.28934 17.832C7.95134 20.186 8.04734 22.342 8.57534 24.244C10.3013 30.512 15.6753 35.028 21.9993 35.832ZM34.2653 8L35.4053 16H12.5913L13.7333 8H34.2653Z"
                fill="#FDC157"
              />
            </svg>
          </div>

          <div class="text-sm font-semibold">
            Your audience will be gathered
          </div>
          <div class="text-xs md:text-sm text-steal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-10 mx-auto max-w-7xl md:px-0">
      <div
        class="flex flex-col-reverse items-center justify-between gap-x-[120px] bg-primaryBg md:flex-row"
      >
        <img
          :src="affiliate_1"
          class="object-cover w-full h-full md:w-[30%] md:h-[70%]"
          alt=""
        />
        <div class="space-y-4 text-xxxl font-sf font-semibold">
          <div class="text-center md:text-left">
            <div class="text-xl">Best of lust</div>
            <h2 class="text-2xl md:text-5xl text-grayWow md:text-gray700">
              <span
                >Becoming Famous <br />
                Succubus and Gather Your <br />
                Fans.</span
              >
            </h2>
          </div>
          <p class="text-sm md:text-[18px] text-paragraph font-medium">
            Consuming the minds and souls of men. Whether you’re a complete
            beginner or you want to step up your routine, get the full studio
            experience at home with thousands of classes for body, mind, and
            spirit.
          </p>
          <div class="flex">
            <div
              class="w-1/2 flex items-center gap-x-4 justify-start py-6 border-r-2"
            >
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.25781"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  fill="#FDC157"
                />
                <rect
                  x="1.25781"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  stroke="#FBFBFB"
                />
                <path
                  d="M29.6185 25.2637C29.5192 25.2643 29.423 25.2959 29.3445 25.3538C29.2661 25.4117 29.2099 25.4925 29.1846 25.5839C29.1403 25.7556 29.0526 25.9144 28.9291 26.0465C28.8057 26.1787 28.6502 26.2802 28.4762 26.3422C28.3125 26.4051 28.1353 26.4295 27.9596 26.4134C27.7839 26.3973 27.6148 26.341 27.4668 26.2495C23.7301 23.8818 17.6647 16.6439 17.5673 16.5765C17.5048 16.5013 17.4172 16.4486 17.319 16.4272C17.2208 16.4057 17.1179 16.4168 17.0272 16.4586C16.4058 16.7877 15.8899 17.2711 15.5343 17.8572C15.1788 18.4433 14.997 19.1102 15.0083 19.7868C15.0339 20.6482 15.2576 21.4938 15.6636 22.264C16.9421 24.7144 17.626 27.4068 17.6647 30.1423V31.1618C17.6647 31.2736 17.7113 31.3807 17.7944 31.4597C17.8774 31.5388 17.99 31.5831 18.1074 31.5831H19.8784C19.9958 31.5831 20.1084 31.5388 20.1914 31.4597C20.2745 31.3807 20.3211 31.2736 20.3211 31.1618V24.6317C21.5625 25.2787 22.653 26.1587 23.5265 27.2185C24.0407 27.8045 24.5196 28.4178 24.9609 29.0554H30.0612C30.1786 29.0554 30.2913 29.0997 30.3743 29.1788C30.4573 29.2578 30.504 29.3649 30.504 29.4767C30.504 29.5884 30.4573 29.6955 30.3743 29.7746C30.2913 29.8536 30.1786 29.898 30.0612 29.898H25.4922C25.7475 30.3124 25.944 30.7573 26.0766 31.2208C26.0934 31.3213 26.1471 31.4129 26.2282 31.4792C26.3092 31.5456 26.4124 31.5824 26.5194 31.5831H33.6031C33.6611 31.5838 33.7187 31.5729 33.7721 31.5512C33.8255 31.5294 33.8735 31.4972 33.913 31.4568C34.3685 30.8932 34.575 30.1828 34.4886 29.4767C34.4886 27.2354 32.2129 25.2637 29.6185 25.2637Z"
                  fill="#101820"
                />
              </svg>

              <div>
                <div class="text-base text-grayMine font-medium">
                  Dommes Model
                </div>
                <div class="text-2xl md:text-5xl font-bold">200+</div>
              </div>
            </div>
            <div class="w-1/2 flex items-center gap-x-4 justify-center py-6">
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.25781"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  fill="#FDC157"
                />
                <rect
                  x="1.25781"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  stroke="#FBFBFB"
                />
                <path
                  d="M29.6185 25.2637C29.5192 25.2643 29.423 25.2959 29.3445 25.3538C29.2661 25.4117 29.2099 25.4925 29.1846 25.5839C29.1403 25.7556 29.0526 25.9144 28.9291 26.0465C28.8057 26.1787 28.6502 26.2802 28.4762 26.3422C28.3125 26.4051 28.1353 26.4295 27.9596 26.4134C27.7839 26.3973 27.6148 26.341 27.4668 26.2495C23.7301 23.8818 17.6647 16.6439 17.5673 16.5765C17.5048 16.5013 17.4172 16.4486 17.319 16.4272C17.2208 16.4057 17.1179 16.4168 17.0272 16.4586C16.4058 16.7877 15.8899 17.2711 15.5343 17.8572C15.1788 18.4433 14.997 19.1102 15.0083 19.7868C15.0339 20.6482 15.2576 21.4938 15.6636 22.264C16.9421 24.7144 17.626 27.4068 17.6647 30.1423V31.1618C17.6647 31.2736 17.7113 31.3807 17.7944 31.4597C17.8774 31.5388 17.99 31.5831 18.1074 31.5831H19.8784C19.9958 31.5831 20.1084 31.5388 20.1914 31.4597C20.2745 31.3807 20.3211 31.2736 20.3211 31.1618V24.6317C21.5625 25.2787 22.653 26.1587 23.5265 27.2185C24.0407 27.8045 24.5196 28.4178 24.9609 29.0554H30.0612C30.1786 29.0554 30.2913 29.0997 30.3743 29.1788C30.4573 29.2578 30.504 29.3649 30.504 29.4767C30.504 29.5884 30.4573 29.6955 30.3743 29.7746C30.2913 29.8536 30.1786 29.898 30.0612 29.898H25.4922C25.7475 30.3124 25.944 30.7573 26.0766 31.2208C26.0934 31.3213 26.1471 31.4129 26.2282 31.4792C26.3092 31.5456 26.4124 31.5824 26.5194 31.5831H33.6031C33.6611 31.5838 33.7187 31.5729 33.7721 31.5512C33.8255 31.5294 33.8735 31.4972 33.913 31.4568C34.3685 30.8932 34.575 30.1828 34.4886 29.4767C34.4886 27.2354 32.2129 25.2637 29.6185 25.2637Z"
                  fill="#101820"
                />
              </svg>

              <div>
                <div class="text-base text-grayMine font-medium">
                  Fans Gather
                </div>
                <div class="text-2xl md:text-5xl font-bold">2300+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-6 md:mt-0 flex flex-col items-center justify-between md:flex-row"
      >
        <div class="space-y-4 text-xxxl font-sf font-semibold">
          <div>
            <h2 class="text-2xl md:text-5xl text-grayWow md:text-gray700">
              <span>What Makes Us Different?</span>
            </h2>
          </div>
          <p class="text-sm md:text-[18px] text-paragraph font-medium">
            We are an agency that focuses on providing special training to
            become an influencer, starting from finding followers, building a
            brand, creating content, to becoming a great influencer.
          </p>
          <ul
            class="flex flex-col gap-y-4 text-sm md:text-base text-[#0E0A23] font-normal"
          >
            <li class="h-10 flex items-center gap-x-4">
              <div>
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#FDC157"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#FBFBFB"
                  />
                  <path
                    d="M19.4934 13.4865L16.1668 14.7399C15.4001 15.0265 14.7734 15.9332 14.7734 16.7465V21.6999C14.7734 22.4865 15.2934 23.5199 15.9268 23.9932L18.7934 26.1332C19.7334 26.8399 21.2801 26.8399 22.2201 26.1332L25.0868 23.9932C25.7201 23.5199 26.2401 22.4865 26.2401 21.6999V16.7465C26.2401 15.9265 25.6134 15.0199 24.8468 14.7332L21.5201 13.4865C20.9534 13.2799 20.0468 13.2799 19.4934 13.4865Z"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5332 19.9135L19.6065 20.9868L22.4732 18.1201"
                    stroke="#FBFBFB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>Easy to interact with fans</div>
            </li>
            <li class="h-10 flex items-center gap-x-4">
              <div>
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#FDC157"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#FBFBFB"
                  />
                  <path
                    d="M20.5007 25.6668H17.1673C15.1673 25.6668 13.834 24.6668 13.834 22.3335V17.6668C13.834 15.3335 15.1673 14.3335 17.1673 14.3335H23.834C25.834 14.3335 27.1673 15.3335 27.1673 17.6668V19.6668"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.8327 18L21.746 19.6667C21.0593 20.2133 19.9327 20.2133 19.246 19.6667L17.166 18"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.306 21.8469L22.946 24.2069C22.8527 24.3002 22.766 24.4735 22.746 24.6002L22.6194 25.5002C22.5727 25.8269 22.7994 26.0535 23.126 26.0069L24.026 25.8802C24.1527 25.8602 24.3327 25.7735 24.4194 25.6802L26.7794 23.3202C27.186 22.9135 27.3794 22.4402 26.7794 21.8402C26.186 21.2469 25.7127 21.4402 25.306 21.8469Z"
                    stroke="#FBFBFB"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.9668 22.187C25.1668 22.907 25.7268 23.467 26.4468 23.667"
                    stroke="#FBFBFB"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>Profit with easy editable payment feature</div>
            </li>
            <li class="h-10 flex items-center gap-x-4">
              <div>
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#FDC157"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#FBFBFB"
                  />
                  <path
                    d="M19.1673 23.2999H16.6407C14.394 23.2999 13.834 22.7399 13.834 20.4932V16.4932C13.834 14.2465 14.394 13.6865 16.6407 13.6865H23.6607C25.9073 13.6865 26.4673 14.2465 26.4673 16.4932"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.166 26.3131V23.2998"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.834 20.6333H19.1673"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.9941 26.3135H19.1675"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.1668 20.5334V24.3401C27.1668 25.9201 26.7735 26.3134 25.1935 26.3134H22.8268C21.2468 26.3134 20.8535 25.9201 20.8535 24.3401V20.5334C20.8535 18.9534 21.2468 18.5601 22.8268 18.5601H25.1935C26.7735 18.5601 27.1668 18.9534 27.1668 20.5334Z"
                    stroke="#FBFBFB"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.9957 24.1668H24.0017"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>Optimized for mobile view</div>
            </li>
            <li class="h-10 flex items-center gap-x-4">
              <div>
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#FDC157"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#FBFBFB"
                  />
                  <path
                    d="M17.834 13.3335V15.3335"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.166 13.3335V15.3335"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.834 18.0601H26.1673"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.5 17.6668V23.3335C26.5 25.3335 25.5 26.6668 23.1667 26.6668H17.8333C15.5 26.6668 14.5 25.3335 14.5 23.3335V17.6668C14.5 15.6668 15.5 14.3335 17.8333 14.3335H23.1667C25.5 14.3335 26.5 15.6668 26.5 17.6668Z"
                    stroke="#0E0A23"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.4976 21.1331H20.5036"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.0289 21.1331H18.0349"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.0289 23.1331H18.0349"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>Schedule and best to interactive</div>
            </li>
          </ul>
        </div>
        <img
          :src="dommes"
          class="object-cover -scale-x-100 w-full h-full md:w-[40%] md:h-[70%]"
          alt=""
        />
      </div>
    </div>

    <div class="px-10 md:p-0 max-w-7xl mx-auto">
      <LatestClips title="Blog Clips" />
    </div>

    <!-- creative -->
    <div class="max-w-5xl py-10 md:py-24 mx-auto">
      <div class="mb-10 text-4xl font-bold text-center hidden md:block">
        Our Creative Dommes Say
      </div>
      <div class="flex flex-col md:flex-row gap-x-[120px]">
        <img
          :src="creative_dommes"
          class="object-cover -ml-10 md:ml-0"
          alt=""
        />
        <div>
          <Splide
            ref="splide"
            class="splide"
            :options="{
              rewind: true,
              perPage: 1,
              navigation: false,
              gap: 20,
              arrows: false,
              drag: true,
              pagination: false,
              height: '380px',
            }"
            aria-label="Latest Clips"
          >
            <SplideSlide>
              <div class="creative_slide">
                <p class="comment">
                  I have 100k followers on tiktok, and I'm KinkStar help me to
                  reach my fans!!!. Kink Stars is worth it!
                </p>
                <div>
                  <div class="username">Jenny Wilson</div>
                  <div class="role">Professional Dominatrix</div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="creative_slide">
                <p class="comment">
                  I have 200k followers on tiktok, and I'm KinkStar help me to
                  reach my fans!!!. Kink Stars is worth it!
                </p>
                <div>
                  <div class="username">Jennyyy Wilson</div>
                  <div class="role">Professional Dominatrix</div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="creative_slide">
                <p class="comment">
                  I have 300k followers on tiktok, and I'm KinkStar help me to
                  reach my fans!!!. Kink Stars is worth it!
                </p>
                <div>
                  <div class="username">Fenny Wilson</div>
                  <div class="role">Professional Dominatrix</div>
                </div>
              </div></SplideSlide
            >
          </Splide>
          <div
            class="flex justify-center md:justify-start -mt-20 z-50 md:mt-0 gap-4"
          >
            <button @click="slideToPrev" class="">
              <ArrowLeftIcon class="w-5 h-5" />
            </button>
            <button @click="slideToNext" class="">
              <ArrowRightIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";

import AppLayout from "~/layouts/AppLayout.vue";
import dommes from "../assets/imgs/dommes.png";
import affiliate_1 from "../assets/imgs/affiliate_1.png";
import creative_dommes from "../assets/imgs/creative_dommes.png";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import uber from "../assets/imgs/partner_logos/uber.png";
import google from "../assets/imgs/partner_logos/google.png";
import paypal from "../assets/imgs/partner_logos/paypal.png";
import microsoft from "../assets/imgs/partner_logos/microsoft.png";
import dribble from "../assets/imgs/partner_logos/dribble.png";
import hero_1 from "../assets/imgs/affiliate_hero/hero_1.png";
import hero_2 from "../assets/imgs/affiliate_hero/hero_2.png";
import hero_3 from "../assets/imgs/affiliate_hero/hero_3.png";
import hero_4 from "../assets/imgs/affiliate_hero/hero_4.png";
import hero_5 from "../assets/imgs/affiliate_hero/hero_5.png";
import hero_6 from "../assets/imgs/affiliate_hero/hero_6.png";
import hero_7 from "../assets/imgs/affiliate_hero/hero_7.png";
import logo from "../assets/imgs/logo-black.png";

const splide = ref(null);

const slideToNext = () => {
  splide.value.splide.go("+");
};

const slideToPrev = () => {
  splide.value.splide.go("-");
};

const mobileMenuOpen = ref(false);
</script>
<style lang="postcss" scoped>
.hero_img {
  @apply relative;

  img {
    @apply w-[72px] md:w-[153px] rounded-full bg-gray-900/5 object-cover shadow-lg;
  }
}
.creative_slide {
  @apply h-full w-1/2 md:w-full mx-auto flex flex-col gap-y-14 pt-16;
  .comment {
    @apply text-base md:text-2xl;
  }
  .username {
    @apply font-bold;
  }
}
.splide__track {
  /* @apply h-full; */
}
</style>
