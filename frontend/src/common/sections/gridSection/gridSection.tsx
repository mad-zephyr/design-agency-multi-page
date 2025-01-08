import { FC, PropsWithChildren } from 'react';

import { Section, TDecor } from '../components';
import styles from './styles.module.sass';

type TGridSection = {
  decor?: TDecor;
};

export const GridSection: FC<PropsWithChildren<TGridSection>> = ({
  decor,
  children,
}) => {
  return (
    <Section decor={decor} noMarginBottomFor="480px">
      <div className={styles.content}>{children}</div>
    </Section>
  );
};
