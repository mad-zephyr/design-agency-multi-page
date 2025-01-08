'use client';

import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import Logo from '@/assets/images/logo.svg';
import { AnimatedText } from '@/common/ui';
import { Link } from '@/i18n/routing';

import { LangSwitcher, MenuOpener, MobileMenu } from './components';
import styles from './styles.module.sass';

export type THeaderData = {
  links: {
    title: string;
    url: string;
    isExternal: boolean;
  }[];
};

export const Header: FC<THeaderData> = ({ links }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollDetect = () => {
      if (window.scrollY > 160) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    };

    scrollDetect();

    window.addEventListener('scroll', scrollDetect);

    return () => {
      window.removeEventListener('scroll', scrollDetect);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div
        className={cn(styles.wrapper, {
          [styles.minimized]: isMinimized,
          [styles.open]: isMenuOpen,
        })}
      >
        <Link href={'/'} className={styles.logo}>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.url}
                  target={link.isExternal ? '_blank' : '_self'}
                >
                  <AnimatedText>{link.title}</AnimatedText>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.lang}>
          <LangSwitcher />
          <MenuOpener onClick={handleOpenMenu} isOpen={isMenuOpen} />
        </div>

        <div className={styles.menu}>
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={handleOpenMenu}
            links={links}
          />
        </div>
      </div>
    </header>
  );
};
