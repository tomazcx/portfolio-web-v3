"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import ClickSpark from "@/components/reactbits/ClickSpark";
import { useRichMotion } from "@/lib/use-rich-motion";

function SparkLayer({ children }: { children: React.ReactNode }) {
  const rich = useRichMotion();

  if (!rich) return <>{children}</>;

  return (
    <ClickSpark
      className="contents"
      sparkColor="#315eff"
      sparkCount={8}
      sparkRadius={18}
      sparkSize={9}
      duration={420}
    >
      {children}
    </ClickSpark>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      // Without this every element crossfades on toggle, which reads as jank.
      disableTransitionOnChange
    >
      {/* `reducedMotion="user"` makes every motion component degrade on its own. */}
      <MotionConfig reducedMotion="user">
        <SparkLayer>{children}</SparkLayer>
      </MotionConfig>
    </ThemeProvider>
  );
}
