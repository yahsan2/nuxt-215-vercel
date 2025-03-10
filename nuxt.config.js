export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-2152-vercel",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-i18n", "nuxt-svg-loader", "@nuxtjs/style-resources"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: "server",

  styleResources: {
    scss: [
      "bootstrap/scss/_functions.scss",
      "bootstrap/scss/_variables.scss",
      "bootstrap/scss/_mixins.scss",
      "bootstrap/scss/_grid.scss",
      "./assets/scss/mixins/*.scss",
      "./assets/scss/config/_colors.scss",
      "./assets/scss/functions/*.scss",
      "./assets/scss/_config.scss",
    ],
  },
};
