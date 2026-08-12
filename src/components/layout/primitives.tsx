import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="label-mono mb-4 flex items-center gap-3 text-accent">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2
        id={`${id}-heading`}
        className="text-balance-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base text-fg-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="bg-grid bg-grid-fade pointer-events-none fixed inset-0 -z-10"
    />
  );
}

export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="sr-only z-100 rounded-md bg-accent px-4 py-2 font-medium text-accent-contrast focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
    >
      {label}
    </a>
  );
}
