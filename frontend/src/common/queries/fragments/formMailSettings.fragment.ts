import { gql } from '@apollo/client';

export const FormMailSettingsFragment = gql`
  fragment FormMailSettingsFragment on ComponentFormMailSettings {
    __typename
    subject
    title
    subtitle
    mailList {
      id
      name
      email
    }
  }
`;
