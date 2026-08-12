import type { Localized, SkillCategory, SkillLevel } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: { en: "Programming Languages", "pt-br": "Linguagens" },
    groups: [
      {
        level: "proficient",
        items: ["TypeScript", "JavaScript", "SQL", "Go", "Java", "PHP"],
      },
      { level: "familiar", items: ["C#", "Python"] },
    ],
  },
  {
    id: "frontend",
    label: { en: "Frontend", "pt-br": "Frontend" },
    groups: [
      {
        level: "proficient",
        items: [
          "React",
          "Next.js",
          "Vue.js",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "SASS",
          "Material UI",
          "Redux",
          "NextAuth",
          "Chart.js",
        ],
      },
      { level: "comfortable", items: ["Angular"] },
      { level: "familiar", items: ["Svelte", "React Native"] },
    ],
  },
  {
    id: "backend",
    label: { en: "Backend", "pt-br": "Backend" },
    groups: [
      {
        level: "proficient",
        items: [
          "Node.js",
          "NestJS",
          "PHP",
          "Express",
          "Fastify",
          "Laravel",
          "Go",
          "Socket.io",
          "WebSockets",
          "Spring Boot",
          "Spring Framework",
          "Java",
        ],
      },
      { level: "comfortable", items: ["Magento"] },
      { level: "familiar", items: [".NET", "Django"] },
    ],
  },
  {
    id: "databases",
    label: { en: "Databases", "pt-br": "Bancos de dados" },
    groups: [
      {
        level: "comfortable",
        items: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB", "Redis"],
      },
    ],
  },
  {
    id: "devops",
    label: { en: "DevOps & Infra", "pt-br": "DevOps & Infra" },
    groups: [
      {
        level: "comfortable",
        items: ["Docker", "CI/CD", "Azure", "RabbitMQ"],
      },
      {
        level: "familiar",
        items: ["AWS", "GitHub Actions", "Kafka", "Jenkins"],
      },
    ],
  },
  {
    id: "testing",
    label: { en: "Testing", "pt-br": "Testes" },
    groups: [
      { level: "comfortable", items: ["Jest", "Testing Library", "Vitest"] },
      { level: "familiar", items: ["Cypress", "Playwright"] },
    ],
  },
];

export const skillLevelLabel: Record<SkillLevel, Localized> = {
  daily: { en: "Daily driver", "pt-br": "Uso diário" },
  proficient: { en: "Proficient", "pt-br": "Domínio" },
  comfortable: { en: "Comfortable", "pt-br": "Confortável" },
  familiar: { en: "Familiar", "pt-br": "Familiarizado" },
};

export const marqueeStack: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Go",
  "Java",
  "Spring",
  "PHP",
  "Angular",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "MySQL",
  "Docker",
  "Azure",
  "AWS",
  "Tailwind CSS",
  "Playwright",
  "Vue.js",
];
