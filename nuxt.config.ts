// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n-edge"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "de",
    },
    locales: [
      {
        code: "de",
        name: "🇩🇪",
      },
      {
        code: "en",
        name: "🇬🇧",
      },
    ],
    defaultLocale: "de",
    strategy: "prefix_and_default",
  },
});
