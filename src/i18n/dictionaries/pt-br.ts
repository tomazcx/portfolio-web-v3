import type { Dictionary } from "./en";

export const ptBR: Dictionary = {
  meta: {
    title: "Tomaz Cantarelli Xavier — Desenvolvedor Fullstack Sênior",
    description:
      "Transformo requisitos complexos de negócio em sistemas rápidos, resilientes e prontos para produção. Referência técnica em projetos da Nestlé com impacto em mais de 1 milhão de usuários.",
  },
  nav: {
    about: "Sobre",
    experience: "Experiência",
    skills: "Skills",
    education: "Formação",
    contact: "Contato",
    menu: "Menu",
    close: "Fechar menu",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    toggleTheme: "Alternar tema de cores",
    themeLight: "Mudar para o tema claro",
    themeDark: "Mudar para o tema escuro",
    switchLanguage: "Mudar idioma para inglês",
    profilePhoto: "Retrato de Tomaz Cantarelli Xavier",
  },
  hero: {
    intro: "Olá, eu sou o",
    scrollHint: "Role",
    ctaContact: "Entrar em contato",
    ctaExperience: "Ver experiência",
  },
  about: {
    eyebrow: "Sobre",
    title: "Construindo sistemas de ponta a ponta",
    educationLabel: "Formação",
    languagesLabel: "Idiomas",
    locationLabel: "Localização",
  },
  experience: {
    eyebrow: "Experiência",
    title: "Onde eu trabalhei",
    present: "Atual",
    current: "Atual",
    yearsShort: (n: number) => (n === 1 ? "1 ano" : `${n} anos`),
    monthsShort: (n: number) => (n === 1 ? "1 mês" : `${n} meses`),
  },
  skills: {
    eyebrow: "Skills",
    title: "Tecnologias que utilizo",
    subtitle:
      "Confira todas as tecnologias que utilizo em meus projetos de forma profissional.",
  },
  education: {
    eyebrow: "Formação",
    title: "Formação & idiomas",
    inProgress: "Em andamento",
    languagesTitle: "Idiomas",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar",
    subtitle:
      "Contate-me pelo e-mail, LinkedIn ou celular e confira meu GitHub para mais projetos.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    whatsappLabel: "WhatsApp",
    copy: "Copiar",
    copied: "Copiado",
    copiedAnnounce: (what: string) => `${what} copiado para a área de transferência`,
    openLink: "Abrir",
  },
  footer: {
    builtWith: "Feito com Next.js, Tailwind CSS e React Bits.",
    rights: (year: number) => `© ${year} Tomaz Cantarelli Xavier`,
    backToTop: "Voltar ao topo",
  },
  notFound: {
    title: "Página não encontrada",
    description: "A página que você procura não existe.",
    back: "Voltar ao início",
  },
};
