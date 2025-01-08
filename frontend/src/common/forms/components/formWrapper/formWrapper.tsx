import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import cn from 'classnames';
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

import styles from './styles.module.sass';

type TFormWrapper = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  description?: BlocksContent;
};

export const FormWrapper: FC<PropsWithChildren<TFormWrapper>> = ({
  children,
  description,
  ...props
}) => {
  const mainClass = cn(styles.section);

  return (
    <section className={mainClass} {...props}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {description && <BlocksRenderer content={description} />}
        </div>

        <div className={styles.formWrapper}>{children}</div>
      </div>
    </section>
  );
};
