"use client";

import SplitText from "@/components/reactbits/SplitText";
import { useRichMotion } from "@/lib/use-rich-motion";

type Props = {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "p" | "span";
  delay?: number;
};

/**
 * React Bits `SplitText` explodes a string into per-character spans, which
 * screen readers then announce letter by letter. Wrapping it in an element
 * that carries the whole string as `aria-label`, with the animated spans
 * hidden, keeps the animation without wrecking the accessible name.
 */
export function AccessibleSplitText({
  text,
  className,
  tag = "h1",
  delay = 28,
}: Props) {
  // Desktop only. GSAP SplitText wraps each line in an `overflow: hidden`
  // parent sized from a pre-wrap measurement, which clips the heading to a
  // single line once it wraps on narrow viewports. Rendering plain text there
  // is both safer and the right call for reduced-motion and low-power devices.
  const rich = useRichMotion();

  if (!rich) {
    const Plain = tag;
    return <Plain className={className}>{text}</Plain>;
  }

  const Wrapper = tag;

  return (
    <Wrapper aria-label={text} className={className}>
      <span aria-hidden="true">
        <SplitText
          text={text}
          tag="span"
          splitType="chars"
          delay={delay}
          duration={0.9}
          ease="power3.out"
          from={{ opacity: 0, y: 48, filter: "blur(6px)" }}
          to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          textAlign="inherit"
          threshold={0.15}
        />
      </span>
    </Wrapper>
  );
}
