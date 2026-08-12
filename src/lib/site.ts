import { profile } from "@/data/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://tomazcx.dev";

export const author = {
  name: profile.name,
  url: siteUrl,
} as const;
