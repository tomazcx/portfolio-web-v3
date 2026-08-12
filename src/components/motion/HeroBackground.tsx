"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { useRichMotion } from "@/lib/use-rich-motion";

// `FaultyTerminal` reads `window.devicePixelRatio` in a default parameter and
// creates a WebGL context, so it can never be server-rendered.
const FaultyTerminal = dynamic(
  () => import("@/components/reactbits/FaultyTerminal"),
  { ssr: false },
);

/**
 * The single WebGL surface on the page. It only mounts on capable devices and
 * unmounts entirely once the hero scrolls away — no idle GPU work, and no
 * canvas in the DOM at all for anyone who opted out of motion.
 */
export function HeroBackground() {
  const rich = useRichMotion();
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || !rich) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rich]);

  // Default to the dark treatment while the theme is still resolving — the
  // site itself defaults to dark, and this branch never renders during SSR
  // anyway (`rich` starts false), so there's no hydration mismatch either way.
  const isDark = resolvedTheme !== "light";

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {rich && inView ? (
        <div
          className={
            isDark
              ? // Screen blend on the near-black theme: the shader's black
                // background vanishes into the page, only the glow shows.
                "absolute inset-0 opacity-40 mix-blend-screen"
              : // `FaultyTerminal` always renders fully opaque, background
                // pixels included (its shader writes alpha 1 everywhere,
                // clear colour is solid black) — blending that dark canvas
                // onto a light page, at any opacity, tints the whole hero
                // area grey rather than just the glowing digits. Inverting
                // the canvas first turns "black background" into "white
                // background" and "glow" into a darker mark, so it composites
                // cleanly against the page; the tint is pre-complemented
                // (`#cea100`, the inverse of the `#315eff` accent) so it
                // reads as the correct blue once inverted. Kept at low
                // opacity so the pattern stays a pale, washed-out blue —
                // legible as texture behind the muted body copy rather than
                // competing with it.
                "absolute inset-0 opacity-10 invert"
          }
        >
          <FaultyTerminal
            tint={isDark ? "#315eff" : "#cea100"}
            scale={1.6}
            gridMul={[2, 1]}
            digitSize={1.3}
            timeScale={0.24}
            scanlineIntensity={0.35}
            glitchAmount={0.8}
            flickerAmount={0.6}
            noiseAmp={0.9}
            curvature={0.12}
            brightness={0.7}
            mouseReact
            mouseStrength={0.14}
            dpr={1.5}
          />
        </div>
      ) : null}

      {/* Always painted: the accent bloom the WebGL layer sits on top of. */}
      <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[min(72rem,140vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--accent-soft),transparent)] blur-2xl" />
    </div>
  );
}
