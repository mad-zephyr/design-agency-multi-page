import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.sass';

type TPattern = {
  shift?: 'left' | 'center' | 'right';
};

export const PatternTwo: FC<TPattern> = ({ shift }) => {
  const circles = Array(2).fill('');

  return (
    <div
      className={cn(styles.pattern, {
        [styles.left]: shift === 'left',
        [styles.center]: shift === 'center',
        [styles.right]: shift === 'right',
      })}
    >
      <div className={styles.row}>
        {circles.map((_, i) => (
          <div key={i} className={styles.circle} />
        ))}
      </div>
    </div>
  );
};
