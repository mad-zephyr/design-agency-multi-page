'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useTransition } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { GenericButton, Input, Textarea } from '../ui';
import { TButton } from '../ui/button/button.types';
import {
  FormField,
  generateDefaultValues,
  generateZodSchema,
} from './formHelpers';

export type TFormBuilder = {
  fields: FormField[];
  submitButtons: TButton[];
};

const getFieldWidth = (width: number) => {
  if (width === 100) {
    return 'calc(100%)';
  }

  return `calc(${width}% - ${6.5}px)`;
};

export const FormBuilder: FC<TFormBuilder> = ({ fields, submitButtons }) => {
  const formSchema = generateZodSchema(fields);
  const defaultValues = generateDefaultValues(fields);
  type FormSchemaType = z.infer<typeof formSchema>;

  const [isFormDisabled, sendForm] = useTransition();

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    sendForm(() => {
      console.log('DATA: ', data);
      alert(JSON.stringify(data));
    });
  };

  const methods = useForm<FormSchemaType>({
    defaultValues,
    disabled: isFormDisabled,
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit, control } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((fieldItem, i) => (
        <div key={i} style={{ width: getFieldWidth(fieldItem.width) }}>
          <Controller
            key={fieldItem.name}
            name={fieldItem.name}
            control={control}
            rules={{ required: fieldItem.required }}
            render={({ field, fieldState }) => {
              switch (fieldItem.component) {
                case 'input':
                  return (
                    <Input
                      label={fieldItem.label}
                      field={field}
                      fieldState={fieldState}
                      placeholder={fieldItem.placeholder}
                      type={fieldItem.type}
                      hasError={!!fieldState.error}
                    />
                  );
                case 'textarea': {
                  return (
                    <Textarea
                      label={fieldItem.label}
                      field={field}
                      fieldState={fieldState}
                      placeholder={fieldItem.placeholder}
                      hasError={!!fieldState.error}
                    />
                  );
                }
                // case 'select':
                //   return (
                //     <select {...inputField}>
                //       {field.options?.map((option) => (
                //         <option key={option.value} value={option.value}>
                //           {option.title}
                //         </option>
                //       ))}
                //     </select>
                //   );
                // case 'checkbox':
                //   return <input type="checkbox" {...inputField} />;
                default:
                  return <></>;
              }
            }}
          />
        </div>
      ))}
      <GenericButton data={submitButtons[0]} />
    </form>
  );
};
