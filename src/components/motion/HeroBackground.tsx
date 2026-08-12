"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { useRichMotion } from "@/lib/use-rich-motion";

const FaultyTerminal = dynamic(
  () => import("@/components/reactbits/FaultyTerminal"),
  { ssr: false },
);

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
              ? "absolute inset-0 opacity-40 mix-blend-screen"
              : "absolute inset-0 opacity-10 invert"
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

      <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[min(72rem,140vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--accent-soft),transparent)] blur-2xl" />
    </div>
  );
}
