"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  htmlLang,
  locales,
  localeShortName,
  switchLocalePath,
  type Locale,
} from "@/i18n/config";
import { FlagBR, FlagUS } from "./FlagIcons";

const flagByLocale: Record<Locale, React.ComponentType<{ className?: string }>> = {
  en: FlagUS,
  "pt-br": FlagBR,
};

export function LocaleToggle({ current }: { current: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center rounded-full border border-border bg-surface p-0.5">
      {locales.map((locale) => {
        const active = locale === current;
        const Flag = flagByLocale[locale];
        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            hrefLang={htmlLang[locale]}
            aria-current={active ? "true" : undefined}
            className="relative flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs tracking-wider transition-colors"
          >
            {active ? (
              <motion.span
                layoutId="locale-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <Flag className="relative h-3 w-4 shrink-0 rounded-[2px]" />
            <span
              className={
                active
                  ? "relative text-accent-contrast"
                  : "relative text-fg-muted hover:text-fg"
              }
            >
              {localeShortName[locale]}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
