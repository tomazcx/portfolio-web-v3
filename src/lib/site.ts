import { profile } from "@/data/profile";

/**
 * Absolute origin used for canonical URLs, OG tags and the sitemap.
 * Override with NEXT_PUBLIC_SITE_URL at build time when deploying.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://tomazcx.dev";

export const author = {
  name: profile.name,
  url: siteUrl,
} as const;
