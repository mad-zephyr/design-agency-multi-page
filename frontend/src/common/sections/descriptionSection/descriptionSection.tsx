import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { TUploadFile } from '@/common/models';

import { PatternTwo, Section } from '../components';
import styles from './styles.module.sass';

type TDescriptionSection = {
  content?: BlocksContent;
  image?: TUploadFile;
  imagePlacement?: 'right' | 'left';
};

export const DescriptionSection: FC<TDescriptionSection> = ({
  content,
  image,
  imagePlacement = 'left',
}) => {
  const ImageSection = () => {
    return image ? (
      <div
        className={cn(styles.cover, {
          [styles.imageRight]: imagePlacement === 'right',
          [styles.imageLeft]: imagePlacement === 'left',
        })}
      >
        <Image
          placeholder={image.placeholder}
          src={image?.url}
          alt={image.alternativeText || ''}
          fill
        />
      </div>
    ) : (
      <></>
    );
  };

  const Content = () => {
    return (
      <div
        className={cn(styles.content, {
          [styles.contentLeft]: imagePlacement === 'right',
          [styles.contentRight]: imagePlacement === 'left',
        })}
      >
        {content && <BlocksRenderer content={content} />}
        <PatternTwo />
      </div>
    );
  };

  return (
    <Section noMarginBottomFor="480px" noPaddingFor="480px">
      <div className={styles.main}>
        <ImageSection />
        <Content />
      </div>
    </Section>
  );
};
