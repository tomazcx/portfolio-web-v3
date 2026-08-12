import { marqueeStack, skillCategories } from "@/data/skills";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { Section, SectionHeading } from "@/components/layout/primitives";
import { SkillsBento } from "./SkillsBento";
import { techIcons } from "./techIcons";

const darkInvertIcons = new Set(["AWS"]);

function TechMarquee() {
  return (
    <div
      aria-hidden="true"
      className="group relative -mx-5 mb-16 overflow-hidden border-y border-border py-6 sm:-mx-8"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className="animate-marquee flex w-max items-center gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ "--marquee-duration": "48s" } as React.CSSProperties}
      >
        {[...marqueeStack, ...marqueeStack].map((tech, index) => {
          const Icon = techIcons[tech];
          return (
            <span
              key={`${tech}-${index}`}
              className="flex shrink-0 items-center gap-10"
            >
              <span
                title={tech}
                className={cn(
                  "flex items-center justify-center drop-shadow-[0_0_2px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)]",
                  darkInvertIcons.has(tech) && "dark:invert",
                )}
              >
                {Icon ? <Icon size={44} /> : null}
              </span>
              <span className="size-1 rounded-full bg-accent/50" />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function Skills({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        eyebrow={dict.skills.eyebrow}
        title={dict.skills.title}
        subtitle={dict.skills.subtitle}
      />

      <TechMarquee />

      <SkillsBento categories={skillCategories} locale={locale} />
    </Section>
  );
}
