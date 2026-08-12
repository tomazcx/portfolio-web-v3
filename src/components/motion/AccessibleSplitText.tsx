"use client";

import SplitText from "@/components/reactbits/SplitText";
import { useRichMotion } from "@/lib/use-rich-motion";

type Props = {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "p" | "span";
  delay?: number;
};

export function AccessibleSplitText({
  text,
  className,
  tag = "h1",
  delay = 28,
}: Props) {
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
