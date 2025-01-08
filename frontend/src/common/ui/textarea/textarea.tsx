import { FC, TextareaHTMLAttributes } from 'react';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldError,
} from 'react-hook-form';

import { ErrorField } from '../errorField/errorField';
import styles from './styles.module.sass';

type TTextarea = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: FieldError;
  fieldState: ControllerFieldState;
  field: ControllerRenderProps;
  hasError?: boolean;
};

export const Textarea: FC<TTextarea> = ({
  style,
  placeholder,
  field,
  fieldState,
  label,
  rows = 2,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hasError = false,
  ...rest
}) => {
  const { name, ...restField } = field;

  return (
    <fieldset style={style} className={styles.main}>
      {label && <label htmlFor={field.name}>{label}</label>}
      <ErrorField error={fieldState.error} />
      <textarea
        id={name}
        placeholder={placeholder}
        {...restField}
        {...rest}
        rows={rows}
        spellCheck
      />
    </fieldset>
  );
};
