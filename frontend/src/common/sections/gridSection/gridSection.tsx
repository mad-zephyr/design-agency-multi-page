import { CSSProperties, FC, PropsWithChildren } from 'react';

import { Section, TDecor } from '../components';
import styles from './styles.module.sass';

type TGridSection = {
  decor?: TDecor;
  style?: CSSProperties;
};

export const GridSection: FC<PropsWithChildren<TGridSection>> = ({
  decor,
  style,
  children,
}) => {
  return (
    <Section
      className={styles.marginTopBottom}
      decor={decor}
      style={style}
      noMarginBottomFor="480px"
    >
      <div className={styles.content}>{children}</div>
    </Section>
  );
};
