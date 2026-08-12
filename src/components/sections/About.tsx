import { education } from "@/data/education";
import { profile, spokenLanguages, summary } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/motion/Reveal";
import { Section, SectionHeading } from "@/components/layout/primitives";

// The UFPR "Tecnólogo" (index 1) is already completed as of the site's
// current date, so it doubles as the "graduated" fact for this card.
const graduateFact = {
  en: `Graduate — ${education[1].degree.en}`,
  "pt-br": `Graduado — ${education[1].degree["pt-br"]}`,
};

export function About({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const facts = [
    { label: dict.about.locationLabel, value: profile.location[locale] },
    { label: dict.about.educationLabel, value: graduateFact[locale] },
    {
      label: dict.about.languagesLabel,
      value: spokenLanguages
        .map((item) => item.language[locale])
        .join(" · "),
    },
  ];

  return (
    <Section id="about">
      <SectionHeading
        id="about"
        eyebrow={dict.about.eyebrow}
        title={dict.about.title}
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-fg-muted sm:text-xl sm:leading-relaxed">
            {summary[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-surface px-5 py-4">
                <dt className="label-mono mb-1.5 text-fg-subtle">
                  {fact.label}
                </dt>
                <dd className="text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
