import { gql } from '@apollo/client';

import { ValidationRules } from './validationRules.fragment';

export const InputFragment = gql`
  ${ValidationRules}
  fragment InputFragment on ComponentFormInput {
    __typename
    field_id
    id
    label
    placeholder
    type
    width
    validation_rules {
      ...ValidationRules
    }
  }
`;
