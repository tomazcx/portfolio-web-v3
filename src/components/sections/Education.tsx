import { education } from "@/data/education";
import { spokenLanguages } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/date";
import { Reveal } from "@/components/motion/Reveal";
import { Section, SectionHeading } from "@/components/layout/primitives";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

export function Education({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <Section id="education">
      <SectionHeading
        id="education"
        eyebrow={dict.education.eyebrow}
        title={dict.education.title}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
        <ul className="space-y-4">
          {education.map((item, index) => (
            <li key={`${item.institution}-${item.start}`}>
              <Reveal delay={index * 0.06}>
                <SpotlightCard
                  className="p-5 sm:p-6"
                  spotlightColor="rgba(49, 94, 255, 0.12)"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold tracking-tight">
                      {item.institution}
                    </h3>
                    <p className="label-mono text-fg-subtle">
                      {formatPeriod(
                        item.start,
                        item.end,
                        locale,
                        dict.education.inProgress,
                      )}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-fg-muted sm:text-base">
                    {item.degree[locale]}
                  </p>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <h3 className="mb-5 text-base font-semibold tracking-tight">
              {dict.education.languagesTitle}
            </h3>
            <dl className="space-y-4">
              {spokenLanguages.map((item) => (
                <div key={item.language.en}>
                  <dt className="text-sm font-medium">
                    {item.language[locale]}
                  </dt>
                  <dd className="mt-1 font-mono text-xs text-accent">
                    {item.level[locale]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
