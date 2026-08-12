import type { Education } from "./types";

/** Transcribed from `education` in profile.yaml (`degree` -> pt-br, `degree_en` -> en). */
export const education: Education[] = [
  {
    institution: "UFPR",
    degree: {
      en: "Specialization in Applied Artificial Intelligence",
      "pt-br": "Pós-Graduação em Inteligência Artificial Aplicada",
    },
    start: "2026-01",
    end: "present",
  },
  {
    institution: "UFPR",
    degree: {
      en: "Bachelor's Degree in Systems Analysis and Development",
      "pt-br": "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    },
    start: "2023-02",
    end: "2026-06",
  },
  {
    institution: "IFC — Campus Videira",
    degree: {
      en: "Technical Degree in Computer Science",
      "pt-br": "Técnico em Informática",
    },
    start: "2020-02",
    end: "2022-11",
  },
];
