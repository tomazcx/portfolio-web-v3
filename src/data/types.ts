/**
 * Shapes for the CV content transcribed from `profile.yaml`.
 * `profile.yaml` stays the source of truth and is never written to.
 */

export type Locale = "en" | "pt-br";

/** A string that exists in both supported locales. */
export type Localized<T = string> = Record<Locale, T>;

export type Bullet = {
  /** `text` / `text_pt` in profile.yaml */
  text: Localized;
  tags: string[];
};

export type Experience = {
  id: string;
  company: string;
  /** Staffing arrangement, when the employer differs from the client. */
  via?: Localized;
  role: Localized;
  location: Localized;
  /** `YYYY-MM` */
  start: string;
  /** `YYYY-MM`, or "present" for the current role. */
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
  /** Rendered after the counter, e.g. "+" or "%". */
  suffix?: string;
  prefix?: string;
  label: Localized;
};
