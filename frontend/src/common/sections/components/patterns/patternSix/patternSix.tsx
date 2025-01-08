import { FC } from 'react';

import styles from './styles.module.sass';

export const PatternSix: FC = () => {
  const circles = Array(3).fill('');

  return (
    <div className={styles.pattern}>
      <div className={styles.row}>
        {circles.map((_, i) => (
          <div key={i} className={styles.circle} />
        ))}
      </div>
      <div className={styles.row}>
        {circles.map((_, i) => (
          <div key={i} className={styles.circle} />
        ))}
      </div>
    </div>
  );
};
