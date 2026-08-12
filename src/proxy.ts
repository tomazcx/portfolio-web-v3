import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

/**
 * Locale routing with an unprefixed default.
 *
 * The app tree lives under `src/app/[lang]`, but English is published at `/`
 * rather than `/en`. A rewrite (not a redirect) keeps the browser URL clean
 * while Next serves the prerendered `/en` output.
 *
 * In Next 16 this file replaces `middleware.ts` and always runs on the
 * Node.js runtime — setting a `runtime` export here throws.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Defence in depth: the matcher should already exclude these, but a
  // rewritten asset path 404s loudly, so never risk it.
  if (pathname.startsWith("/_next") || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1] ?? "";

  // `/en` is an implementation detail. Send it to the canonical unprefixed
  // URL so the two never compete in search results. Must run before the
  // generic locale check below, or `/en` would just pass through.
  if (segment === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  // Non-default locales already match `[lang]` — let them through untouched.
  if (isLocale(segment)) {
    return NextResponse.next();
  }

  // Everything else is English: rewrite it under the default locale segment.
  // Unknown paths become `/en/whatever` and land on the localized 404.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Without a matcher the proxy also intercepts static assets and would break
  // CSS, JS and images. The metadata routes below live *outside* `[lang]`, so
  // rewriting them under a locale segment would 404 them.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|icon|apple-icon|opengraph-image|twitter-image).*)",
  ],
};
