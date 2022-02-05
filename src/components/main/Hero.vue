<template>
  <div
    id="hero"
    class="hero relative pt-28 md:pb-0 px-4 md:px-24 bg-hero min-h-screen"
  >
    <h1
      class="
        font-bold
        text-4xl
        mb-8
        md:mb-0 md:text-7xl
        leading-tight
        md:absolute
        transition
        ease-out
        duration-700
        z-10
      "
      :class="{
        '-translate-x-16': translate === false,
        'translate-x-0': translate === true,
      }"
    >
      Hello, <br />
      I'm Ikhfan
    </h1>
    <div
      class="
        hidden
        md:block
        absolute
        mt-6
        md:mt-40
        right-4
        md:right-24
        transition
        ease-out
        duration-700
      "
      :class="{
        'translate-x-16': translate === false,
        'translate-x-0': translate === true,
      }"
    >
      <span class="block mb-4 md:mb-8 leading-relaxed">
        I really love being a front end developer,<br />
        but I can also work on the back end.</span
      >
      <button
        class="
          rounded-full
          font-outfit
          py-2
          px-4
          bg-red-custom
          text-white
          mr-4
          text-sm
        "
      >
        HIRE ME
      </button>
      <button
        class="
          rounded-full
          font-outfit
          py-2
          px-4
          bg-green-custom
          text-white text-sm
        "
      >
        WHATSAPP
      </button>
    </div>
    <img
      class="w-11/12 md:w-7/12 md:ml-48 transition ease-in-out duration-700"
      :class="{
        'translate-y-24': translate === false,
        'translate-y-0': translate === true,
      }"
      src="@/assets/img/avatar-crop.png"
      alt=""
    />

    <div
      class="md:hidden mt-8 transition ease-out duration-700"
      :class="{
        'translate-x-16': translate === false,
        'translate-x-0': translate === true,
      }"
    >
      <span class="block mb-8 md:mb-8 leading-relaxed text-center">
        I really love being a front end developer,<br />
        but I can also work on the back end.</span
      >
      <div class="text-center">
        <button
          class="
            rounded-full
            font-outfit
            py-2
            px-4
            bg-red-custom
            text-white
            mr-4
            text-sm
          "
        >
          HIRE ME
        </button>
        <button
          class="
            rounded-full
            font-outfit
            py-2
            px-4
            bg-green-custom
            text-white text-sm
          "
        >
          WHATSAPP
        </button>
      </div>
    </div>

    <div
      class="
        hidden
        md:block
        absolute
        bottom-16
        transition
        ease-in-out
        duration-700
      "
      :class="{
        '-translate-x-16': translate === false,
        'translate-x-0': translate === true,
      }"
    >
      <span class="inline-block text-6xl font-semibold mr-2">2</span>
      <span class="inline-block text-sm">FRONT END<br />PROJECTS</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      translate: false,
    };
  },
  mounted() {
    this.translate = true;
  },
};
</script>
