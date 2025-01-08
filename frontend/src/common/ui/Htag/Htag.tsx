import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';

type THtag = HTMLAttributes<HTMLHeadingElement> & {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  content?: string | number;
};

import styles from './styles.module.sass';

export const Htag: FC<THtag> = ({ type, content, className, ...props }) => {
  const mainClass = cn(styles[type], styles.title, className);

  switch (type) {
    case 'h1': {
      return (
        <h1 className={mainClass} {...props}>
          {content}
        </h1>
      );
    }
    case 'h2': {
      return (
        <h2 className={mainClass} {...props}>
          {content}
        </h2>
      );
    }
    case 'h3': {
      return (
        <h3 className={mainClass} {...props}>
          {content}
        </h3>
      );
    }
    case 'h4': {
      return (
        <h4 className={mainClass} {...props}>
          {content}
        </h4>
      );
    }
    case 'h5': {
      return (
        <h5 className={mainClass} {...props}>
          {content}
        </h5>
      );
    }
    case 'h6':
    default: {
      return (
        <h6 className={mainClass} {...props}>
          {content}
        </h6>
      );
    }
  }
};
