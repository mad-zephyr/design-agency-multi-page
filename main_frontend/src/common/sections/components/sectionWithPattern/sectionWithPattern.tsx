import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { TDecor } from '../decor/decor';
import { PatternSix } from '../patterns/patternSix/patternSix';
import { Section } from '../section/section';
import styles from './styles.module.sass';

type TSectionWithPattern = HTMLAttributes<HTMLElement> & {
  decor?: TDecor;
  noPaddingFor?: '480px' | '768px';
  noMarginBottomFor?: '480px' | '768px';
};

export const SectionWithPattern: FC<PropsWithChildren<TSectionWithPattern>> = ({
  children,
  decor,
  noPaddingFor,
  noMarginBottomFor,
  ...props
}) => {
  return (
    <Section
      {...props}
      decor={decor}
      noPaddingFor={noPaddingFor}
      noMarginBottomFor={noMarginBottomFor}
    >
      <div className={styles.main}>
        {children}
        <PatternSix />
      </div>
    </Section>
  );
};
