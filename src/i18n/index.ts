import type { Locale } from "./config";
import { en } from "./locales/en";
import { ptBR } from "./locales/pt-BR";
import type { Translations } from "./types";

const dictionaries: Record<Locale, Translations> = {
  en,
  "pt-BR": ptBR,
};

export type { Translations } from "./types";

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale] ?? dictionaries.en;
}

export { locales, defaultLocale, isValidLocale } from "./config";
export type { Locale } from "./config";
