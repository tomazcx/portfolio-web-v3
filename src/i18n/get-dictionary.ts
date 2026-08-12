import type { Locale } from "@/data/types";
import { en, type Dictionary } from "./dictionaries/en";
import { ptBR } from "./dictionaries/pt-br";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "pt-br": ptBR,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
