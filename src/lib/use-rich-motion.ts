"use client";

import { useEffect, useState } from "react";

/**
 * True only when it's reasonable to run the expensive stuff (WebGL, canvas,
 * pointer-driven tilt): a fine pointer, a wide viewport, enough cores, and no
 * reduced-motion preference.
 *
 * Starts `false` so the server render and the first client paint agree; it
 * flips on after mount if the device qualifies.
 */
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
