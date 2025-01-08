import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { TUploadFile } from '@/common/models';
import { GenericButton, Htag } from '@/common/ui';
import { TButton } from '@/common/ui/button/button.types';
import { Maybe } from '@/types/types';

import styles from './styles.module.sass';

export type TFeatureCard = {
  image?: TUploadFile;
  title?: Maybe<string>;
  description?: BlocksContent;
  button?: TButton;
};

export const FeatureCard: FC<TFeatureCard> = ({
  image,
  description,
  title,
  button,
}) => {
  const mainClass = cn(styles.card, {
    [styles.horizontalTablet]: !!button,
  });

  return (
    <div className={mainClass}>
      <div className={styles.image}>
        {image && (
          <Image
            src={image?.url}
            alt={image.alternativeText || ''}
            fill
            placeholder={image.placeholder}
          />
        )}
      </div>
      <div className={styles.content}>
        {title && <Htag type="h4" content={title} />}
        {description && <BlocksRenderer content={description} />}
        {button && <GenericButton data={button} />}
      </div>
    </div>
  );
};
