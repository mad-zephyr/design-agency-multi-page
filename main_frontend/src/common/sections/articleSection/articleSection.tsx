import {
  type BlocksContent,
  BlocksRenderer,
} from '@strapi/blocks-react-renderer';
import { FC } from 'react';

import styles from './styles.module.sass';

type TArticleSection = {
  content?: BlocksContent;
};

export const ArticleSection: FC<TArticleSection> = ({ content }) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <article>{content && <BlocksRenderer content={content} />}</article>
      </div>
    </section>
  );
};
