
export type Locale = "en" | "pt-br";

export type Localized<T = string> = Record<Locale, T>;

export type Bullet = {
  text: Localized;
  tags: string[];
};

export type Experience = {
  id: string;
  company: string;
  via?: Localized;
  role: Localized;
  location: Localized;
  start: string;
  end: string | "present";
  bullets: Bullet[];
};

export type SkillLevel = "daily" | "proficient" | "comfortable" | "familiar";

export type SkillCategory = {
  id: string;
  label: Localized;
  groups: { level: SkillLevel; items: string[] }[];
};

export type Education = {
  institution: string;
  degree: Localized;
  start: string;
  end: string | "present";
};

export type SpokenLanguage = {
  language: Localized;
  level: Localized;
};

export type Stat = {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: Localized;
};
