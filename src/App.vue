<template>
  <div class="font-raleway text-main-text">
    <Header @click="scroll" :scrollPosition="scrollPosition" />
    <main class="">
      <Hero @click="scroll" />
      <Skills :scrollPosition="scrollPosition" />
      <Projects :scrollPosition="scrollPosition" />
      <Contact :scrollPosition="scrollPosition" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/main/Hero.vue";
import Skills from "@/components/main/Skills.vue";
import Projects from "@/components/main/Projects.vue";
import Contact from "@/components/main/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Skills,
    Projects,
    Contact,
    Footer,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = scrollY;
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  beforeMount() {
    document.title = "Ikhfan Yusuf";
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  watch: {
    scrollPosition() {
      console.log(this.scrollPosition);
    },
  },
};
</script>
