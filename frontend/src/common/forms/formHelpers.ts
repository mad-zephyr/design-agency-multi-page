import { HTMLInputTypeAttribute } from 'react';
import { z, ZodType } from 'zod';

import { Form, Maybe } from '@/types/types';

import { UiFormInputModel } from '../models/formInput.model';
import { getUiGenericButtonProps } from '../models/getGenericButtonProps';
import { TFormBuilder } from './formBuilder';
import {
  requiredInput,
  requiredInputCheckbox,
  requiredInputEmail,
  requiredInputSelect,
  requiredInputTel,
  requiredNumberInput,
} from './validationRules';

export type UiInputValidationRulesType = 'required' | 'max' | 'min';
export type FormFieldComponentType =
  | 'select'
  | 'input'
  | 'textarea'
  | 'checkbox'
  | 'number';

export type UiInputValidationRules =
  | {
      type: Extract<UiInputValidationRulesType, 'required'>;
      message: string;
    }
  | {
      type: Extract<UiInputValidationRulesType, 'max' | 'min'>;
      value: number;
      message: string;
    };

export interface FormFieldBase {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  width: number; // Ширина в процентах
  defaultData?: string; // Значение по умолчанию
  required: boolean;
}

export type FormField = FormFieldBase & {
  component: FormFieldComponentType;
  validationRules: UiInputValidationRules[];
};

export function populateFormWithData(form?: Maybe<Form>): TFormBuilder {
  const formsData: TFormBuilder = {
    fields: [],
    submitButtons: [],
  };

  if (form && form.inputs) {
    const inputFields =
      form.inputs
        .map((input) => UiFormInputModel(input))
        .filter((input) => !!input) || [];

    const submitButtons =
      form.buttons
        .map((button) => {
          if (button?.__typename === 'ComponentUiButton') {
            return getUiGenericButtonProps(button);
          }
        })
        .filter((input) => !!input) || [];

    formsData.fields = inputFields;
    formsData.submitButtons = submitButtons;
  }

  return formsData;
}

const generateSchemaBaseOnInputType = (
  validationRules: UiInputValidationRules[],
  type?: HTMLInputTypeAttribute
) => {
  switch (type) {
    case 'text': {
      return requiredInput(validationRules);
    }
    case 'email': {
      return requiredInputEmail(validationRules);
    }
    case 'number': {
      return requiredNumberInput(validationRules);
    }
    case 'tel': {
      return requiredInputTel(validationRules);
    }
    default: {
      return requiredInput(validationRules);
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateZodSchema = (inputs: FormField[]): z.ZodObject<any> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schema: Record<string, z.ZodType<any>> = {};

  inputs.forEach((field) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fieldSchema: ZodType<any>;

    switch (field.component) {
      case 'input':
        fieldSchema = generateSchemaBaseOnInputType(
          field.validationRules,
          field.type
        );
        break;
      case 'textarea':
        fieldSchema = requiredInput(field.validationRules);
        break;
      case 'select':
        fieldSchema = requiredInputSelect(field.validationRules);
        break;
      case 'checkbox':
        fieldSchema = requiredInputCheckbox(field.validationRules);
        break;
      default:
        fieldSchema = z.unknown();
    }

    schema[field.name] = fieldSchema;
  });

  return z.object(schema);
};

export const generateDefaultValues = (fields: FormField[]) => {
  return fields.reduce<Record<string, string>>((acc, field) => {
    acc[field.name] = field.defaultData || '';
    return acc;
  }, {});
};
