import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getUiPageSections } from '@/common/models';
import { GetPage, GetPageSeo } from '@/common/queries';
import { Locale } from '@/i18n/routing';
import { getClient } from '@/libs/apolloClient/apolloClient';
import { generateSeo } from '@/libs/helpers';
import { Page } from '@/types/types';

type FirstLevelPage = {
  params: Promise<{ firstLevel: string; locale: Locale }>;
  searchParams: Promise<Record<string, string>>;
};

export async function generateMetadata(
  props: FirstLevelPage
): Promise<Metadata> {
  const { firstLevel, locale } = await props.params;

  try {
    const { data } = await getClient().query<{
      pages: Page[];
    }>({
      query: GetPageSeo,
      variables: {
        locale: locale,
        url: `/${firstLevel}`,
      },
    });

    return await generateSeo(data?.pages?.[0].seo);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return await generateSeo();
  }
}

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

  return <>{page.sections}</>;
}
