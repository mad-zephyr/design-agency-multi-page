import { gql } from '@apollo/client';

import { UploadFileFragment } from './fragments/uploadFile.fragment';

export const GetPageSeo = gql`
  ${UploadFileFragment}
  query GetPageSeoQuery($locale: I18NLocaleCode!, $url: String!) {
    pages(locale: $locale, filters: { url: { eq: $url } }) {
      __typename
      seo {
        __typename
        id
        metaTitle
        metaDescription
        keywords
        canonicalURL
        metaViewport
        structuredData
        metaImage {
          ...UploadFileFragment
        }
        openGraph {
          __typename
          id
          og_title
          og_description
          og_type
          og_url
          og_image {
            ...UploadFileFragment
          }
        }
      }
    }
  }
`;
