export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  descriptions: readonly string[];
  technologies: readonly string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
}

export interface Translations {
  meta: { title: string; description: string };
  hero: { name: string; roles: readonly string[] };
  bio: {
    paragraph1: string;
    paragraph2: string;
    socialsLabel: string;
    socialsBold: string;
  };
  sections: { experiences: string; projects: string; skills: string };
  experiences: {
    empreender: ExperienceEntry;
    botslab: ExperienceEntry;
    freelancer: ExperienceEntry;
  };
  projects: {
    ovni: ProjectEntry;
    sttp: ProjectEntry;
    caddie: ProjectEntry;
    "another-project": ProjectEntry;
    "gestao-lojao-do-bras": ProjectEntry;
    "sds-wiki": ProjectEntry;
  };
  status: {
    building: string;
    live: string;
    comingSoon: string;
    private: string;
  };
  quote: { text: string; author: string };
}
