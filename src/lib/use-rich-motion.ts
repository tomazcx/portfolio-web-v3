"use client";

import { useEffect, useState } from "react";

export function useRichMotion(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const wide = window.matchMedia("(min-width: 1024px)");

    const evaluate = () => {
      const cores = navigator.hardwareConcurrency ?? 8;
      setEnabled(
        !reduced.matches && finePointer.matches && wide.matches && cores > 4,
      );
    };

    evaluate();
    reduced.addEventListener("change", evaluate);
    finePointer.addEventListener("change", evaluate);
    wide.addEventListener("change", evaluate);

    return () => {
      reduced.removeEventListener("change", evaluate);
      finePointer.removeEventListener("change", evaluate);
      wide.removeEventListener("change", evaluate);
    };
  }, []);

  return enabled;
}
