import { gql } from '@apollo/client';

import { UploadFileFragment } from './fragments/uploadFile.fragment';

export const GetTechnical = gql`
  ${UploadFileFragment}
  query GetTechnicla($locale: I18NLocaleCode) {
    footer(locale: $locale) {
      documentId
      __typename
      descriptions {
        ... on ComponentUiParagraph {
          id
          paragraph
        }
      }
      links {
        ... on ComponentUiLink {
          id
          title
          url
          isExternal
        }
      }
      socials {
        ... on ComponentSocialSocial {
          id
          url
          image {
            ...UploadFileFragment
          }
        }
      }
    }
    header(locale: $locale) {
      __typename
      documentId
      links {
        ... on ComponentUiLink {
          id
          title
          url
          isExternal
        }
      }
    }
  }
`;
