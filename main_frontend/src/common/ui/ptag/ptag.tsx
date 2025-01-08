import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

type TPtag = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

import styles from './styles.module.sass';

export const Ptag: FC<PropsWithChildren<TPtag>> = ({ children, ...rest }) => {
  return (
    <p className={styles.p} {...rest}>
      {children}
    </p>
  );
};
