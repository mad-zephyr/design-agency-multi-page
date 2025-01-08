import { getRequestConfig, GetRequestConfigParams } from 'next-intl/server';

import { Locale, routing } from './routing';

export default getRequestConfig(
  async ({ requestLocale }: GetRequestConfigParams) => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.

    let locale = await requestLocale;

    if (!locale && !routing.locales.includes(locale as Locale)) {
      locale = routing.defaultLocale;
    }

    return {
      locale,
      messages: (await import(`../assets/translations/${locale}.json`)).default,
    };
  }
);
