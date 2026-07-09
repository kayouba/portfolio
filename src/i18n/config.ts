export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export const PROJECT_SLUGS = {
  cdm2026: { fr: 'cdm-2026', en: 'world-cup-2026' },
  underperformance: { fr: 'sous-performance', en: 'underperformance' },
  f1: { fr: 'f1-predictibilite', en: 'f1-predictability' },
  powerbi: { fr: 'power-bi', en: 'power-bi' },
} as const;

export type ProjectKey = keyof typeof PROJECT_SLUGS;

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? clean : `/en${clean}`;
}

export function projectPath(locale: Locale, key: ProjectKey): string {
  return localizedPath(locale, `/projets/${PROJECT_SLUGS[key][locale]}/`).replace(
    '/en/projets/',
    '/en/projects/'
  );
}
