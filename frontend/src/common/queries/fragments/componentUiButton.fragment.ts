import { gql } from '@apollo/client';

export const ButtonFragment = gql`
  fragment ButtonFragment on ComponentUiButton {
    __typename
    id
    title
    subtitle
    btnType
    url
    variant
    btnStyle
  }
`;
