import cn from 'classnames';
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

import { calculateDecorPosition } from '@/libs/helpers';

import { Decor, TDecor } from '../decor/decor';
import styles from './styles.module.sass';

type TSection = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  decor?: TDecor;
  noPaddingFor?: '480px' | '768px';
  noMarginBottomFor?: '480px' | '768px';
};

export const Section: FC<PropsWithChildren<TSection>> = ({
  children,
  decor,
  noPaddingFor,
  noMarginBottomFor,
  className,
  style,
  ...props
}) => {
  const decorPosition = calculateDecorPosition(decor?.posX, decor?.posY);

  const mainClass = cn(styles.section, className, {
    [styles.noMobilePadding]: noPaddingFor === '480px',
    [styles.noMobileMaginBottom]: noMarginBottomFor === '480px',
  });

  return (
    <section className={mainClass} style={style} {...props}>
      <div className={styles.wrapper}>{children}</div>
      {decorPosition && (
        <Decor posX={decorPosition.posX} posY={decorPosition.posY} />
      )}
    </section>
  );
};
