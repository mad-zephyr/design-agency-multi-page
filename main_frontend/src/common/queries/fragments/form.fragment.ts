import { gql } from '@apollo/client';

import { CheckboxFragment } from './checkbox.fragment';
import { ButtonFragment } from './componentUiButton.fragment';
import { FormMailSettingsFragment } from './formMailSettings.fragment';
import { InputFragment } from './input.fragment';
import { SelectFragment } from './select.fragment';

export const FormComponent = gql`
  ${InputFragment}
  ${SelectFragment}
  ${CheckboxFragment}
  ${ButtonFragment}
  ${FormMailSettingsFragment}
  fragment FormComponent on Form {
    documentId
    __typename
    form_id
    title
    content
    inputs {
      ...InputFragment
      ...SelectFragment
      ...CheckboxFragment
    }
    buttons {
      ...ButtonFragment
    }
    mailSettings {
      ...FormMailSettingsFragment
    }
  }
`;
