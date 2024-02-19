<template>
  <div class="flex items-center">
    <div
      class="relative flex-col items-center justify-center flex-1 hidden h-screen gap-12 p-4 bg-black lg:flex"
    >
      <div class="absolute bottom-0 left-0">
        <svg
          width="339"
          height="354"
          viewBox="0 0 339 354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle
              cx="-53.6355"
              cy="307.838"
              r="207.669"
              transform="rotate(-30 -53.6355 307.838)"
              stroke="white"
            />
            <circle
              cx="-53.6355"
              cy="307.838"
              r="207.669"
              transform="rotate(-30 -53.6355 307.838)"
              stroke="white"
            />
            <circle
              cx="-53.6355"
              cy="307.838"
              r="207.669"
              transform="rotate(-30 -53.6355 307.838)"
              stroke="white"
            />
            <circle
              cx="-53.6355"
              cy="307.838"
              r="207.669"
              transform="rotate(-30 -53.6355 307.838)"
              stroke="white"
            />
            <circle
              cx="54.3519"
              cy="400.985"
              r="207.669"
              transform="rotate(-30 54.3519 400.985)"
              stroke="white"
            />
            <circle
              cx="54.3519"
              cy="400.985"
              r="207.669"
              transform="rotate(-30 54.3519 400.985)"
              stroke="white"
            />
            <circle
              cx="54.3519"
              cy="400.985"
              r="207.669"
              transform="rotate(-30 54.3519 400.985)"
              stroke="white"
            />
            <circle
              cx="54.3519"
              cy="400.985"
              r="207.669"
              transform="rotate(-30 54.3519 400.985)"
              stroke="white"
            />
          </g>
        </svg>
      </div>
      <div>
        <img :src="logo" class="w-auto h-auto" alt="kink-stars-logo" />
      </div>
      <div>
        <img :src="ornament" class="" alt="kink-stars-logo" />
      </div>
      <div class="space-y-4 text-center">
        <h2 class="font-semibold text-white text-lx">
          Influencers who is professional in his field
        </h2>
        <p class="max-w-lg text-gray-400">
          thas been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
      </div>
    </div>
    <div
      class="lg:w-[55%] w-full min-h-screen bg-primaryBg flex items-center justify-center"
    >
      <div
        class="px-12 py-12 max-w-2xl w-full space-y-6 bg-white border rounded-xl"
        style="box-shadow: 0px 1px 20px 0px rgba(16, 24, 40, 0.05)"
      >
        <div>
          <NuxtLink to="/">
            <img :src="logoBlack" class="w-auto h-auto" alt="" />
          </NuxtLink>
        </div>
        <div>
          <h2 class="text-xxl text-secondary font-semibold">
            Come join us now
          </h2>
        </div>
        <div>
          <form class="space-y-4">
            <div class="flex flex-col gap-2">
              <label for="full-name"> Full Name </label>
              <input
                id="full-name"
                type="text"
                class="px-[18px] py-[12px] rounded-xl outline-none bg-primaryBg"
                placeholder="Full Name"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email"> Email address </label>
              <input
                id="email"
                type="email"
                class="px-[18px] py-[12px] rounded-xl outline-none bg-primaryBg"
                placeholder="Email address"
              />
            </div>
            <div class="relative flex flex-col gap-2">
              <label for="password"> Password</label>
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                class="px-[18px] py-[12px] rounded-xl outline-none bg-primaryBg"
                placeholder="Password"
              />
              <button
                @click="changePasswordType"
                type="button"
                class="absolute top-12 right-5 text-paragraph"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>
            <div class="pt-4">
              <button
                class="text-white rounded-xl font-semibold bg-primary px-[24px] py-[13px] w-full"
              >
                Register Now
              </button>
            </div>
            <div class="flex items-center justify-center gap-4">
              <div class="flex-grow border-t border-borderPrimary"></div>
              <span class="text-paragraph">Or</span>
              <div class="flex-grow border-t border-borderPrimary"></div>
            </div>
          </form>
          <div class="flex items-center justify-center gap-4 pt-6">
            <button class="p-2 border rounded-full border-borderPrimary">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9199 7.65421C20.4239 7.07325 20.8083 6.39844 21.0508 5.66853C21.2934 4.93862 21.3893 4.16798 21.3332 3.40088C19.7857 3.52579 18.3492 4.25362 17.3332 5.42755C16.8467 5.99018 16.478 6.64472 16.249 7.3524C16.0199 8.06009 15.9352 8.80654 15.9999 9.54755C16.7547 9.55383 17.5009 9.38634 18.1807 9.05802C18.8604 8.72971 19.4555 8.24938 19.9199 7.65421ZM23.2799 17.5742C23.2888 16.5525 23.5579 15.55 24.0618 14.6611C24.5657 13.7723 25.2878 13.0266 26.1599 12.4942C25.6095 11.7012 24.8819 11.0473 24.0349 10.5844C23.1878 10.1216 22.2445 9.86242 21.2799 9.82755C19.1999 9.61421 17.2799 11.0409 16.1732 11.0409C15.0665 11.0409 13.5065 9.85421 11.7732 9.88088C10.6401 9.91821 9.53591 10.2486 8.56848 10.8398C7.60105 11.431 6.80336 12.2629 6.25322 13.2542C3.90655 17.3342 5.65322 23.4009 7.99988 26.6942C9.06655 28.3075 10.3999 30.1342 12.1599 30.0675C13.9199 30.0009 14.4932 28.9742 16.5332 28.9742C18.5732 28.9742 19.1999 30.0675 20.9332 30.0275C22.6665 29.9875 23.8932 28.3742 25.0132 26.7609C25.8066 25.5896 26.4264 24.3097 26.8532 22.9609C25.7965 22.5102 24.895 21.7599 24.2599 20.8026C23.6249 19.8453 23.2842 18.723 23.2799 17.5742Z"
                  fill="black"
                />
              </svg>
            </button>
            <button class="p-2 border rounded-full border-borderPrimary">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_28_61235)">
                  <path
                    d="M31.983 17.0335C31.983 15.7225 31.8741 14.7658 31.6385 13.7737H16.3186V19.691H25.3111C25.1298 21.1615 24.1508 23.3761 21.9751 24.8642L21.9446 25.0624L26.7885 28.7293L27.1241 28.762C30.2062 25.9805 31.983 21.8879 31.983 17.0335Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M16.3188 32.6242C20.7244 32.6242 24.4228 31.2068 27.1243 28.762L21.9753 24.8642C20.5975 25.8032 18.7482 26.4587 16.3188 26.4587C12.0039 26.4587 8.34163 23.6773 7.03614 19.8328L6.84479 19.8486L1.80806 23.6577L1.74219 23.8367C4.42541 29.0453 9.93697 32.6242 16.3188 32.6242Z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.03611 19.8329C6.69164 18.8407 6.49229 17.7776 6.49229 16.6793C6.49229 15.5808 6.69164 14.5178 7.01799 13.5257L7.00886 13.3144L1.90901 9.44409L1.74215 9.52165C0.636269 11.6831 0.00170898 14.1104 0.00170898 16.6793C0.00170898 19.2482 0.636269 21.6753 1.74215 23.8368L7.03611 19.8329Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M16.3188 6.89951C19.3827 6.89951 21.4495 8.19282 22.628 9.27361L27.2331 4.87984C24.4048 2.31092 20.7244 0.734131 16.3188 0.734131C9.93697 0.734131 4.42541 4.31288 1.74219 9.52155L7.01802 13.5256C8.34163 9.68106 12.0039 6.89951 16.3188 6.89951Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_61235">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 0.734131)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button class="p-2 border rounded-full border-borderPrimary">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_28_61237)">
                  <path
                    d="M32 16.7341C32 7.89757 24.8366 0.734131 16 0.734131C7.16344 0.734131 0 7.89757 0 16.7341C0 24.7202 5.85097 31.3394 13.5 32.5397V21.3591H9.4375V16.7341H13.5V13.2091C13.5 9.19913 15.8887 6.98413 19.5434 6.98413C21.294 6.98413 23.125 7.29663 23.125 7.29663V11.2341H21.1074C19.1198 11.2341 18.5 12.4675 18.5 13.7328V16.7341H22.9375L22.2281 21.3591H18.5V32.5397C26.149 31.3394 32 24.7202 32 16.7341Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M22.2281 21.3591L22.9375 16.7341H18.5V13.7328C18.5 12.4675 19.1198 11.2341 21.1074 11.2341H23.125V7.29663C23.125 7.29663 21.294 6.98413 19.5434 6.98413C15.8887 6.98413 13.5 9.19913 13.5 13.2091V16.7341H9.4375V21.3591H13.5V32.5397C15.1566 32.7989 16.8434 32.7989 18.5 32.5397V21.3591H22.2281Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_28_61237">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 0.734131)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-center pt-6">
            <div>
              <p class="text-paragraph">
                Already have an account?
                <a
                  href="/login"
                  class="text-gray700 font-semibold hover:underline"
                  >Sign in</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/imgs/logo.png";
import logoBlack from "../assets/imgs/logo-black.png";
import ornament from "../assets/imgs/ornament.png";
import { ref } from "vue";
const showPassword = ref(false);
const changePasswordType = () => {
  showPassword.value = !showPassword.value;
};
</script>
