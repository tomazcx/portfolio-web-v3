import { notFound } from "next/navigation";

/**
 * Without this, an unknown path like `/nope` (rewritten to `/en/nope`) matches
 * no route at all and Next falls back to the built-in error page — which sits
 * outside `[lang]` and so renders with no layout, no theme and no translation.
 *
 * Catching those paths here keeps the 404 inside the locale tree, where
 * `[lang]/not-found.tsx` can render it properly.
 */
export const dynamicParams = true;

export default function CatchAll(): never {
  notFound();
}
