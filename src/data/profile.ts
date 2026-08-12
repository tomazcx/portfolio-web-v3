import type { Localized, SpokenLanguage, Stat } from "./types";

export const profile = {
  name: "Tomaz Cantarelli Xavier",
  shortName: "Tomaz Xavier",
  handle: "tomazcx",
  email: "tomazcx06@gmail.com",
  phone: "+5549991613639",
  phoneDisplay: "+55 49 99161-3639",
  linkedin: "https://www.linkedin.com/in/tomazcx/",
  github: "https://github.com/tomazcx",
  location: { en: "Brazil", "pt-br": "Brasil" } satisfies Localized,
  nationality: { en: "Brazilian", "pt-br": "Brasileiro" } satisfies Localized,
} as const;

export const role: Localized = {
  en: "Senior Fullstack Developer",
  "pt-br": "Desenvolvedor Fullstack Sênior",
};

export const summary: Localized = {
  en: "I turn complex enterprise requirements into fast, resilient, production-grade systems, from headless e-commerce architectures to high-traffic NestJS microservices with cloud infrastructure. Actively contributed to the architecture and development of Nestlé's third largest e-commerce in the world, serving as the primary technical reference on projects impacting 1M+ users and driving strategic technical decisions.",
  "pt-br":
    "Transformo requisitos complexos de negócio em sistemas rápidos, resilientes e prontos para produção, de arquiteturas de e-commerce headless a microsserviços de alto tráfego com infraestrutura em nuvem. Participei ativamente da arquitetura e desenvolvimento do terceiro maior e-commerce da Nestlé no mundo, sendo referência técnica em projetos com impacto em mais de 1 milhão de usuários e conduzindo decisões técnicas estratégicas.",
};

export const stats: Stat[] = [
  {
    id: "years",
    value: 5,
    suffix: "+",
    label: { en: "Years of experience", "pt-br": "Anos de experiência" },
  },
  {
    id: "users",
    value: 1,
    suffix: "M+",
    label: { en: "Users impacted", "pt-br": "Usuários impactados" },
  },
  {
    id: "projects",
    value: 20,
    suffix: "+",
    label: {
      en: "Enterprise-level projects for a multinational",
      "pt-br": "Projetos de nível corporativo para uma multinacional",
    },
  },
  {
    id: "cost",
    value: 80,
    suffix: "%",
    label: {
      en: "Operational cost reduction by implementing systems I architected and built",
      "pt-br":
        "Redução de custo operacional ao implementar sistemas que arquitetei e desenvolvi",
    },
  },
];

export const spokenLanguages: SpokenLanguage[] = [
  {
    language: { en: "Portuguese", "pt-br": "Português" },
    level: { en: "Native", "pt-br": "Nativo" },
  },
  {
    language: { en: "English", "pt-br": "Inglês" },
    level: { en: "Advanced — C1", "pt-br": "Avançado — C1" },
  },
];

export const extras = {
  availability: { en: "2 weeks", "pt-br": "2 semanas" } satisfies Localized,
  workPreference: { en: "Remote", "pt-br": "Remoto" } satisfies Localized,
  willingToRelocate: false,
} as const;
