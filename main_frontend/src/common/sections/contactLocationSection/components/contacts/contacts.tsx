import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { FC } from 'react';

import { ContactWrapper, PatternTwo } from '@/common/sections/components';
import { Htag } from '@/common/ui';

import styles from './styles.module.sass';

export type TContacts = {
  title: string;
  contents?: BlocksContent[];
};

export const Contacts: FC<TContacts> = ({ title, contents }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Htag type="h2" content={title} />

        <div className={styles.wrapper}>
          {contents?.map((content, i) => (
            <ContactWrapper key={i}>
              <BlocksRenderer content={content} />
            </ContactWrapper>
          ))}
        </div>
      </div>
      <PatternTwo />
    </div>
  );
};
