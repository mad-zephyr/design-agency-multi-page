import { gql } from '@apollo/client';

import { ValidationRules } from './validationRules.fragment';

export const SelectFragment = gql`
  ${ValidationRules}
  fragment SelectFragment on ComponentFormSelect {
    __typename
    field_id
    id
    label
    placeholder
    width
    validation_rules {
      ...ValidationRules
    }
  }
`;
