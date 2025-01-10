/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  '\n  \n  fragment CheckboxFragment on ComponentFormCheckbox {\n    __typename\n    field_id\n    id\n    label\n    width\n    default_checked\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n':
    types.CheckboxFragmentFragmentDoc,
  '\n  fragment ButtonFragment on ComponentUiButton {\n    __typename\n    id\n    title\n    subtitle\n    btnType\n    url\n    variant\n    btnStyle\n  }\n':
    types.ButtonFragmentFragmentDoc,
  '\n  \n  \n  \n  \n  \n  fragment FormComponent on Form {\n    documentId\n    __typename\n    form_id\n    title\n    content\n    inputs {\n      ...InputFragment\n      ...SelectFragment\n      ...CheckboxFragment\n    }\n    buttons {\n      ...ButtonFragment\n    }\n    mailSettings {\n      ...FormMailSettingsFragment\n    }\n  }\n':
    types.FormComponentFragmentDoc,
  '\n  fragment FormMailSettingsFragment on ComponentFormMailSettings {\n    __typename\n    subject\n    title\n    subtitle\n    mailList {\n      id\n      name\n      email\n    }\n  }\n':
    types.FormMailSettingsFragmentFragmentDoc,
  '\n  \n  fragment InputFragment on ComponentFormInput {\n    __typename\n    field_id\n    id\n    label\n    placeholder\n    type\n    width\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n':
    types.InputFragmentFragmentDoc,
  '\n  \n  fragment SelectFragment on ComponentFormSelect {\n    __typename\n    field_id\n    id\n    label\n    placeholder\n    width\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n':
    types.SelectFragmentFragmentDoc,
  '\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n':
    types.UploadFileFragmentFragmentDoc,
  '\n  fragment ValidationRules on ComponentFormValidation {\n    __typename\n    id\n    type\n    value\n    errorMessage\n  }\n':
    types.ValidationRulesFragmentDoc,
  '\n  \n  \n  \n  query GetPageQuery($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      sections {\n        ... on ComponentSectionsTitleSection {\n          __typename\n          id\n          title\n          subtitle\n          alignText\n        }\n        ... on ComponentSectionsHeroSection {\n          __typename\n          id\n          title\n          subtitle\n          button {\n            ...ButtonFragment\n          }\n          image {\n            ...UploadFileFragment\n          }\n          mobileImage {\n            ...UploadFileFragment\n          }\n        }\n        ... on ComponentSectionsGridSection {\n          __typename\n          id\n          cards {\n            id\n            title\n            description\n            type\n            url\n            image {\n              ...UploadFileFragment\n            }\n            button {\n              ...ButtonFragment\n            }\n          }\n        }\n        ... on ComponentSectionsDescriptionSection {\n          __typename\n          id\n          image {\n            ...UploadFileFragment\n          }\n          type\n          content\n          imagePlacement\n        }\n        ... on ComponentSectionsServiceSection {\n          __typename\n          id\n          columnOne {\n            id\n            image {\n              ...UploadFileFragment\n            }\n            title\n            url {\n              id\n              title\n              url\n              isExternal\n            }\n          }\n          columnTwo {\n            id\n            image {\n              ...UploadFileFragment\n            }\n            title\n            url {\n              id\n              title\n              url\n              isExternal\n            }\n          }\n        }\n        ... on ComponentSectionsAdressMapSection {\n          id\n          __typename\n          contacts {\n            __typename\n            id\n            title\n            column_one\n            column_two\n            title\n            map {\n              __typename\n              id\n              latitude\n              longitude\n              mapPlacement\n              allowFullscreen\n              scaleControl\n              navigationControl\n            }\n          }\n        }\n        ... on ComponentSectionsContactSection {\n          __typename\n          form {\n            ...FormComponent\n          }\n        }\n        ... on ComponentSectionsContactWithModalSection {\n          __typename\n          title\n          id\n          content\n          formInModal {\n            ...FormComponent\n          }\n          button {\n            ...ButtonFragment\n          }\n        }\n\n        ... on ComponentSectionsArticleSection {\n          __typename\n          id\n          content\n        }\n        ... on Error {\n          __typename\n          code\n          message\n        }\n      }\n    }\n  }\n':
    types.GetPageQueryDocument,
  '\n  \n  query GetPageSeoQuery($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      seo {\n        __typename\n        id\n        metaTitle\n        metaDescription\n        keywords\n        canonicalURL\n        metaViewport\n        structuredData\n        metaImage {\n          ...UploadFileFragment\n        }\n        openGraph {\n          __typename\n          id\n          og_title\n          og_description\n          og_type\n          og_url\n          og_image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n  }\n':
    types.GetPageSeoQueryDocument,
  '\n  \n  query GetTechnicla($locale: I18NLocaleCode) {\n    footer(locale: $locale) {\n      documentId\n      __typename\n      descriptions {\n        ... on ComponentUiParagraph {\n          id\n          paragraph\n        }\n      }\n      links {\n        ... on ComponentUiLink {\n          id\n          title\n          url\n          isExternal\n        }\n      }\n      socials {\n        ... on ComponentSocialSocial {\n          id\n          url\n          image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n    header(locale: $locale) {\n      __typename\n      documentId\n      links {\n        ... on ComponentUiLink {\n          id\n          title\n          url\n          isExternal\n        }\n      }\n    }\n  }\n':
    types.GetTechniclaDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment CheckboxFragment on ComponentFormCheckbox {\n    __typename\n    field_id\n    id\n    label\n    width\n    default_checked\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment CheckboxFragment on ComponentFormCheckbox {\n    __typename\n    field_id\n    id\n    label\n    width\n    default_checked\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ButtonFragment on ComponentUiButton {\n    __typename\n    id\n    title\n    subtitle\n    btnType\n    url\n    variant\n    btnStyle\n  }\n'
): (typeof documents)['\n  fragment ButtonFragment on ComponentUiButton {\n    __typename\n    id\n    title\n    subtitle\n    btnType\n    url\n    variant\n    btnStyle\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n  \n  \n  \n  fragment FormComponent on Form {\n    documentId\n    __typename\n    form_id\n    title\n    content\n    inputs {\n      ...InputFragment\n      ...SelectFragment\n      ...CheckboxFragment\n    }\n    buttons {\n      ...ButtonFragment\n    }\n    mailSettings {\n      ...FormMailSettingsFragment\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  \n  \n  \n  fragment FormComponent on Form {\n    documentId\n    __typename\n    form_id\n    title\n    content\n    inputs {\n      ...InputFragment\n      ...SelectFragment\n      ...CheckboxFragment\n    }\n    buttons {\n      ...ButtonFragment\n    }\n    mailSettings {\n      ...FormMailSettingsFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment FormMailSettingsFragment on ComponentFormMailSettings {\n    __typename\n    subject\n    title\n    subtitle\n    mailList {\n      id\n      name\n      email\n    }\n  }\n'
): (typeof documents)['\n  fragment FormMailSettingsFragment on ComponentFormMailSettings {\n    __typename\n    subject\n    title\n    subtitle\n    mailList {\n      id\n      name\n      email\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment InputFragment on ComponentFormInput {\n    __typename\n    field_id\n    id\n    label\n    placeholder\n    type\n    width\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment InputFragment on ComponentFormInput {\n    __typename\n    field_id\n    id\n    label\n    placeholder\n    type\n    width\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  fragment SelectFragment on ComponentFormSelect {\n    __typename\n    field_id\n    id\n    label\n    placeholder\n    width\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n'
): (typeof documents)['\n  \n  fragment SelectFragment on ComponentFormSelect {\n    __typename\n    field_id\n    id\n    label\n    placeholder\n    width\n    validation_rules {\n      ...ValidationRules\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n'
): (typeof documents)['\n  fragment UploadFileFragment on UploadFile {\n    __typename\n    documentId\n    name\n    alternativeText\n    caption\n    width\n    height\n    formats\n    hash\n    ext\n    mime\n    size\n    url\n    previewUrl\n    provider\n    provider_metadata\n    createdAt\n    updatedAt\n    publishedAt\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ValidationRules on ComponentFormValidation {\n    __typename\n    id\n    type\n    value\n    errorMessage\n  }\n'
): (typeof documents)['\n  fragment ValidationRules on ComponentFormValidation {\n    __typename\n    id\n    type\n    value\n    errorMessage\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  \n  \n  query GetPageQuery($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      sections {\n        ... on ComponentSectionsTitleSection {\n          __typename\n          id\n          title\n          subtitle\n          alignText\n        }\n        ... on ComponentSectionsHeroSection {\n          __typename\n          id\n          title\n          subtitle\n          button {\n            ...ButtonFragment\n          }\n          image {\n            ...UploadFileFragment\n          }\n          mobileImage {\n            ...UploadFileFragment\n          }\n        }\n        ... on ComponentSectionsGridSection {\n          __typename\n          id\n          cards {\n            id\n            title\n            description\n            type\n            url\n            image {\n              ...UploadFileFragment\n            }\n            button {\n              ...ButtonFragment\n            }\n          }\n        }\n        ... on ComponentSectionsDescriptionSection {\n          __typename\n          id\n          image {\n            ...UploadFileFragment\n          }\n          type\n          content\n          imagePlacement\n        }\n        ... on ComponentSectionsServiceSection {\n          __typename\n          id\n          columnOne {\n            id\n            image {\n              ...UploadFileFragment\n            }\n            title\n            url {\n              id\n              title\n              url\n              isExternal\n            }\n          }\n          columnTwo {\n            id\n            image {\n              ...UploadFileFragment\n            }\n            title\n            url {\n              id\n              title\n              url\n              isExternal\n            }\n          }\n        }\n        ... on ComponentSectionsAdressMapSection {\n          id\n          __typename\n          contacts {\n            __typename\n            id\n            title\n            column_one\n            column_two\n            title\n            map {\n              __typename\n              id\n              latitude\n              longitude\n              mapPlacement\n              allowFullscreen\n              scaleControl\n              navigationControl\n            }\n          }\n        }\n        ... on ComponentSectionsContactSection {\n          __typename\n          form {\n            ...FormComponent\n          }\n        }\n        ... on ComponentSectionsContactWithModalSection {\n          __typename\n          title\n          id\n          content\n          formInModal {\n            ...FormComponent\n          }\n          button {\n            ...ButtonFragment\n          }\n        }\n\n        ... on ComponentSectionsArticleSection {\n          __typename\n          id\n          content\n        }\n        ... on Error {\n          __typename\n          code\n          message\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  \n  query GetPageQuery($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      sections {\n        ... on ComponentSectionsTitleSection {\n          __typename\n          id\n          title\n          subtitle\n          alignText\n        }\n        ... on ComponentSectionsHeroSection {\n          __typename\n          id\n          title\n          subtitle\n          button {\n            ...ButtonFragment\n          }\n          image {\n            ...UploadFileFragment\n          }\n          mobileImage {\n            ...UploadFileFragment\n          }\n        }\n        ... on ComponentSectionsGridSection {\n          __typename\n          id\n          cards {\n            id\n            title\n            description\n            type\n            url\n            image {\n              ...UploadFileFragment\n            }\n            button {\n              ...ButtonFragment\n            }\n          }\n        }\n        ... on ComponentSectionsDescriptionSection {\n          __typename\n          id\n          image {\n            ...UploadFileFragment\n          }\n          type\n          content\n          imagePlacement\n        }\n        ... on ComponentSectionsServiceSection {\n          __typename\n          id\n          columnOne {\n            id\n            image {\n              ...UploadFileFragment\n            }\n            title\n            url {\n              id\n              title\n              url\n              isExternal\n            }\n          }\n          columnTwo {\n            id\n            image {\n              ...UploadFileFragment\n            }\n            title\n            url {\n              id\n              title\n              url\n              isExternal\n            }\n          }\n        }\n        ... on ComponentSectionsAdressMapSection {\n          id\n          __typename\n          contacts {\n            __typename\n            id\n            title\n            column_one\n            column_two\n            title\n            map {\n              __typename\n              id\n              latitude\n              longitude\n              mapPlacement\n              allowFullscreen\n              scaleControl\n              navigationControl\n            }\n          }\n        }\n        ... on ComponentSectionsContactSection {\n          __typename\n          form {\n            ...FormComponent\n          }\n        }\n        ... on ComponentSectionsContactWithModalSection {\n          __typename\n          title\n          id\n          content\n          formInModal {\n            ...FormComponent\n          }\n          button {\n            ...ButtonFragment\n          }\n        }\n\n        ... on ComponentSectionsArticleSection {\n          __typename\n          id\n          content\n        }\n        ... on Error {\n          __typename\n          code\n          message\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetPageSeoQuery($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      seo {\n        __typename\n        id\n        metaTitle\n        metaDescription\n        keywords\n        canonicalURL\n        metaViewport\n        structuredData\n        metaImage {\n          ...UploadFileFragment\n        }\n        openGraph {\n          __typename\n          id\n          og_title\n          og_description\n          og_type\n          og_url\n          og_image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetPageSeoQuery($locale: I18NLocaleCode!, $url: String!) {\n    pages(locale: $locale, filters: { url: { eq: $url } }) {\n      __typename\n      seo {\n        __typename\n        id\n        metaTitle\n        metaDescription\n        keywords\n        canonicalURL\n        metaViewport\n        structuredData\n        metaImage {\n          ...UploadFileFragment\n        }\n        openGraph {\n          __typename\n          id\n          og_title\n          og_description\n          og_type\n          og_url\n          og_image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n  query GetTechnicla($locale: I18NLocaleCode) {\n    footer(locale: $locale) {\n      documentId\n      __typename\n      descriptions {\n        ... on ComponentUiParagraph {\n          id\n          paragraph\n        }\n      }\n      links {\n        ... on ComponentUiLink {\n          id\n          title\n          url\n          isExternal\n        }\n      }\n      socials {\n        ... on ComponentSocialSocial {\n          id\n          url\n          image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n    header(locale: $locale) {\n      __typename\n      documentId\n      links {\n        ... on ComponentUiLink {\n          id\n          title\n          url\n          isExternal\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  \n  query GetTechnicla($locale: I18NLocaleCode) {\n    footer(locale: $locale) {\n      documentId\n      __typename\n      descriptions {\n        ... on ComponentUiParagraph {\n          id\n          paragraph\n        }\n      }\n      links {\n        ... on ComponentUiLink {\n          id\n          title\n          url\n          isExternal\n        }\n      }\n      socials {\n        ... on ComponentSocialSocial {\n          id\n          url\n          image {\n            ...UploadFileFragment\n          }\n        }\n      }\n    }\n    header(locale: $locale) {\n      __typename\n      documentId\n      links {\n        ... on ComponentUiLink {\n          id\n          title\n          url\n          isExternal\n        }\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
