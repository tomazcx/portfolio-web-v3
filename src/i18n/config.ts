import type { Locale } from "@/data/types";

export type { Locale };

export const locales = ["en", "pt-br"] as const;

export const defaultLocale: Locale = "en";

export const htmlLang: Record<Locale, string> = {
  en: "en",
  "pt-br": "pt-BR",
};

export const localeName: Record<Locale, string> = {
  en: "English",
  "pt-br": "Português",
};

export const localeShortName: Record<Locale, string> = {
  en: "EN",
  "pt-br": "PT",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeHref(locale: Locale, hash = ""): string {
  const base = locale === defaultLocale ? "/" : `/${locale}`;
  return hash ? `${base}${hash}` : base;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const [, first = "", ...rest] = pathname.split("/");
  const bare = isLocale(first) ? `/${rest.join("/")}` : pathname;
  const clean = bare.replace(/\/+$/, "");
  return localeHref(target) === "/"
    ? clean || "/"
    : `/${target}${clean === "/" ? "" : clean}`;
}
