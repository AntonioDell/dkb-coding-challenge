import de from "~/locales/de.json";
import en from "~/locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    de,
    en,
  },
}));
