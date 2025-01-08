import { gql } from '@apollo/client';

export const UploadFileFragment = gql`
  fragment UploadFileFragment on UploadFile {
    __typename
    documentId
    name
    alternativeText
    caption
    width
    height
    formats
    hash
    ext
    mime
    size
    url
    previewUrl
    provider
    provider_metadata
    createdAt
    updatedAt
    publishedAt
  }
`;
