"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  labelCopy: string;
  labelCopied: string;
  /** Pre-rendered sentence — functions can't cross the server/client boundary. */
  announceCopied: string;
};

export function CopyButton({
  value,
  labelCopy,
  labelCopied,
  announceCopied,
}: Props) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timeout.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard API needs a secure context; fall back to the old trick.
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }

    setCopied(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-md border border-border px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-fg-subtle transition-colors hover:border-accent hover:text-accent"
      >
        {copied ? labelCopied : labelCopy}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? announceCopied : ""}
      </span>
    </>
  );
}
