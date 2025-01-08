import { gql } from '@apollo/client';

import { ValidationRules } from './validationRules.fragment';

export const CheckboxFragment = gql`
  ${ValidationRules}
  fragment CheckboxFragment on ComponentFormCheckbox {
    __typename
    field_id
    id
    label
    width
    default_checked
    validation_rules {
      ...ValidationRules
    }
  }
`;
