import { z, ZodType } from 'zod';

import { UiInputValidationRules } from './formHelpers';

export const requiredInput = (validationRules: UiInputValidationRules[]) => {
  return validationRules.reduce((zod, rule) => {
    if (rule.type === 'required') {
      return zod.min(1, { message: rule.message });
    }

    if (rule.type === 'min') {
      return zod.min(rule.value, { message: rule.message });
    }

    if (rule.type === 'max') {
      return zod.max(rule.value, { message: rule.message });
    }
    return zod;
  }, z.string().trim());
};

export const requiredNumberInput = (
  validationRules: UiInputValidationRules[]
) => {
  return validationRules.reduce<ZodType>((zod, rule) => {
    if (rule.type === 'required') {
      return zod
        .transform((val) => Number(val))
        .refine((val) => val !== null && val !== undefined && val !== 0, {
          message: rule.message,
        });
    }

    if (rule.type === 'min') {
      return zod
        .transform((val) => Number(val))
        .refine((val) => val >= rule.value, {
          message: rule.message,
        });
    }

    if (rule.type === 'max') {
      return zod
        .transform((val) => Number(val))
        .refine((val) => val <= rule.value, {
          message: rule.message,
        });
    }
    return zod;
  }, z.string().trim());
};

export const requiredInputTel = (validationRules: UiInputValidationRules[]) => {
  return validationRules.reduce<ZodType<string>>((zod, rule) => {
    if (rule.type === 'required') {
      return zod
        .transform((val) => val.toString())
        .refine((val) => !!val.length, {
          message: rule.message,
        })
        .refine((val) => /^\d+$/.test(val), {
          message: 'The value must contain only digits.',
        });
    }

    if (rule.type === 'min') {
      return zod.refine((val) => val.length >= rule.value, {
        message: rule.message,
      });
    }

    if (rule.type === 'max') {
      return zod.refine((val) => val.length <= rule.value, {
        message: rule.message,
      });
    }

    return zod;
  }, z.string().trim());
};

export const requiredInputEmail = (
  validationRules: UiInputValidationRules[]
) => {
  for (const rule of validationRules) {
    if (rule.type === 'required') {
      return z.string().trim().email({ message: rule.message });
    }
  }
  return z.unknown();
};

export const requiredInputCheckbox = (
  validationRules: UiInputValidationRules[]
) => {
  const ruleMessage = validationRules.find((rule) => rule.type === 'required');

  const fieldSchema = z.enum(['on', 'off']);

  if (ruleMessage) {
    return z.enum(['on', 'off']).refine((value) => value === 'on', {
      message: ruleMessage.message,
    });
  }

  return fieldSchema;
};

export const requiredInputSelect = (
  validationRules: UiInputValidationRules[]
) => {
  const fieldSchema = z.string().optional();

  for (const rule of validationRules) {
    if (rule.type === 'required') {
      return z
        .string()
        .min(1, { message: rule.message || 'This field is required' });
    }
  }

  return fieldSchema;
};
