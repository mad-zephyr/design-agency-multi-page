import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.sass';

type TMenuOpener = {
  isOpen: boolean;
  onClick: () => void;
};

export const MenuOpener: FC<TMenuOpener> = ({ onClick, isOpen }) => {
  const mainClass = cn(styles.opener, { [styles.isOpen]: isOpen });

  return (
    <button onClick={onClick} className={mainClass}>
      <div />
      <div />
      <div />
      <div />
    </button>
  );
};
