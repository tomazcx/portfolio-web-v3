import Image from "next/image";
import profilePhoto from "@/assets/profile.png";
import { profile, role, stats } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { AccessibleSplitText } from "@/components/motion/AccessibleSplitText";
import { HeroBackground } from "@/components/motion/HeroBackground";
import { Container } from "@/components/layout/primitives";
import CountUp from "@/components/reactbits/CountUp";
import DecryptedText from "@/components/reactbits/DecryptedText";
import Magnet from "@/components/reactbits/Magnet";
import TiltedCard from "@/components/reactbits/TiltedCard";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative">
      <HeroBackground />

      <Container className="relative pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div>
            <p className="label-mono mb-4">
              <DecryptedText
                text={`> ${profile.handle} --whoami`}
                animateOn="view"
                sequential
                revealDirection="start"
                speed={38}
                maxIterations={12}
                parentClassName="font-mono"
                className="text-accent"
                encryptedClassName="text-fg-subtle"
              />
            </p>

            <p className="mb-2 text-lg text-fg-muted">{dict.hero.intro}</p>

            <h1>
              <AccessibleSplitText
                tag="span"
                text={profile.name}
                className="text-balance-heading block text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              />
              <span className="sr-only"> - </span>
              <span className="mt-5 flex items-center gap-3 text-lg font-medium text-accent sm:text-xl">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 8 10"
                  className="h-[0.7em] w-[0.56em] shrink-0 fill-current"
                >
                  <polygon points="0,0 8,5 0,10" />
                </svg>
                {role[locale]}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {dict.meta.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnet padding={60} magnetStrength={4}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
                >
                  {dict.hero.ctaContact}
                  <span aria-hidden="true">→</span>
                </a>
              </Magnet>
              <Magnet padding={60} magnetStrength={4}>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {dict.hero.ctaExperience}
                </a>
              </Magnet>
            </div>
          </div>

          <div className="mx-auto w-[min(260px,64vw)] lg:w-[340px]">
            <TiltedCard className="aspect-square w-full">
              <div className="relative size-full overflow-hidden rounded-2xl border border-border bg-surface-2">
                <Image
                  src={profilePhoto}
                  alt={dict.a11y.profilePhoto}
                  title={profile.name}
                  fill
                  sizes="(max-width: 1024px) 280px, 340px"
                  placeholder="blur"
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/25"
                />
              </div>
            </TiltedCard>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:mt-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id}>
              <dt className="sr-only">{stat.label[locale]}</dt>
              <dd>
                <span className="flex items-baseline font-mono text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  <CountUp to={stat.value} duration={1.6} separator="" />
                  <span className="text-accent">{stat.suffix}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-2 block text-sm leading-snug text-fg-muted"
                >
                  {stat.label[locale]}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
