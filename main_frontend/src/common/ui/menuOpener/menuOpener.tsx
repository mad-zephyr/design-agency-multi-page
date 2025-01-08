import cn from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './styles.module.sass';

type TMenuOpener = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean;
  onClick: () => void;
};

export const MenuOpener: FC<TMenuOpener> = ({
  onClick,
  isOpen,
  className,
  ...rest
}) => {
  const mainClass = cn(styles.opener, className, { [styles.isOpen]: isOpen });

  return (
    <button onClick={onClick} className={mainClass} {...rest}>
      <div />
      <div />
      <div />
      <div />
    </button>
  );
};
