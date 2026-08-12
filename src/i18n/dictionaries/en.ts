/**
 * UI strings. CV content lives in `src/data/` instead.
 * This object's inferred shape is the `Dictionary` contract every other
 * locale must satisfy, so keys can't silently drift apart.
 */
export const en = {
  meta: {
    title: "Tomaz Cantarelli Xavier — Senior Fullstack Developer",
    description:
      "I turn complex enterprise requirements into fast, resilient, production-grade systems. Technical reference on Nestlé projects impacting 1M+ users.",
  },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    menu: "Menu",
    close: "Close menu",
  },
  a11y: {
    skipToContent: "Skip to content",
    toggleTheme: "Toggle colour theme",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    switchLanguage: "Switch language to Portuguese",
    profilePhoto: "Portrait of Tomaz Cantarelli Xavier",
  },
  hero: {
    intro: "Hi, I'm",
    scrollHint: "Scroll",
    ctaContact: "Get in touch",
    ctaExperience: "See experience",
  },
  about: {
    eyebrow: "About",
    title: "Building systems end to end",
    educationLabel: "Education",
    languagesLabel: "Languages",
    locationLabel: "Location",
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've worked",
    present: "Present",
    current: "Current",
    yearsShort: (n: number) => (n === 1 ? "1 yr" : `${n} yrs`),
    monthsShort: (n: number) => (n === 1 ? "1 mo" : `${n} mos`),
  },
  skills: {
    eyebrow: "Skills",
    title: "Technologies I use",
    subtitle:
      "Check out all the technologies I use professionally in my projects.",
  },
  education: {
    eyebrow: "Education",
    title: "Education & languages",
    inProgress: "In progress",
    languagesTitle: "Languages",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    subtitle:
      "Reach me by email, LinkedIn or phone, and check out my GitHub for more projects.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    whatsappLabel: "WhatsApp",
    copy: "Copy",
    copied: "Copied",
    copiedAnnounce: (what: string) => `${what} copied to clipboard`,
    openLink: "Open",
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind CSS and React Bits.",
    rights: (year: number) => `© ${year} Tomaz Cantarelli Xavier`,
    backToTop: "Back to top",
  },
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist.",
    back: "Back home",
  },
};

export type Dictionary = typeof en;
