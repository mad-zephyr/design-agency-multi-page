import { getImageProps } from 'next/image';
import type { CSSProperties, FC } from 'react';

import { TUploadFile } from '@/common/models';
import { GenericButton, Htag, Ptag } from '@/common/ui';
import type { TButton } from '@/common/ui/button/button.types';
import type { Maybe } from '@/types/types';

import { Section } from '../components';
import styles from './styles.module.sass';

export type THeroSection = {
  title?: Maybe<string>;
  subtitle?: Maybe<string>;
  button?: TButton;
  image?: TUploadFile;
  imageMobile?: TUploadFile;
};

const IMAGE_STYLE: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  bottom: '0',
  position: 'absolute',
};

export const HeroSection: FC<THeroSection> = ({
  title,
  subtitle,
  button,
  image,
  imageMobile,
}) => {
  const common = {
    alt: 'Art Direction Example',
    sizes: '100vw',
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: image?.url || '/',
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 60,
    src: imageMobile?.url || '/',
  });

  return (
    <Section decor={{ posX: 'left', posY: 'bottom' }}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {title && <Htag type="h1" content={title} />}
          <Ptag>{subtitle}</Ptag>
          <GenericButton data={button} />
        </div>

        <picture className={styles.promo}>
          <source media="(min-width: 961px)" srcSet={desktop} />
          <source
            media="(min-width: 960px)"
            srcSet={mobile ? mobile : desktop}
          />
          <img {...rest} style={IMAGE_STYLE} alt={'/'} />
          {/* <div className={styles.oval} /> */}
        </picture>
      </div>
    </Section>
  );
};
