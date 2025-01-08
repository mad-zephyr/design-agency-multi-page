'use client';

import { FC } from 'react';

import { useLockScroll } from '@/common/hooks';
import { Link } from '@/i18n/routing';

import styles from './styles.module.sass';
type TMobileMenu = {
  links: {
    title: string;
    url: string;
    isExternal: boolean;
  }[];
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu: FC<TMobileMenu> = ({ links, onClose, isOpen }) => {
  useLockScroll({ isScrollLocked: isOpen });

  const handleClose = () => {
    onClose();
  };

  return isOpen ? (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.url}
                target={link.isExternal ? '_blank' : '_self'}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.overlay} onClick={handleClose} />
    </div>
  ) : (
    <></>
  );
};
