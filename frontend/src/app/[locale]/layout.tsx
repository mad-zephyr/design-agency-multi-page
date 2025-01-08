import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { jost } from '@/assets/fonts/fonts';
import { Locale, routing } from '@/i18n/routing';
import { ApolloWrapper } from '@/libs/apolloClient/apolloWrapper';
import { SmoothScrolling } from '@/libs/lenis/smoothScrolling';

type TRootLayout = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleRootLayout({
  children,
  params,
}: PropsWithChildren<TRootLayout>) {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${jost.variable}`}>
        <SmoothScrolling>
          <NextIntlClientProvider messages={messages}>
            <ApolloWrapper>{children}</ApolloWrapper>
          </NextIntlClientProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
