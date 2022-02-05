<template>
  <section id="contact" class="contact px-4 md:px-24 py-16">
    <h2
      class="
        md:w-7/12
        text-4xl
        md:text-6xl
        font-bold
        mb-4
        transition-opacity
        ease-in-out
        duration-700
      "
      :class="{
        'opacity-0': scrollPosition <= 1750,
        'opacity-100': scrollPosition > 1750,
      }"
    >
      Let’s make something better with us.
    </h2>
    <div
      class="grid grid-cols-12 transition ease-in-out duration-700"
      :class="{
        'opacity-0': scrollPosition <= 1900,
        'translate-y-16': scrollPosition <= 1900,
        'opacity-100': scrollPosition > 1900,
        'translate-y-0': scrollPosition > 1900,
      }"
    >
      <div class="col-span-12 md:col-span-7 mb-8 md:mb-0 flex items-center">
        <p class="hidden md:block text-6xl font-semibold font-outfit">
          Just say <span class="text-red-custom">hello.</span>
        </p>
      </div>
      <div class="col-span-12 md:col-span-5">
        <h4 class="font-semibold text-2xl mb-3">Contact Me</h4>
        <span class="mb-8 block"
          >Say "Hi" and I will reply to your message soon.</span
        >
        <form
          action=""
          id="contact-form"
          class=""
          @submit.prevent="sendMessage"
        >
          <div class="mb-8">
            <input
              type="text"
              v-model="bodyMessage.name"
              id="name"
              autocomplete="name"
              placeholder="Name"
              class="
                w-full
                bg-transparent
                border-b border-text-main
                focus:border-green-custom
                py-2
                focus:outline-none
                text-sm
                font-semibold
              "
            />
          </div>
          <div class="mb-8">
            <input
              type="email"
              v-model="bodyMessage.email"
              id="email"
              autocomplete="email"
              placeholder="example@mail.com"
              class="
                w-full
                bg-transparent
                border-b border-text-main
                focus:border-green-custom
                py-2
                focus:outline-none
                text-sm
                font-semibold
              "
            />
          </div>
          <div class="mb-10">
            <div
              name="message"
              @keyup="getTextMessage"
              id="message"
              role="textbox"
              class="
                textarea
                w-full
                border-b border-text-main
                focus:border-green-custom
                py-2
                focus:outline-none
                text-sm
                font-semibold
              "
              contenteditable
            >
              your message here...
            </div>
          </div>
          <div class="mb-6 flex justify-between items-center" id="btn-send">
            <small v-if="sent === 'sent'" class="mr-2"
              ><svg
                width="24"
                height="24"
                class="mr-1 inline-block"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z"
                  fill="#52B69A"
                /></svg
              >Message has been sent!</small
            >
            <small v-else-if="sent === 'sending'" class="mr-2"
              ><svg
                class="animate-spin -ml-1 mr-3 h-4 w-4 inline-block text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path></svg
              >Please wait for a while....</small
            >
            <small v-else></small>
            <button
              class="
                bg-green-custom
                px-5
                py-2
                rounded-full
                text-white
                font-semibold
                opacity-90
                hover:opacity-100
              "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  name: "Contact",
  data() {
    return {
      bodyMessage: {
        name: null,
        email: null,
        message: null,
      },
      sent: false,
    };
  },
  methods: {
    getTextMessage() {
      this.bodyMessage.message = document.getElementById("message").textContent;
    },

    async sendMessage() {
      try {
        this.sent = "sending";
        const sendMail = await Axios({
          method: "post",
          url: "https://contact-form-api-ikhfan.herokuapp.com/send",
          data: this.bodyMessage,
        });
        if (sendMail.status === 200) {
          document.querySelector("form").reset();
          this.sent = "sent";
          this.bodyMessage.name = null;
          this.bodyMessage.email = null;
          this.bodyMessage.message = null;
        }
        console.log(sendMail);
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    bodyMessage: {
      handler() {
        console.log("name : " + this.bodyMessage.name);
        console.log("email : " + this.bodyMessage.email);
        console.log("message : " + this.bodyMessage.message);
      },
      deep: true,
    },
  },
  props: ["scrollPosition"],
};
</script>
