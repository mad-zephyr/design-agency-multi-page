import { getLocale } from 'next-intl/server';
import { PropsWithChildren } from 'react';

import { getFooterData } from '@/common/models/getFooterData';
import { getUiHeaderData } from '@/common/models/getHeaderData';
import { Footer, Header } from '@/common/modules';
import { GetTechnical } from '@/common/queries';
import { getClient } from '@/libs/apolloClient/apolloClient';
import type { Footer as TFooter, Header as THeader } from '@/types/types';

type TTechncalData = {
  header: THeader;
  footer: TFooter;
};

import styles from './template.module.sass';

export default async function Template({ children }: PropsWithChildren) {
  const locale = await getLocale();

  const { data } = await getClient().query<TTechncalData>({
    query: GetTechnical,
    variables: {
      locale,
    },
  });

  const headerData = getUiHeaderData(data.header);
  const footerData = getFooterData(data.footer);

  return (
    <>
      <Header links={headerData.links} />
      <main className={styles.main}>{children}</main>
      <Footer data={footerData} />
    </>
  );
}
