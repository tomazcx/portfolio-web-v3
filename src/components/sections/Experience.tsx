import Image, { type StaticImageData } from "next/image";
import bellosoftLogo from "@/assets/bellosoft_logo.jpeg";
import nestleLogo from "@/assets/nestle_s_a__logo.jpeg";
import unifiqueLogo from "@/assets/unifiqueoficial_logo.jpeg";
import { experiences } from "@/data/experiences";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/date";
import { Reveal } from "@/components/motion/Reveal";
import { Section, SectionHeading } from "@/components/layout/primitives";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const companyLogos: Record<string, StaticImageData> = {
  "nestle-nh-labs": nestleLogo,
  "nestle-mathex": nestleLogo,
  bellosoft: bellosoftLogo,
  unifique: unifiqueLogo,
};

export function Experience({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <Section id="experience">
      <SectionHeading
        id="experience"
        eyebrow={dict.experience.eyebrow}
        title={dict.experience.title}
      />

      <ol className="relative space-y-6">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[7px] top-6 hidden w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:block"
        />

        {experiences.map((experience, index) => {
          const isCurrent = experience.end === "present";

          return (
            <li key={experience.id} className="relative sm:pl-10">
              <span
                aria-hidden="true"
                className={
                  isCurrent
                    ? "animate-pulse-ring absolute left-0 top-8 hidden size-[15px] rounded-full border-2 border-accent bg-bg sm:block"
                    : "absolute left-0 top-8 hidden size-[15px] rounded-full border-2 border-border bg-bg sm:block"
                }
              />

              <Reveal delay={index * 0.05}>
                <SpotlightCard
                  className="p-6 sm:p-8"
                  spotlightColor="rgba(49, 94, 255, 0.14)"
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                    <div className="flex items-center gap-4">
                      {companyLogos[experience.id] ? (
                        <span className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-border sm:size-14">
                          <Image
                            src={companyLogos[experience.id]}
                            alt=""
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </span>
                      ) : null}
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                          {experience.company}
                        </h3>
                        <p className="mt-1 text-base text-accent">
                          {experience.role[locale]}
                        </p>
                        {experience.via ? (
                          <p className="mt-1 text-sm text-fg-subtle">
                            {experience.via[locale]}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="label-mono text-fg-muted">
                        {formatPeriod(
                          experience.start,
                          experience.end,
                          locale,
                          dict.experience.present,
                        )}
                      </p>
                      <p className="mt-2 text-sm text-fg-subtle">
                        {experience.location[locale]}
                      </p>
                    </div>
                  </div>

                  {isCurrent ? (
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1">
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-accent"
                      />
                      <span className="font-mono text-[0.7rem] uppercase tracking-widest text-accent">
                        {dict.experience.current}
                      </span>
                    </p>
                  ) : null}

                  <ul className="mt-6 space-y-3">
                    {experience.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex gap-3 text-sm leading-relaxed text-fg-muted sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1 shrink-0 rounded-full bg-accent/70"
                        />
                        {bullet.text[locale]}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {[
                      ...new Set(
                        experience.bullets.flatMap((bullet) => bullet.tags),
                      ),
                    ].map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[0.7rem] text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
