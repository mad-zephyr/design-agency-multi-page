import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { getUiPageSections } from '@/common/models';
import { GetPage } from '@/common/queries/getPage.query';
import { Locale, routing } from '@/i18n/routing';
import { getClient } from '@/libs/apolloClient/apolloClient';
import { Page } from '@/types/types';

type THome = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function Home({ params }: THome) {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const { data } = await getClient().query<{ pages: Page[] }>({
    query: GetPage,
    variables: {
      locale,
      url: '/',
    },
  });

  const page = getUiPageSections(data.pages[0]);

  return <>{page.sections}</>;
}
