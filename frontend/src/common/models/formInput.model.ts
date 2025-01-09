import { HTMLInputTypeAttribute } from 'react';

import {
  ComponentFormCheckbox,
  ComponentFormInput,
  ComponentFormSelect,
  ComponentFormValidation,
  Enum_Componentforminput_Type,
  Enum_Componentformvalidation_Type,
  FormInputsDynamicZone,
  Maybe,
} from '@/types/types';

import {
  FormField,
  FormFieldBase,
  UiInputValidationRules,
  UiInputValidationRulesType,
} from '../forms/formHelpers';

const UiFormFieldType = (
  type?: Enum_Componentforminput_Type
): HTMLInputTypeAttribute | undefined => {
  if (!type) {
    return;
  }
  switch (type) {
    case Enum_Componentforminput_Type.Text: {
      return 'text';
    }
    case Enum_Componentforminput_Type.Email: {
      return 'email';
    }
    case Enum_Componentforminput_Type.Tel:
    case Enum_Componentforminput_Type.Number: {
      return 'number';
    }
    case Enum_Componentforminput_Type.Url: {
      return 'url';
    }
  }
};

const UiFormBaseField = (
  formInput: ComponentFormInput | ComponentFormCheckbox | ComponentFormSelect
): FormFieldBase => {
  const base = {
    // label: formInput.label || '',
    name: formInput.field_id,
    width: formInput.width,
    placeholder: '',
    required: !!formInput.validation_rules?.length,
  };

  if (
    formInput.__typename === 'ComponentFormSelect' ||
    formInput.__typename === 'ComponentFormInput'
  ) {
    return { ...base, placeholder: formInput.placeholder || '' };
  }

  return base;
};

const UiFormFieldValidationRulesType = (
  type: Enum_Componentformvalidation_Type
): UiInputValidationRulesType => {
  switch (type) {
    case Enum_Componentformvalidation_Type.Required: {
      return 'required';
    }
    case Enum_Componentformvalidation_Type.Max: {
      return 'max';
    }
    case Enum_Componentformvalidation_Type.Min: {
      return 'min';
    }
  }
};

export const UiFormFieldValidationRules = (
  validation_rules?: Maybe<Maybe<ComponentFormValidation>[]>
): UiInputValidationRules[] => {
  const maybeRyles = validation_rules ? validation_rules : [];
  const rules = maybeRyles.filter((rule) => !!rule);

  return rules
    .filter((rule) => !!rule.type)
    .reduce<UiInputValidationRules[]>((prev, curr) => {
      if (!curr.type || !curr?.type) {
        return prev;
      }

      const ruleType = UiFormFieldValidationRulesType(curr.type);

      const rule: UiInputValidationRules =
        ruleType === 'required'
          ? {
              type: ruleType,
              message: curr.errorMessage,
            }
          : {
              type: ruleType,
              value: curr.value!,
              message: curr.errorMessage,
            };

      return [...prev, rule];
    }, []);
};

export const UiFormInputModel = (
  formInput?: Maybe<FormInputsDynamicZone>
): FormField | undefined => {
  if (!formInput || formInput.__typename === 'Error') {
    return;
  }

  if (formInput.__typename === 'ComponentFormInput') {
    const baseField = UiFormBaseField(formInput);

    switch (formInput.type) {
      case Enum_Componentforminput_Type.Email:
      case Enum_Componentforminput_Type.Number:
      case Enum_Componentforminput_Type.Url:
      case Enum_Componentforminput_Type.Tel:
      case Enum_Componentforminput_Type.Text: {
        return {
          component: 'input',
          type: UiFormFieldType(formInput.type),
          validationRules: UiFormFieldValidationRules(
            formInput.validation_rules
          ),
          ...baseField,
        };
      }

      case Enum_Componentforminput_Type.Textarea: {
        return {
          component: 'textarea',
          validationRules: UiFormFieldValidationRules(
            formInput.validation_rules
          ),
          ...baseField,
        };
      }
    }
  }

  // if (formInput.__typename === 'ComponentFormSelect') {
  //   const baseField = UiFormBaseField(formInput);

  //   const selectOptions = formInput?.options.filter((option) => !!option);

  //   const options: TOption[] = selectOptions.map((option) => ({
  //     title: option?.title || '',
  //     value: option?.field_id,
  //   }));

  //   return {
  //     component: 'select',
  //     // placeholder: formInput.placeholder || '',
  //     validationRules: UiFormFieldValidationRules(formInput.validation_rules),
  //     options: options,
  //     ...baseField,
  //   };
  // }

  if (formInput.__typename === 'ComponentFormCheckbox') {
    const baseField = UiFormBaseField(formInput);

    return {
      component: 'checkbox',
      // checked: formInput.default_checked,
      validationRules: UiFormFieldValidationRules(formInput.validation_rules),
      ...baseField,
    };
  }
};
