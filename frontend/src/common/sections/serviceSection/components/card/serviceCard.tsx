import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import ArrowRight from '@/assets/images/rightArrow.svg';
import { TUploadFile } from '@/common/models';
import { Htag } from '@/common/ui';
import { ComponentUiLink, Maybe } from '@/types/types';

import styles from './styles.module.sass';

export type TServiceCard = {
  image?: TUploadFile;
  title?: Maybe<string>;
  link?: Maybe<ComponentUiLink>;
};

export const ServiceCard: FC<TServiceCard> = ({ image, link, title }) => {
  return (
    <Link href={link?.url || '/'} className={styles.card}>
      {title && <Htag type="h2" content={title} />}
      {link && (
        <div className={styles.link}>
          <span>{link.title}</span>
          <ArrowRight />
        </div>
      )}
      {image && (
        <Image
          src={image.url}
          fill
          alt={image.alternativeText || ''}
          placeholder={image.placeholder}
        />
      )}
    </Link>
  );
};
