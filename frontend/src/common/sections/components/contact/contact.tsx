import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.sass';

export const ContactWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.contact}>{children}</div>;
};
