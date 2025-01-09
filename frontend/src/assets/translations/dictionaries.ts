import { Locale } from '@/i18n/config';

const dictionaries: Record<Locale, any> = {
  en: () => import('./en.json').then((r) => r.default),
  de: () => import('./de.json').then((r) => r.default),
  es: () => import('./es.json').then((r) => r.default),
  ro: () => import('./ro.json').then((r) => r.default),
};

export const getDictionary = (lang: Locale) => {
  return dictionaries[lang]();
};
