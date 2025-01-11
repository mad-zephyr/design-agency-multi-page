'use client';

import cn from 'classnames';
import { ButtonHTMLAttributes, FC, MouseEvent } from 'react';

import { Link } from '@/i18n/routing';

import { TButton, TButtonLink } from '../../button.types';
import styles from './styles.module.sass';
// ButtonHTMLAttributes<HTMLButtonElement> &

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & TButton> = ({
  title,
  variant = 'light',
  size = 'large',
  btnType,
  ...rest
}) => {
  const mainClass = cn(styles.button, styles[variant], styles[size]);

  if (btnType === 'nav_external' || btnType === 'nav_internal') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { url, btnstyle, ...linkRest } = rest as TButtonLink;

    return (
      <Link
        aria-label={title}
        href={url}
        className={mainClass}
        target={btnType === 'nav_external' ? '_blank' : undefined}
        rel={btnType === 'nav_external' ? 'noopener noreferrer' : undefined}
        {...linkRest}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.internal}>
          <p>{title}</p>
          <span className={styles.overlay} />
        </span>
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { btnstyle, ...linkRest } = rest;

  const handleClick = (e: MouseEvent) => {
    if (btnType === 'form') {
      e.preventDefault();
    }

    if (rest?.onClick) {
      rest.onClick();
    }
  };

  return (
    <button className={mainClass} onClick={handleClick} {...linkRest}>
      <span className={styles.title}>{title}</span>
      <span className={styles.internal}>
        <p>{title}</p>
        <span className={styles.overlay} />
      </span>
    </button>
  );
};
