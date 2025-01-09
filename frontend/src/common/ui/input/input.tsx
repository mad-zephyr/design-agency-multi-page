'use client';

import { FC, InputHTMLAttributes } from 'react';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldError,
} from 'react-hook-form';

import { ErrorField } from '../errorField/errorField';
import styles from './styles.module.sass';

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: FieldError;
  fieldState: ControllerFieldState;
  field: ControllerRenderProps;
  hasError?: boolean;
};

const getAutoComplete = (type?: string) => {
  switch (type) {
    case 'tel': {
      return 'tel';
    }
    case 'email': {
      return 'email';
    }

    case 'name': {
      return 'given-name';
    }

    case 'surname': {
      return 'family-name';
    }

    default: {
      return 'off';
    }
  }
};

export const Input: FC<TInput> = ({
  style,
  placeholder,
  field,
  fieldState,
  label,
  type,
  hasError = false,
  ...rest
}) => {
  const { name, ...restField } = field;

  return (
    <fieldset style={style} className={styles.main}>
      {label && <label htmlFor={field.name}>{label}</label>}

      {hasError && <ErrorField error={fieldState.error} />}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete={getAutoComplete(name)}
        {...restField}
        {...rest}
      />
    </fieldset>
  );
};
