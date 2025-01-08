import { LocalePrefix, Pathnames } from 'next-intl/routing';

export type Locales = [...typeof locales];
export type Locale = (typeof locales)[number];

export const defaultLocale = new Intl.Locale('en').baseName;
export const locales = ['en', 'de', 'es', 'ro'];

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
