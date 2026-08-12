import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "nestle-nh-labs",
    company: "Nestlé",
    role: {
      en: "Senior Developer Analyst",
      "pt-br": "Analista Desenvolvedor Sênior",
    },
    location: { en: "Remote", "pt-br": "Remoto" },
    start: "2026-02",
    end: "present",
    bullets: [
      {
        text: {
          en: "Led the architecture and development of Puravida's e-commerce migration to Adobe Commerce, with a headless Next.js frontend, driving technical decisions throughout the full development cycle.",
          "pt-br":
            "Conduzi a arquitetura e o desenvolvimento da migração do e-commerce da Puravida para Adobe Commerce, com frontend headless em Next.js, liderando decisões técnicas ao longo de todo o ciclo de desenvolvimento.",
        },
        tags: ["Next.js", "Adobe Commerce", "Headless", "ISR", "Redis", "Go"],
      },
      {
        text: {
          en: "Led migrations of legacy systems and data structures to a modern, robust architecture, improving software quality, reducing technical debt, and delivering innovative solutions aligned with business requirements.",
          "pt-br":
            "Conduzi migrações de sistemas legados e estruturas de dados para uma arquitetura moderna e robusta, elevando a qualidade do software, reduzindo débito técnico e entregando soluções inovadoras alinhadas às estratégias do negócio.",
        },
        tags: ["Architecture", "Migration", "Legacy", "TypeScript"],
      },
      {
        text: {
          en: "Planned and architected complete e-commerce modules integrating with external systems from international Nestlé teams via REST APIs and OAuth2, reducing delivery timelines by up to 50% and accelerating roadmap execution, strengthening the team's reputation within the organization.",
          "pt-br":
            "Planejei a arquitetura de módulos completos de e-commerce, promovendo integrações com sistemas externos de times internacionais da Nestlé via APIs REST e OAuth2, reduzindo prazos de entrega em até 50% e acelerando a execução do roadmap, o que fortaleceu a reputação do time dentro da empresa.",
        },
        tags: ["PHP", "REST API", "OAuth2", "Integration", "Tech Leadership"],
      },
      {
        text: {
          en: "Led the development of a design system from scratch, delivering a reusable ReactJS component library that reduced feature development time by 60% across the project.",
          "pt-br":
            "Liderei o desenvolvimento de um design system do zero, entregando uma biblioteca de componentes ReactJS reutilizáveis que reduziu o tempo de desenvolvimento de novas funcionalidades em 60% em todo o projeto.",
        },
        tags: ["React", "Angular", "Design System", "DX"],
      },
      {
        text: {
          en: "Designed and delivered high-availability RESTful backend services, increasing platform scalability and reliability for high-traffic e-commerce operations.",
          "pt-br":
            "Projetei e entreguei serviços backend RESTful de alta disponibilidade, aumentando a escalabilidade e a confiabilidade da plataforma para operações de e-commerce de alto tráfego.",
        },
        tags: ["Backend", "API", "Webhooks", "Scalability"],
      },
    ],
  },
  {
    id: "nestle-mathex",
    company: "Nestlé",
    via: {
      en: "Contracted through Mathex Consulting",
      "pt-br": "Terceirizado pela Consultoria Mathex",
    },
    role: {
      en: "Fullstack Developer",
      "pt-br": "Desenvolvedor Fullstack",
    },
    location: { en: "Remote", "pt-br": "Remoto" },
    start: "2024-03",
    end: "2026-02",
    bullets: [
      {
        text: {
          en: "Served as the primary technical reference on a large-scale e-commerce project directly impacting 100,000+ active users, leading architecture planning and technical decisions across multiple e-commerce platforms and CMS.",
          "pt-br":
            "Atuei como principal referência técnica em um projeto de e-commerce de grande escala com impacto direto em mais de 100.000 usuários ativos, liderando o planejamento de arquitetura e decisões técnicas em múltiplas plataformas de e-commerce e CMS.",
        },
        tags: [
          "Architecture",
          "Tech Leadership",
          "Next.js",
          "Headless",
          "CMS",
          "Java",
          "Spring",
        ],
      },
      {
        text: {
          en: "Led the migration of tens of thousands of records from a legacy database to a modernized MongoDB structure, ensuring data consistency, integrity, and zero operational downtime on a business-critical system.",
          "pt-br":
            "Liderei a migração de dezenas de milhares de registros de um banco de dados legado para uma nova estrutura modernizada em MongoDB, garantindo consistência, integridade dos dados e zero impacto na continuidade operacional de um sistema crítico da empresa.",
        },
        tags: ["MongoDB", "Migration", "Data Integrity", "Redis", "Go"],
      },
      {
        text: {
          en: "Designed and built scalable ReactJS component libraries and reusable UI modules aligned with a shared internal design system, accelerating delivery consistency across eCommerce and retail CMS solutions.",
          "pt-br":
            "Projetei e construí bibliotecas de componentes ReactJS escaláveis e módulos de UI reutilizáveis alinhados a um design system interno compartilhado, acelerando a consistência de entregas em soluções de e-commerce e CMS de varejo.",
        },
        tags: ["React", "Design System", "Shopify", "React Native"],
      },
      {
        text: {
          en: "Improved cross-team alignment and delivery predictability by producing technical documentation, system diagrams, and solution prototypes, collaborating closely with Product, UX, and marketing stakeholders in an agile environment.",
          "pt-br":
            "Melhorei o alinhamento entre times e a previsibilidade de entregas produzindo documentação técnica, diagramas de sistema e protótipos de solução, colaborando de perto com stakeholders de Produto, UX e marketing em ambiente ágil.",
        },
        tags: ["Documentation", "Agile", "Prototyping", "Cross-functional"],
      },
      {
        text: {
          en: "Continuously improved frontend performance, scalability, and maintainability across multiple concurrent projects, ensuring high-quality user experiences on high-traffic eCommerce platforms.",
          "pt-br":
            "Aprimorei continuamente performance, escalabilidade e manutenibilidade do frontend em múltiplos projetos simultâneos, garantindo experiências de alta qualidade em plataformas de e-commerce de alto tráfego.",
        },
        tags: ["Performance", "Next.js", "TypeScript", "Playwright"],
      },
      {
        text: {
          en: "Designed cloud infrastructure on Azure and AWS with CI/CD pipelines for microservices using Nest.js and event-driven messaging via RabbitMQ and Azure Event Hub.",
          "pt-br":
            "Projetei infraestrutura cloud no Azure e AWS com pipelines de CI/CD para microsserviços com Nest.js e mensageria orientada a eventos via RabbitMQ e Azure Event Hub.",
        },
        tags: [
          "Azure",
          "AWS",
          "CI/CD",
          "NestJS",
          "RabbitMQ",
          "Microservices",
          "WebSockets",
        ],
      },
    ],
  },
  {
    id: "bellosoft",
    company: "Bellosoft",
    role: { en: "Web Developer", "pt-br": "Desenvolvedor Web" },
    location: { en: "Remote", "pt-br": "Remoto" },
    start: "2023-06",
    end: "2024-03",
    bullets: [
      {
        text: {
          en: "Delivered 6+ projects for international clients across the full development lifecycle, from requirements analysis and design through development, QA, and maintenance, spanning dashboards, ERP systems, e-commerce platforms, and institutional websites.",
          "pt-br":
            "Entreguei 6+ projetos para clientes internacionais ao longo de todo o ciclo de desenvolvimento, da análise de requisitos e design até o desenvolvimento, QA e manutenção, abrangendo dashboards, sistemas ERP, plataformas de e-commerce e sites institucionais.",
        },
        tags: ["Fullstack", "ERP", "Dashboards", "E-commerce", "QA"],
      },
      {
        text: {
          en: "Developed RESTful APIs integrated with big data solutions for visualization and analysis of international call center data, enabling greater operational visibility and data-driven decision-making.",
          "pt-br":
            "Desenvolvi APIs RESTful integradas a soluções de big data para visualização e análise de dados de call centers internacionais, viabilizando maior visibilidade operacional e suporte à tomada de decisão baseada em dados.",
        },
        tags: ["Node.js", "REST", "Big Data", "Chart.js", "Java", "Spring"],
      },
      {
        text: {
          en: "Reduced feature delivery time by 80% by standardizing and structuring the system architecture, establishing solid development foundations and increasing delivery predictability.",
          "pt-br":
            "Reduzi em 80% o tempo de entrega de novas funcionalidades ao padronizar e estruturar a arquitetura do sistema, estabelecendo bases sólidas de desenvolvimento e aumentando a previsibilidade das entregas.",
        },
        tags: ["Architecture", "Standards", "DX", "Process"],
      },
    ],
  },
  {
    id: "unifique",
    company: "Unifique Soluções Tecnológicas",
    role: {
      en: "Back-end Developer Intern",
      "pt-br": "Estagiário de Desenvolvimento Back-end",
    },
    location: {
      en: "Videira, SC, Brazil",
      "pt-br": "Videira, SC, Brasil",
    },
    start: "2021-07",
    end: "2022-01",
    bullets: [
      {
        text: {
          en: "Developed an internal HR system end-to-end, from requirements analysis and Figma prototyping through backend implementation, QA, and maintenance, optimizing employee management and performance evaluation for the HR department.",
          "pt-br":
            "Desenvolvi um sistema interno de RH de ponta a ponta, da análise de requisitos e prototipação no Figma até a implementação backend, QA e manutenção, otimizando a gestão de colaboradores e avaliação de desempenho para o departamento de RH.",
        },
        tags: ["PHP", "MariaDB", "Figma", "Fullstack"],
      },
      {
        text: {
          en: "Ensured code quality and collaborative workflows by applying Git Flow for version control throughout the entire development cycle.",
          "pt-br":
            "Garanti a qualidade do código e fluxos de trabalho colaborativos aplicando Git Flow para controle de versão ao longo de todo o ciclo de desenvolvimento.",
        },
        tags: ["Git", "Git Flow", "Code Quality"],
      },
    ],
  },
];
