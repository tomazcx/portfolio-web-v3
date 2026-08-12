import { htmlLang, type Locale } from "@/i18n/config";

export function formatMonthYear(yearMonth: string, locale: Locale): string {
  const [year, month] = yearMonth.split("-").map(Number);
  const date = new Date(Date.UTC(year, (month ?? 1) - 1, 1));

  return new Intl.DateTimeFormat(htmlLang[locale], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatPeriod(
  start: string,
  end: string,
  locale: Locale,
  presentLabel: string,
): string {
  const from = formatMonthYear(start, locale);
  const to = end === "present" ? presentLabel : formatMonthYear(end, locale);
  return `${from} — ${to}`;
}
