<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="https://picsum.photos/id/237/200/300" alt="Sample 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="https://picsum.photos/id/237/200/300" alt="Sample 2" />
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const options = {
      rewind: true,
      gap: "1rem",
      perPage: 4,
    };

    return { options };
  },
});
</script>
