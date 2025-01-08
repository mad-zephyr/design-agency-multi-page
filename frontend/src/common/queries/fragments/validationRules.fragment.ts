import { gql } from '@apollo/client';

export const ValidationRules = gql`
  fragment ValidationRules on ComponentFormValidation {
    __typename
    id
    type
    value
    errorMessage
  }
`;
