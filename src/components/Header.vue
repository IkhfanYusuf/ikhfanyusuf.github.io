<template>
  <nav
    class="
      block
      md:flex
      w-full
      font-outfit
      py-5
      md:py-0
      justify-between
      bg-hero
      fixed
      z-20
    "
    :class="{
      'bg-white/95': scrollPosition >= elementOffsetTop.skillsOffsetTop,
      'bg-hero/95': scrollPosition < elementOffsetTop.skillsOffsetTop,
    }"
  >
    <div class="flex justify-between px-4 md:px-24 md:py-6">
      <a
        href=""
        class="transition ease-out duration-700"
        :class="{
          '-translate-x-16': translate === false,
          'translate-x-0': translate === true,
        }"
        ><span class="font-bold">IKHFAN</span>YUSUF</a
      >
      <svg
        @click="showMobileNav"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-main-text md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </div>

    <div
      class="
        bg-white
        md:bg-transparent md:px-24
        w-2/3
        md:w-fit
        top-0
        min-h-screen
        md:min-h-0
        fixed
        md:static
        right-0
        transition
        ease-out
        duration-300
        bg-opacity-95
        md:translate-x-0
      "
      :class="{
        'translate-x-full': mobileNavShow === false,
        'translate-x-0': mobileNavShow === true,
      }"
    >
      <svg
        @click="showMobileNav"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ml-6 mt-7 md:hidden"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
      <ul
        class="
          flex flex-col
          md:flex-row
          transition
          ease-out
          duration-700
          pt-8
          md:pt-0
        "
        :class="{
          'translate-x-16': translate === false,

          'translate-x-0': translate === true,
        }"
      >
        <li
          @click="
            $emit('click', 'hero');
            showMobileNav();
          "
          class="py-3 md:py-6 px-6 md:px-0"
          :class="{
            'border-l-4 md:border-b-4 md:border-l-0 border-yellow-custom':
              scrollPosition >= elementOffsetTop.heroOffsetTop &&
              scrollPosition <
                elementOffsetTop.heroOffsetTop + elementHeight.heroHeight,
          }"
        >
          Hero
        </li>
        <li
          @click="
            $emit('click', 'skills');
            showMobileNav();
          "
          class="py-3 md:py-6 px-6 md:px-0 md:ml-20"
          :class="{
            'border-l-4 md:border-b-4 md:border-l-0 border-yellow-custom':
              scrollPosition >= elementOffsetTop.skillsOffsetTop &&
              scrollPosition <
                elementOffsetTop.skillsOffsetTop + elementHeight.skillsHeight,
          }"
        >
          Skills
        </li>
        <li
          @click="
            $emit('click', 'projects');
            showMobileNav();
          "
          class="py-3 md:py-6 px-6 md:px-0 md:ml-20"
          :class="{
            'border-l-4 md:border-b-4 md:border-l-0 border-yellow-custom':
              scrollPosition >= elementOffsetTop.projectsOffsetTop &&
              scrollPosition <
                elementOffsetTop.projectsOffsetTop +
                  elementHeight.projectsHeight,
          }"
        >
          Projects
        </li>
        <li
          @click="
            $emit('click', 'contact');
            showMobileNav();
          "
          class="py-3 md:py-6 px-6 md:px-0 md:ml-20"
          :class="{
            'border-l-4 md:border-b-4 md:border-l-0 border-yellow-custom':
              scrollPosition >= elementOffsetTop.contactOffsetTop &&
              scrollPosition <
                elementOffsetTop.contactOffsetTop + elementHeight.contactHeight,
          }"
        >
          Contact
        </li>
        <!-- <li class="pb-4 px-6 md:px-0 md:py-0 md:ml-20">
          posisi : {{ scrollPosition }}
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      translate: false,
      mobileNavShow: false,
      elementOffsetTop: {
        heroOffsetTop: null,
        skillsOffsetTop: null,
        projectsOffsetTop: null,
        contactOffsetTop: null,
      },
      elementHeight: {
        heroHeight: null,
        skillsHeight: null,
        projectsHeight: null,
        contactHeight: null,
      },
    };
  },
  mounted() {
    this.translate = true;
    this.getElementOffset();
    this.getElementHeight();
    // console.log(
    //   "offset skills : " + document.getElementById("skills").offsetHeight
    // );
  },
  methods: {
    showMobileNav() {
      this.mobileNavShow = !this.mobileNavShow;
    },

    getElementOffset() {
      this.elementOffsetTop.heroOffsetTop =
        document.getElementById("hero").offsetTop;
      this.elementOffsetTop.skillsOffsetTop =
        document.getElementById("skills").offsetTop;
      this.elementOffsetTop.projectsOffsetTop =
        document.getElementById("projects").offsetTop;
      this.elementOffsetTop.contactOffsetTop =
        document.getElementById("contact").offsetTop;
    },
    getElementHeight() {
      this.elementHeight.heroHeight =
        document.getElementById("hero").offsetHeight;
      this.elementHeight.skillsHeight =
        document.getElementById("skills").offsetHeight;
      this.elementHeight.projectsHeight =
        document.getElementById("projects").offsetHeight;
      this.elementHeight.contactHeight =
        document.getElementById("contact").offsetHeight;
    },
  },
  watch: {},
  props: ["scrollPosition"],
  emits: ["click"],
};
</script>

