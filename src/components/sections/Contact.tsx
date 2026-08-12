import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/motion/Reveal";
import { Section, SectionHeading } from "@/components/layout/primitives";
import Magnet from "@/components/reactbits/Magnet";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { CopyButton } from "./CopyButton";

export function Contact({ dict }: { dict: Dictionary }) {
  const channels = [
    {
      id: "email",
      label: dict.contact.emailLabel,
      display: profile.email,
      href: `mailto:${profile.email}`,
      copyValue: profile.email,
      external: false,
      icon: "@",
    },
    {
      id: "linkedin",
      label: dict.contact.linkedinLabel,
      display: `in/${profile.handle}`,
      href: profile.linkedin,
      copyValue: undefined,
      external: true,
      icon: "in",
    },
    {
      id: "github",
      label: dict.contact.githubLabel,
      display: profile.handle,
      href: profile.github,
      copyValue: undefined,
      external: true,
      icon: "{ }",
    },
    {
      id: "whatsapp",
      label: dict.contact.whatsappLabel,
      display: profile.phoneDisplay,
      href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
      copyValue: profile.phoneDisplay,
      external: true,
      icon: "wa",
    },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        id="contact"
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {channels.map((channel, index) => (
          <li key={channel.id}>
            <Reveal delay={(index % 2) * 0.06}>
              <SpotlightCard
                className="h-full p-6"
                spotlightColor="rgba(49, 94, 255, 0.16)"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="label-mono mb-3 text-fg-subtle">
                      {channel.label}
                    </p>
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noreferrer noopener" : undefined}
                      className="block truncate text-lg font-medium tracking-tight transition-colors hover:text-accent sm:text-xl"
                    >
                      {channel.display}
                    </a>
                  </div>

                  <Magnet padding={40} magnetStrength={5}>
                    <span
                      aria-hidden="true"
                      className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface-2 font-mono text-sm text-accent"
                    >
                      {channel.icon}
                    </span>
                  </Magnet>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noreferrer noopener" : undefined}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-fg-subtle transition-colors hover:border-accent hover:text-accent"
                  >
                    {dict.contact.openLink}
                  </a>
                  {channel.copyValue ? (
                    <CopyButton
                      value={channel.copyValue}
                      labelCopy={dict.contact.copy}
                      labelCopied={dict.contact.copied}
                      announceCopied={dict.contact.copiedAnnounce(
                        channel.label,
                      )}
                    />
                  ) : null}
                </div>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
