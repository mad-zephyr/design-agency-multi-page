import { gql } from '@apollo/client';

import { ButtonFragment } from './fragments/componentUiButton.fragment';
import { FormComponent } from './fragments/form.fragment';
import { UploadFileFragment } from './fragments/uploadFile.fragment';

export const GetPage = gql`
  ${UploadFileFragment}
  ${ButtonFragment}
  ${FormComponent}
  query GetPageQuery($locale: I18NLocaleCode!, $url: String!) {
    pages(locale: $locale, filters: { url: { eq: $url } }) {
      sections {
        ... on ComponentSectionsTitleSection {
          __typename
          id
          title
          subtitle
          alignText
        }
        ... on ComponentSectionsHeroSection {
          __typename
          id
          title
          subtitle
          button {
            ...ButtonFragment
          }
          image {
            ...UploadFileFragment
          }
          mobileImage {
            ...UploadFileFragment
          }
        }
        ... on ComponentSectionsGridSection {
          __typename
          id
          cards {
            id
            title
            description
            type
            url
            image {
              ...UploadFileFragment
            }
            button {
              ...ButtonFragment
            }
          }
        }
        ... on ComponentSectionsDescriptionSection {
          __typename
          id
          image {
            ...UploadFileFragment
          }
          type
          content
          imagePlacement
        }
        ... on ComponentSectionsServiceSection {
          __typename
          id
          columnOne {
            id
            image {
              ...UploadFileFragment
            }
            title
            url {
              id
              title
              url
              isExternal
            }
          }
          columnTwo {
            id
            image {
              ...UploadFileFragment
            }
            title
            url {
              id
              title
              url
              isExternal
            }
          }
        }
        ... on ComponentSectionsAdressMapSection {
          id
          __typename
          contacts {
            __typename
            id
            title
            column_one
            column_two
            title
            map {
              __typename
              id
              latitude
              longitude
              mapPlacement
              allowFullscreen
              scaleControl
              navigationControl
            }
          }
        }
        ... on ComponentSectionsContactSection {
          __typename
          form {
            ...FormComponent
          }
        }
        ... on ComponentSectionsContactWithModalSection {
          __typename
          title
          id
          content
          formInModal {
            ...FormComponent
          }
          button {
            ...ButtonFragment
          }
        }

        ... on ComponentSectionsArticleSection {
          __typename
          id
          content
        }
        ... on Error {
          __typename
          code
          message
        }
      }
    }
  }
`;
