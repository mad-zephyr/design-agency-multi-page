import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { UploadFile } from '@/types/types';

import { Magnetic } from '../magnetic';
import styles from './styles.module.sass';

export type TSocial = {
  url: string;
  image?: UploadFile;
};

export type TSocialData = {
  links: TSocial[];
};

export const Social: FC<TSocialData> = ({ links }) => {
  return (
    <ul className={styles.social}>
      {links.map((link, i) => (
        <Magnetic key={i}>
          <li>
            <Link
              aria-label={link.image?.alternativeText || 'Social media'}
              href={link.url}
              target={'_blank'}
            >
              {link.image && (
                <Image
                  src={link.image.url}
                  alt={link.image.alternativeText || ''}
                  fill
                />
              )}
            </Link>
          </li>
        </Magnetic>
      ))}
    </ul>
  );
};
