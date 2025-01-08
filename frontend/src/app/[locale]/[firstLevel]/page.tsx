import { notFound } from 'next/navigation';

import { getUiPageSections } from '@/common/models';
import { GetPage } from '@/common/queries';
import { Locale } from '@/i18n/routing';
import { getClient } from '@/libs/apolloClient/apolloClient';
import { Page } from '@/types/types';

type FirstLevelPage = {
  params: Promise<{ firstLevel: string; locale: Locale }>;
  searchParams: Promise<Record<string, string>>;
};

export default async function FirstLevelPage(props: FirstLevelPage) {
  const { firstLevel, locale } = await props.params;

  const { data } = await getClient().query<{ pages: Page[] }>({
    query: GetPage,
    variables: {
      locale: locale,
      url: `/${firstLevel}`,
    },
  });

  if (!data.pages.length) {
    notFound();
  }

  const page = getUiPageSections(data.pages[0]);

  return <main>{page.sections}</main>;
}
