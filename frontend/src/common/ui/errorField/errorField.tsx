import { FC } from 'react';
import { FieldError } from 'react-hook-form';

import ErrorIcon from '@/assets/images/alert.svg';

import styles from './styles.module.sass';

type TErrorField = {
  error?: FieldError;
};

export const ErrorField: FC<TErrorField> = ({ error }) => {
  return !!error ? (
    <span className={styles.error}>
      {error.message}
      <ErrorIcon />
    </span>
  ) : (
    <></>
  );
};
