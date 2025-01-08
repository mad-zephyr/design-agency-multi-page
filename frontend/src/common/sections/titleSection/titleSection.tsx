import cn from 'classnames';
import { FC } from 'react';

import { Htag, Ptag } from '@/common/ui';
import { Maybe } from '@/types/types';

import { PatternSix, TDecor } from '../components';
import styles from './styles.module.sass';

export type TTitleSection = {
  title?: Maybe<string>;
  description?: Maybe<string>;
  textAlign: 'center' | 'left' | 'right';

  decor?: TDecor;
};

export const TitleSection: FC<TTitleSection> = ({
  title,
  description,
  textAlign,
}) => {
  const mainClass = cn(styles.content, styles[textAlign]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={mainClass}>
            {title && <Htag type="h1" content={title} />}
            <Ptag>{description}</Ptag>
          </div>
          <PatternSix />
        </div>
      </div>
    </section>
  );
};
