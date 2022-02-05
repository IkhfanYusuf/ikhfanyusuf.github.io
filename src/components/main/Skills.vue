<template>
  <section
    id="skills"
    class="
      skills
      grid grid-cols-12
      md:gap-24
      px-4
      md:px-32
      py-24
      items-center
      overflow-hidden
    "
  >
    <div class="col-span-12 md:col-span-6">
      <div
        class="
          transition
          ease-in-out
          duration-700
          card
          shadow-lg
          grid grid-cols-12
          py-6
          px-6
          md:px-12
          rounded-lg
          items-center
          mb-8
        "
        :class="{
          invisible: scrollPosition <= 350,
          '-translate-x-16': scrollPosition <= 350,
          visible: scrollPosition > 350,
          'translate-x-0': scrollPosition > 350,
        }"
      >
        <div
          class="
            col-span-3
            w-16
            h-16
            rounded-full
            bg-red-custom
            flex
            justify-center
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="col-span-9">
          <h4 class="block text-lg md:text-xl font-semibold mb-1">
            Front End Developer
          </h4>
          <span class="block font-outfit">2 Projects</span>
        </div>
      </div>

      <div
        class="
          transition
          ease-in-out
          duration-700
          card
          shadow-lg
          grid grid-cols-12
          py-6
          px-6
          md:px-12
          rounded-lg
          items-center
          mb-8
        "
        :class="{
          invisible: scrollPosition <= 450,
          '-translate-x-16': scrollPosition <= 450,
          visible: scrollPosition > 450,
          'translate-x-0': scrollPosition > 450,
        }"
      >
        <div
          class="
            col-span-3
            w-16
            h-16
            rounded-full
            bg-yellow-custom
            flex
            justify-center
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="col-span-9">
          <h4 class="block text-lg md:text-xl font-semibold mb-1">
            Back End Developer
          </h4>
          <span class="block font-outfit">2 Projects</span>
        </div>
      </div>
      <div
        class="
          transition
          ease-in-out
          duration-700
          card
          shadow-lg
          grid grid-cols-12
          py-6
          px-6
          md:px-12
          rounded-lg
          items-center
          mb-8
        "
        :class="{
          invisible: scrollPosition <= 550,
          '-translate-x-16': scrollPosition <= 550,
          visible: scrollPosition > 550,
          'translate-x-0': scrollPosition > 550,
        }"
      >
        <div
          class="
            col-span-3
            w-16
            h-16
            rounded-full
            bg-green-custom
            flex
            justify-center
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="col-span-9">
          <h4 class="block text-lg md:text-xl font-semibold mb-1">
            Content Creator
          </h4>
          <span class="block font-outfit">2 Projects</span>
        </div>
      </div>
    </div>
    <div
      class="
        col-span-12
        md:col-span-6
        transition-all
        ease-in-out
        duration-700
        mt-8
        md:mt-0
      "
      :class="{
        'opacity-0': scrollPosition <= 400,
        'translate-x-16': scrollPosition <= 400,
        'opacity-100': scrollPosition > 400,
        'translate-x-0': scrollPosition > 400,
      }"
    >
      <h4 class="text-4xl md:text-6xl font-semibold mb-4">What can I help?</h4>
      <div class="mb-8">
        <span class="inline-block mr-4 font-outfit">2+ Projects Completed</span>
        <span class="inline-block mr-4 font-outfit">2+ Clients</span>
      </div>

      <p class="leading-loose">
        You can hire me as a front end developer. But if your project is not
        very big I can do it myself as a full stack developer. I work on the
        front end using Vue or Reactjs framework. On the css side, I use
        Bootstrap or Tailwindcss framework. I've also worked on projects using
        Laravel 8 and Codeigninter 4.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  props: ["scrollPosition"],
};
</script>
