'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { FC } from 'react';

import Logo from '@/assets/images/logo.svg';
import { ContactWrapper } from '@/common/sections/components';
import { AnimatedText } from '@/common/ui';
import { Link } from '@/i18n/routing';

import { Social, TSocial } from './components';
import styles from './styles.module.sass';

export type TFooter = {
  links: {
    title: string;
    url: string;
    isExternal: boolean;
  }[];

  info: BlocksContent[];
  social: TSocial[];
};

type TFooterData = {
  data: TFooter;
};

export const Footer: FC<TFooterData> = ({ data }) => {
  const { links, info, social } = data;

  return (
    <footer
      className={styles.footer}
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className={styles.content}>
        <div className={styles.first}>
          <Link href={'/'} aria-label="Main page" className={styles.logo}>
            <Logo />
          </Link>
          <ul className={styles.nav}>
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  aria-label={link.title}
                  href={link.url}
                  target={link.isExternal ? '_blank' : '_self'}
                >
                  <AnimatedText>{link.title}</AnimatedText>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.line} />
        </div>
        <div className={styles.second}>
          {info.map((item, i) => (
            <ContactWrapper key={i}>
              <BlocksRenderer content={item} />
            </ContactWrapper>
          ))}

          <Social links={social} />
        </div>
      </div>
    </footer>
  );
};
