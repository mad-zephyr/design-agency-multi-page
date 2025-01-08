'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { FC } from 'react';

import { TUploadFile } from '@/common/models';
import { Htag } from '@/common/ui';
import { Link } from '@/i18n/routing';
import { Maybe } from '@/types/types';

import styles from './styles.module.sass';

type TPreviewCard = {
  image?: TUploadFile;
  title?: Maybe<string>;
  description?: BlocksContent;
  link: string;
};

export const PreviewCard: FC<TPreviewCard> = ({
  image,
  link,
  description,
  title,
}) => {
  return (
    <Link href={link} role="link" className={styles.main}>
      <div className={styles.card}>
        {image && (
          <Image
            src={image.url}
            alt={image.alternativeText || ''}
            placeholder={image.placeholder}
            fill
          />
        )}
      </div>
      <div className={styles.content}>
        {title && <Htag className={styles.title} content={title} type="h3" />}
        {description && <BlocksRenderer content={description} />}
      </div>
    </Link>
  );
};
