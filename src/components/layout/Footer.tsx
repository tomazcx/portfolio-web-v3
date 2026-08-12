import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./primitives";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-fg-muted">
            {dict.footer.rights(new Date().getFullYear())}
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-fg-muted transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <span aria-hidden="true" className="text-fg-subtle">
              ·
            </span>
            <a
              href={`tel:${profile.phone}`}
              className="text-fg-muted transition-colors hover:text-accent"
            >
              {profile.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 font-mono text-xs text-fg-subtle">
            {dict.footer.builtWith}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-fg-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-fg-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="#hero"
            className="font-mono text-xs text-fg-subtle transition-colors hover:text-accent"
          >
            {dict.footer.backToTop} ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
