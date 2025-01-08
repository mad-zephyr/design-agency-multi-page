import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import { TUploadFile } from '@/common/models';

import { Section } from '../components';
import styles from './styles.module.sass';

type TAccentSection = {
  content?: BlocksContent;
  image?: TUploadFile;
};

export const AccentSection: FC<PropsWithChildren<TAccentSection>> = ({
  children,
  content,
  image,
}) => {
  return (
    <Section noPaddingFor="480px" noMarginBottomFor="480px">
      <div className={styles.main}>
        <div>
          <div className={styles.content}>
            {content && <BlocksRenderer content={content} />}
          </div>
        </div>

        {children && <div>{children}</div>}

        {image && (
          <div>
            <Image
              src={image.url}
              alt={image.alternativeText || ''}
              fill
              placeholder={image.placeholder}
            />
          </div>
        )}
      </div>
    </Section>
  );
};
