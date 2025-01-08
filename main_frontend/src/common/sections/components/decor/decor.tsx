import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.sass';

export type TDecor = {
  posX?: 'left' | 'right' | 'center';
  posY?: 'top' | 'bottom';
};

export const Decor: FC<TDecor> = ({ posX = 'left', posY = 'bottom' }) => {
  return <div className={cn(styles.decor, styles[posX], styles[posY])} />;
};
