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
        @click="$emit('click', 'contact')"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline-block mr-1 animate-bounce"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        HIRE ME
      </button>
      <a
        href="https://wa.me/6285810923499"
        class="
          rounded-full
          font-outfit
          py-2
          px-4
          bg-green-custom
          text-white text-sm
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline-block mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
          />
          <path
            d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
          />
        </svg>
        WHATSAPP
      </a>
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
          @click="$emit('click', 'contact')"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-1 animate-bounce"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          HIRE ME
        </button>
        <a
          href="https://wa.me/6285810923499"
          class="
            rounded-full
            font-outfit
            py-2
            px-4
            bg-green-custom
            text-white text-sm
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
            />
            <path
              d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
            />
          </svg>
          WHATSAPP
        </a>
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
