"use client";

import { useRef } from "react";
import type { SkillCategory } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { MagicCard, MagicSpotlight, MagicBentoStyles } from "@/components/reactbits/MagicBento";
import { Reveal } from "@/components/motion/Reveal";
import { useRichMotion } from "@/lib/use-rich-motion";
import { cn } from "@/lib/cn";

// Mirrors `--accent` (#315eff) in globals.css. MagicBento's effects are
// driven by GSAP inline styles, so they need raw "r, g, b" channels rather
// than a CSS var.
const GLOW_COLOR = "49, 94, 255";

// The three broadest categories by item count get a wider card, so the grid
// reads as an actual bento layout instead of a uniform tile wall.
const WIDE_CATEGORY_IDS = new Set(["frontend", "backend", "devops"]);

export function SkillsBento({
  categories,
  locale,
}: {
  categories: SkillCategory[];
  locale: Locale;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  // Gates particles/tilt/magnetism/spotlight: off under reduced motion, on
  // touch devices, on low-core hardware, and on narrow viewports.
  const rich = useRichMotion();

  return (
    <div
      ref={gridRef}
      className="bento-section grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <MagicBentoStyles glowColor={GLOW_COLOR} />
      <MagicSpotlight gridRef={gridRef} enabled={rich} glowColor={GLOW_COLOR} />

      {categories.map((category, index) => {
        const items = category.groups.flatMap((group) => group.items);
        const wide = WIDE_CATEGORY_IDS.has(category.id);

        return (
          <Reveal
            key={category.id}
            delay={(index % 3) * 0.06}
            className={cn(wide && "lg:col-span-2")}
          >
            <MagicCard
              className="h-full rounded-2xl border border-border bg-surface p-5"
              disableAnimations={!rich}
              glowColor={GLOW_COLOR}
              enableTilt={false}
              enableMagnetism={rich}
              clickEffect={rich}
            >
              <h3 className="mb-4 flex items-center gap-2.5 text-base font-semibold tracking-tight">
                <span
                  aria-hidden="true"
                  className="h-4 w-1 shrink-0 rounded-full bg-accent"
                />
                {category.label[locale]}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </MagicCard>
          </Reveal>
        );
      })}
    </div>
  );
}
