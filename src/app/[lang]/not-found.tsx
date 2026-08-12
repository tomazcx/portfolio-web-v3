import Link from "next/link";
import { lang } from "next/root-params";
import { defaultLocale, isLocale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/layout/primitives";

export default async function NotFound() {
  const segment = await lang();
  const locale = isLocale(segment ?? "") ? (segment as never) : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="label-mono mb-4 text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 text-fg-muted">{dict.notFound.description}</p>
      <Link
        href={localeHref(locale)}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
      >
        <span aria-hidden="true">←</span>
        {dict.notFound.back}
      </Link>
    </Container>
  );
}
