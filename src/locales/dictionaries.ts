// import { enDictionary } from "../../dictionaries/en";
import { frDictionary } from "../../dictionaries/fr";
import { Locale } from "./config";

const dictionaries = {
    // en: enDictionary,
    fr: frDictionary
} as const;

export const getDictionary = (locale: Locale) => dictionaries[locale as keyof typeof dictionaries];

export type Dictionary = typeof frDictionary;
