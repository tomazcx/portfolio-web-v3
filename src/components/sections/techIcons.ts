import type { ComponentProps, ComponentType } from "react";
import {
  AWS,
  Angular,
  Azure,
  Docker,
  Go,
  Java,
  MongoDB,
  MySQL,
  NestJS,
  NextJs,
  NodeJs,
  PHP,
  Playwright,
  PostgreSQL,
  React as ReactLogo,
  Redis,
  Spring,
  TailwindCSS,
  TypeScript,
  VueJs,
} from "developer-icons";

/**
 * Keyed by the display names used in `marqueeStack` (`data/skills.ts`).
 * `developer-icons` ships each logo in its real brand colours (not
 * `currentColor`), which is why the marquee renders every icon on a fixed
 * white chip in `Skills.tsx` — some logos (Next.js, PostgreSQL) are solid
 * black and would vanish on the dark theme otherwise.
 */
export const techIcons: Record<
  string,
  ComponentType<ComponentProps<typeof TypeScript>>
> = {
  TypeScript,
  React: ReactLogo,
  "Next.js": NextJs,
  "Node.js": NodeJs,
  NestJS,
  Go,
  Java,
  Spring,
  PHP,
  Angular,
  PostgreSQL,
  MongoDB,
  Redis,
  MySQL,
  Docker,
  Azure,
  AWS,
  "Tailwind CSS": TailwindCSS,
  Playwright,
  "Vue.js": VueJs,
};
