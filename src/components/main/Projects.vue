<template>
  <section
    id="projects"
    class="projects py-16 bg-yellow-custom overflow-hidden"
  >
    <div
      class="px-4 md:px-24 transition ease-in-out duration-1000"
      :class="{
        '-translate-x-16': scrollPosition <= 1200,
        'translate-x-0': scrollPosition > 1200,
      }"
    >
      <h2 class="text-5xl font-bold mb-4">My Latest Projects</h2>
      <span class="mb-8 inline-block"
        >We create beautifull websites with modern framework.</span
      >
    </div>

    <div
      class="transition ease-in-out duration-1000"
      :class="{
        'translate-x-1/2': scrollPosition <= 1200,
        'translate-x-0': scrollPosition > 1200,
      }"
    >
      <Splide
        :options="{
          loop: true,
          drag: 'free',
          arrows: false,
          fixedWidth: 375,
          gap: 16,
          pagination: false,
        }"
      >
        <SplideSlide class="py-8 drop-shadow-xl">
          <div class="bg-white pt-6 rounded-xl overflow-hidden">
            <div class="px-6">
              <h4 class="mb-1 text-xl font-semibold">Laravel 8</h4>
              <span class="block mb-4 text-sm"
                >Landing page projects esports community.</span
              >
            </div>

            <img src="@/assets/img/beatme.png" alt="" />
          </div>
        </SplideSlide>
        <SplideSlide class="drop-shadow-xl py-8">
          <div class="bg-white pt-6 rounded-xl overflow-hidden">
            <div class="px-6">
              <h4 class="mb-1 text-xl font-semibold">Vue Web App</h4>
              <span class="block mb-4 text-sm"
                >Single page recipes create with Vue & Tailwindcss.</span
              >
            </div>
            <img src="@/assets/img/vue-recipes.png" alt="" />
          </div>
        </SplideSlide>
        <!-- <SplideSlide class="drop-shadow-xl py-8">
          <div class="bg-white pt-6 rounded-xl overflow-hidden">
            <div class="px-6">
              <h4 class="mb-1 text-xl font-semibold">Vue Web App</h4>
              <span class="block mb-4 text-sm"
                >Single page recipes create with Vue & Tailwindcss.</span
              >
            </div>
            <img src="@/assets/img/vue-recipes.png" alt="" />
          </div>
        </SplideSlide>
        <SplideSlide class="drop-shadow-xl py-8">
          <div class="bg-white pt-6 rounded-xl overflow-hidden">
            <div class="px-6">
              <h4 class="mb-1 text-xl font-semibold">Vue Web App</h4>
              <span class="block mb-4 text-sm"
                >Single page recipes create with Vue & Tailwindcss.</span
              >
            </div>
            <img src="@/assets/img/vue-recipes.png" alt="" />
          </div>
        </SplideSlide> -->
      </Splide>
    </div>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default {
  name: "Projects",
  components: {
    Splide,
    SplideSlide,
  },
  props: ["scrollPosition"],
};
</script>

<style>
li.splide__slide:first-child {
  margin-left: 1rem;
}
@media (min-width: 768px) {
  li.splide__slide:first-child {
    margin-left: 6rem;
  }
}
</style>