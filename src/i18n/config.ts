import type { Locale } from "@/data/types";

export type { Locale };

export const locales = ["en", "pt-br"] as const;

/** English is served unprefixed at `/`; `/pt-br` carries the Portuguese copy. */
export const defaultLocale: Locale = "en";

/** BCP 47 tag for the `<html lang>` attribute and `Intl` formatting. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  "pt-br": "pt-BR",
};

export const localeName: Record<Locale, string> = {
  en: "English",
  "pt-br": "Português",
};

/** Short label for the header toggle. */
export const localeShortName: Record<Locale, string> = {
  en: "EN",
  "pt-br": "PT",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Public URL for a locale. The default locale has no prefix, so `/pt-br`
 * maps back to `/` rather than `/en`.
 */
export function localeHref(locale: Locale, hash = ""): string {
  const base = locale === defaultLocale ? "/" : `/${locale}`;
  return hash ? `${base}${hash}` : base;
}

/**
 * Rewrites a pathname to point at another locale.
 *
 * Strips any known locale prefix before re-adding one, so it stays correct
 * whether `usePathname()` reports `/` or `/en` for the rewritten default
 * locale — that detail is not guaranteed by the proxy rewrite.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const [, first = "", ...rest] = pathname.split("/");
  const bare = isLocale(first) ? `/${rest.join("/")}` : pathname;
  const clean = bare.replace(/\/+$/, "");
  return localeHref(target) === "/"
    ? clean || "/"
    : `/${target}${clean === "/" ? "" : clean}`;
}
