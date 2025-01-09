export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  FooterDescriptionsDynamicZoneInput: { input: any; output: any };
  FooterLinksDynamicZoneInput: { input: any; output: any };
  FooterSocialsDynamicZoneInput: { input: any; output: any };
  FormButtonsDynamicZoneInput: { input: any; output: any };
  FormInputsDynamicZoneInput: { input: any; output: any };
  HeaderLinksDynamicZoneInput: { input: any; output: any };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: any; output: any };
  PageSectionsDynamicZoneInput: { input: any; output: any };
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentCardsCommonCard = {
  __typename?: 'ComponentCardsCommonCard';
  button?: Maybe<ComponentUiButton>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Componentcardscommoncard_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentCardsCommonCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCardsCommonCardFiltersInput>>>;
  button?: InputMaybe<ComponentUiButtonFiltersInput>;
  description?: InputMaybe<JsonFilterInput>;
  not?: InputMaybe<ComponentCardsCommonCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCardsCommonCardFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentCardsFeatureCard = {
  __typename?: 'ComponentCardsFeatureCard';
  button?: Maybe<ComponentUiButton>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentCardsPreviewCards = {
  __typename?: 'ComponentCardsPreviewCards';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ComponentUiLink>;
};

export type ComponentCardsServiceCard = {
  __typename?: 'ComponentCardsServiceCard';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ComponentUiLink>;
};

export type ComponentCardsServiceCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCardsServiceCardFiltersInput>>>;
  not?: InputMaybe<ComponentCardsServiceCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCardsServiceCardFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ComponentUiLinkFiltersInput>;
};

export type ComponentFormCheckbox = {
  __typename?: 'ComponentFormCheckbox';
  default_checked: Scalars['Boolean']['output'];
  field_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  validation_rules?: Maybe<Array<Maybe<ComponentFormValidation>>>;
  width: Scalars['Int']['output'];
};

export type ComponentFormCheckboxValidation_RulesArgs = {
  filters?: InputMaybe<ComponentFormValidationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFormInput = {
  __typename?: 'ComponentFormInput';
  field_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  type: Enum_Componentforminput_Type;
  validation_rules?: Maybe<Array<Maybe<ComponentFormValidation>>>;
  width: Scalars['Int']['output'];
};

export type ComponentFormInputValidation_RulesArgs = {
  filters?: InputMaybe<ComponentFormValidationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFormMailSettings = {
  __typename?: 'ComponentFormMailSettings';
  footer?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mailList: Array<Maybe<ComponentSharedEmail>>;
  subject: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ComponentFormMailSettingsMailListArgs = {
  filters?: InputMaybe<ComponentSharedEmailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFormMailSettingsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFormMailSettingsFiltersInput>>>;
  footer?: InputMaybe<StringFilterInput>;
  mailList?: InputMaybe<ComponentSharedEmailFiltersInput>;
  not?: InputMaybe<ComponentFormMailSettingsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFormMailSettingsFiltersInput>>>;
  subject?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentFormMailSettingsInput = {
  footer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mailList?: InputMaybe<Array<InputMaybe<ComponentSharedEmailInput>>>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFormOption = {
  __typename?: 'ComponentFormOption';
  field_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentFormOptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFormOptionFiltersInput>>>;
  field_id?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFormOptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFormOptionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentFormSelect = {
  __typename?: 'ComponentFormSelect';
  field_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  options: Array<Maybe<ComponentFormOption>>;
  placeholder?: Maybe<Scalars['String']['output']>;
  validation_rules?: Maybe<Array<Maybe<ComponentFormValidation>>>;
  width: Scalars['Int']['output'];
};

export type ComponentFormSelectOptionsArgs = {
  filters?: InputMaybe<ComponentFormOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFormSelectValidation_RulesArgs = {
  filters?: InputMaybe<ComponentFormValidationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFormValidation = {
  __typename?: 'ComponentFormValidation';
  errorMessage: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  type?: Maybe<Enum_Componentformvalidation_Type>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type ComponentFormValidationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFormValidationFiltersInput>>>;
  errorMessage?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFormValidationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFormValidationFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<IntFilterInput>;
};

export type ComponentOtherColumnOne = {
  __typename?: 'ComponentOtherColumnOne';
  id: Scalars['ID']['output'];
};

export type ComponentSectionsAdressMapSection = {
  __typename?: 'ComponentSectionsAdressMapSection';
  contacts?: Maybe<Array<Maybe<ComponentSharedContactWithLocation>>>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsAdressMapSectionContactsArgs = {
  filters?: InputMaybe<ComponentSharedContactWithLocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsArticleSection = {
  __typename?: 'ComponentSectionsArticleSection';
  content?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsContactSection = {
  __typename?: 'ComponentSectionsContactSection';
  form?: Maybe<Form>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsContactWithModalSection = {
  __typename?: 'ComponentSectionsContactWithModalSection';
  button?: Maybe<ComponentUiButton>;
  content?: Maybe<Scalars['JSON']['output']>;
  formInModal?: Maybe<Form>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsDescriptionSection = {
  __typename?: 'ComponentSectionsDescriptionSection';
  content?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  imagePlacement: Enum_Componentsectionsdescriptionsection_Imageplacement;
  type?: Maybe<Enum_Componentsectionsdescriptionsection_Type>;
};

export type ComponentSectionsGridSection = {
  __typename?: 'ComponentSectionsGridSection';
  cards?: Maybe<Array<Maybe<ComponentCardsCommonCard>>>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsGridSectionCardsArgs = {
  filters?: InputMaybe<ComponentCardsCommonCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsHeroSection = {
  __typename?: 'ComponentSectionsHeroSection';
  button?: Maybe<ComponentUiButton>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  mobileImage?: Maybe<UploadFile>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsServiceSection = {
  __typename?: 'ComponentSectionsServiceSection';
  columnOne?: Maybe<Array<Maybe<ComponentCardsServiceCard>>>;
  columnTwo?: Maybe<Array<Maybe<ComponentCardsServiceCard>>>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsServiceSectionColumnOneArgs = {
  filters?: InputMaybe<ComponentCardsServiceCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsServiceSectionColumnTwoArgs = {
  filters?: InputMaybe<ComponentCardsServiceCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsTitleSection = {
  __typename?: 'ComponentSectionsTitleSection';
  alignText: Enum_Componentsectionstitlesection_Aligntext;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedContactWithLocation = {
  __typename?: 'ComponentSharedContactWithLocation';
  column_one?: Maybe<Scalars['JSON']['output']>;
  column_two?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  map?: Maybe<ComponentSharedMap>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedContactWithLocationFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentSharedContactWithLocationFiltersInput>>
  >;
  column_one?: InputMaybe<JsonFilterInput>;
  column_two?: InputMaybe<JsonFilterInput>;
  map?: InputMaybe<ComponentSharedMapFiltersInput>;
  not?: InputMaybe<ComponentSharedContactWithLocationFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentSharedContactWithLocationFiltersInput>>
  >;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedEmail = {
  __typename?: 'ComponentSharedEmail';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedEmailFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedEmailFiltersInput>>>;
  email?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedEmailFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedEmailFiltersInput>>>;
};

export type ComponentSharedEmailInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMap = {
  __typename?: 'ComponentSharedMap';
  allowFullscreen?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  mapPlacement: Enum_Componentsharedmap_Mapplacement;
  navigationControl: Scalars['Boolean']['output'];
  scaleControl: Scalars['Boolean']['output'];
};

export type ComponentSharedMapFiltersInput = {
  allowFullscreen?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMapFiltersInput>>>;
  latitude?: InputMaybe<FloatFilterInput>;
  longitude?: InputMaybe<FloatFilterInput>;
  mapPlacement?: InputMaybe<StringFilterInput>;
  navigationControl?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSharedMapFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMapFiltersInput>>>;
  scaleControl?: InputMaybe<BooleanFilterInput>;
};

export type ComponentSharedOpenGraph = {
  __typename?: 'ComponentSharedOpenGraph';
  id: Scalars['ID']['output'];
  og_description: Scalars['String']['output'];
  og_image?: Maybe<UploadFile>;
  og_title: Scalars['String']['output'];
  og_type?: Maybe<Scalars['String']['output']>;
  og_url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedOpenGraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedOpenGraphFiltersInput>>>;
  not?: InputMaybe<ComponentSharedOpenGraphFiltersInput>;
  og_description?: InputMaybe<StringFilterInput>;
  og_title?: InputMaybe<StringFilterInput>;
  og_type?: InputMaybe<StringFilterInput>;
  og_url?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedOpenGraphFiltersInput>>>;
};

export type ComponentSharedOpenGraphInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  og_description?: InputMaybe<Scalars['String']['input']>;
  og_image?: InputMaybe<Scalars['ID']['input']>;
  og_title?: InputMaybe<Scalars['String']['input']>;
  og_type?: InputMaybe<Scalars['String']['input']>;
  og_url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFile>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  openGraph?: Maybe<ComponentSharedOpenGraph>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  openGraph?: InputMaybe<ComponentSharedOpenGraphFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  openGraph?: InputMaybe<ComponentSharedOpenGraphInput>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentSocialSocial = {
  __typename?: 'ComponentSocialSocial';
  id: Scalars['ID']['output'];
  image: UploadFile;
  url: Scalars['String']['output'];
};

export type ComponentUiButton = {
  __typename?: 'ComponentUiButton';
  btnStyle: Enum_Componentuibutton_Btnstyle;
  btnType: Enum_Componentuibutton_Btntype;
  id: Scalars['ID']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Enum_Componentuibutton_Variant>;
};

export type ComponentUiButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiButtonFiltersInput>>>;
  btnStyle?: InputMaybe<StringFilterInput>;
  btnType?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUiButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiButtonFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentUiLink = {
  __typename?: 'ComponentUiLink';
  id: Scalars['ID']['output'];
  isExternal: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ComponentUiLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUiLinkFiltersInput>>>;
  isExternal?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentUiLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUiLinkFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentUiParagraph = {
  __typename?: 'ComponentUiParagraph';
  id: Scalars['ID']['output'];
  paragraph?: Maybe<Scalars['JSON']['output']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export enum Enum_Componentcardscommoncard_Type {
  Feature = 'feature',
  Preview = 'preview',
  Service = 'service',
}

export enum Enum_Componentforminput_Type {
  Email = 'email',
  Number = 'number',
  Tel = 'tel',
  Text = 'text',
  Textarea = 'textarea',
  Url = 'url',
}

export enum Enum_Componentformvalidation_Type {
  Max = 'max',
  Min = 'min',
  Required = 'required',
}

export enum Enum_Componentsectionsdescriptionsection_Imageplacement {
  Left = 'left',
  Right = 'right',
}

export enum Enum_Componentsectionsdescriptionsection_Type {
  Accent = 'accent',
  Description = 'description',
}

export enum Enum_Componentsectionstitlesection_Aligntext {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

export enum Enum_Componentsharedmap_Mapplacement {
  Left = 'left',
  Right = 'right',
}

export enum Enum_Componentuibutton_Btnstyle {
  Moving = 'moving',
  Standard = 'standard',
}

export enum Enum_Componentuibutton_Btntype {
  Download = 'download',
  Form = 'form',
  NavExternal = 'nav_external',
  NavInternal = 'nav_internal',
  Submit = 'submit',
}

export enum Enum_Componentuibutton_Variant {
  Dark = 'dark',
  Light = 'light',
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  descriptions?: Maybe<Array<Maybe<FooterDescriptionsDynamicZone>>>;
  documentId: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<FooterLinksDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Footer>>;
  localizations_connection?: Maybe<FooterRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socials?: Maybe<Array<Maybe<FooterSocialsDynamicZone>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterDescriptionsDynamicZone = ComponentUiParagraph | Error;

export type FooterInput = {
  descriptions?: InputMaybe<
    Array<Scalars['FooterDescriptionsDynamicZoneInput']['input']>
  >;
  links?: InputMaybe<Array<Scalars['FooterLinksDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socials?: InputMaybe<
    Array<Scalars['FooterSocialsDynamicZoneInput']['input']>
  >;
};

export type FooterLinksDynamicZone = ComponentUiLink | Error;

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  nodes: Array<Footer>;
};

export type FooterSocialsDynamicZone = ComponentSocialSocial | Error;

export type Form = {
  __typename?: 'Form';
  buttons: Array<Maybe<FormButtonsDynamicZone>>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  form_id: Scalars['String']['output'];
  inputs?: Maybe<Array<Maybe<FormInputsDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Form>>;
  localizations_connection?: Maybe<FormRelationResponseCollection>;
  mailSettings: ComponentFormMailSettings;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FormLocalizationsArgs = {
  filters?: InputMaybe<FormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormLocalizations_ConnectionArgs = {
  filters?: InputMaybe<FormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormButtonsDynamicZone = ComponentUiButton | Error;

export type FormEntityResponseCollection = {
  __typename?: 'FormEntityResponseCollection';
  nodes: Array<Form>;
  pageInfo: Pagination;
};

export type FormFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FormFiltersInput>>>;
  content?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  form_id?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<FormFiltersInput>;
  mailSettings?: InputMaybe<ComponentFormMailSettingsFiltersInput>;
  not?: InputMaybe<FormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FormFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FormInput = {
  buttons?: InputMaybe<Array<Scalars['FormButtonsDynamicZoneInput']['input']>>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  form_id?: InputMaybe<Scalars['String']['input']>;
  inputs?: InputMaybe<Array<Scalars['FormInputsDynamicZoneInput']['input']>>;
  mailSettings?: InputMaybe<ComponentFormMailSettingsInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FormInputsDynamicZone =
  | ComponentFormCheckbox
  | ComponentFormInput
  | ComponentFormSelect
  | Error;

export type FormRelationResponseCollection = {
  __typename?: 'FormRelationResponseCollection';
  nodes: Array<Form>;
};

export type GenericMorph =
  | ComponentCardsCommonCard
  | ComponentCardsFeatureCard
  | ComponentCardsPreviewCards
  | ComponentCardsServiceCard
  | ComponentFormCheckbox
  | ComponentFormInput
  | ComponentFormMailSettings
  | ComponentFormOption
  | ComponentFormSelect
  | ComponentFormValidation
  | ComponentOtherColumnOne
  | ComponentSectionsAdressMapSection
  | ComponentSectionsArticleSection
  | ComponentSectionsContactSection
  | ComponentSectionsContactWithModalSection
  | ComponentSectionsDescriptionSection
  | ComponentSectionsGridSection
  | ComponentSectionsHeroSection
  | ComponentSectionsServiceSection
  | ComponentSectionsTitleSection
  | ComponentSharedContactWithLocation
  | ComponentSharedEmail
  | ComponentSharedMap
  | ComponentSharedOpenGraph
  | ComponentSharedSeo
  | ComponentSocialSocial
  | ComponentUiButton
  | ComponentUiLink
  | ComponentUiParagraph
  | Footer
  | Form
  | Header
  | I18NLocale
  | Page
  | ReviewWorkflowsWorkflow
  | ReviewWorkflowsWorkflowStage
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type Header = {
  __typename?: 'Header';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<HeaderLinksDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Header>>;
  localizations_connection?: Maybe<HeaderRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HeaderInput = {
  links?: InputMaybe<Array<Scalars['HeaderLinksDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HeaderLinksDynamicZone = ComponentUiLink | Error;

export type HeaderRelationResponseCollection = {
  __typename?: 'HeaderRelationResponseCollection';
  nodes: Array<Header>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createForm?: Maybe<Form>;
  createPage?: Maybe<Page>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteFooter?: Maybe<DeleteMutationResponse>;
  deleteForm?: Maybe<DeleteMutationResponse>;
  deleteHeader?: Maybe<DeleteMutationResponse>;
  deletePage?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFooter?: Maybe<Footer>;
  updateForm?: Maybe<Form>;
  updateHeader?: Maybe<Header>;
  updatePage?: Maybe<Page>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreateFormArgs = {
  data: FormInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteFormArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationUpdateFooterArgs = {
  data: FooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateFormArgs = {
  data: FormInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Page = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Page>>;
  localizations_connection?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageLocalizations_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<Page>;
  pageInfo: Pagination;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type PageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<
    Array<Scalars['PageSectionsDynamicZoneInput']['input']>
  >;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  nodes: Array<Page>;
};

export type PageSectionsDynamicZone =
  | ComponentSectionsAdressMapSection
  | ComponentSectionsArticleSection
  | ComponentSectionsContactSection
  | ComponentSectionsContactWithModalSection
  | ComponentSectionsDescriptionSection
  | ComponentSectionsGridSection
  | ComponentSectionsHeroSection
  | ComponentSectionsServiceSection
  | ComponentSectionsTitleSection
  | Error;

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type Query = {
  __typename?: 'Query';
  footer?: Maybe<Footer>;
  form?: Maybe<Form>;
  forms: Array<Maybe<Form>>;
  forms_connection?: Maybe<FormEntityResponseCollection>;
  header?: Maybe<Header>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<Page>;
  pages: Array<Maybe<Page>>;
  pages_connection?: Maybe<PageEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryFormArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryFormsArgs = {
  filters?: InputMaybe<FormFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryForms_ConnectionArgs = {
  filters?: InputMaybe<FormFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryHeaderArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPageArgs = {
  documentId: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type CheckboxFragmentFragment = {
  __typename: 'ComponentFormCheckbox';
  field_id: string;
  id: string;
  label?: string | null;
  width: number;
  default_checked: boolean;
  validation_rules?: Array<{
    __typename: 'ComponentFormValidation';
    id: string;
    type?: Enum_Componentformvalidation_Type | null;
    value?: number | null;
    errorMessage: string;
  } | null> | null;
};

export type ButtonFragmentFragment = {
  __typename: 'ComponentUiButton';
  id: string;
  title?: string | null;
  subtitle?: string | null;
  btnType: Enum_Componentuibutton_Btntype;
  url?: string | null;
  variant?: Enum_Componentuibutton_Variant | null;
  btnStyle: Enum_Componentuibutton_Btnstyle;
};

export type FormComponentFragment = {
  __typename: 'Form';
  documentId: string;
  form_id: string;
  title: string;
  content?: any | null;
  inputs?: Array<
    | {
        __typename: 'ComponentFormCheckbox';
        field_id: string;
        id: string;
        label?: string | null;
        width: number;
        default_checked: boolean;
        validation_rules?: Array<{
          __typename: 'ComponentFormValidation';
          id: string;
          type?: Enum_Componentformvalidation_Type | null;
          value?: number | null;
          errorMessage: string;
        } | null> | null;
      }
    | {
        __typename: 'ComponentFormInput';
        field_id: string;
        id: string;
        label?: string | null;
        placeholder?: string | null;
        type: Enum_Componentforminput_Type;
        width: number;
        validation_rules?: Array<{
          __typename: 'ComponentFormValidation';
          id: string;
          type?: Enum_Componentformvalidation_Type | null;
          value?: number | null;
          errorMessage: string;
        } | null> | null;
      }
    | {
        __typename: 'ComponentFormSelect';
        field_id: string;
        id: string;
        label?: string | null;
        placeholder?: string | null;
        width: number;
        validation_rules?: Array<{
          __typename: 'ComponentFormValidation';
          id: string;
          type?: Enum_Componentformvalidation_Type | null;
          value?: number | null;
          errorMessage: string;
        } | null> | null;
      }
    | { __typename?: 'Error' }
    | null
  > | null;
  buttons: Array<
    | {
        __typename: 'ComponentUiButton';
        id: string;
        title?: string | null;
        subtitle?: string | null;
        btnType: Enum_Componentuibutton_Btntype;
        url?: string | null;
        variant?: Enum_Componentuibutton_Variant | null;
        btnStyle: Enum_Componentuibutton_Btnstyle;
      }
    | { __typename?: 'Error' }
    | null
  >;
  mailSettings: {
    __typename: 'ComponentFormMailSettings';
    subject: string;
    title: string;
    subtitle?: string | null;
    mailList: Array<{
      __typename?: 'ComponentSharedEmail';
      id: string;
      name?: string | null;
      email: string;
    } | null>;
  };
};

export type FormMailSettingsFragmentFragment = {
  __typename: 'ComponentFormMailSettings';
  subject: string;
  title: string;
  subtitle?: string | null;
  mailList: Array<{
    __typename?: 'ComponentSharedEmail';
    id: string;
    name?: string | null;
    email: string;
  } | null>;
};

export type InputFragmentFragment = {
  __typename: 'ComponentFormInput';
  field_id: string;
  id: string;
  label?: string | null;
  placeholder?: string | null;
  type: Enum_Componentforminput_Type;
  width: number;
  validation_rules?: Array<{
    __typename: 'ComponentFormValidation';
    id: string;
    type?: Enum_Componentformvalidation_Type | null;
    value?: number | null;
    errorMessage: string;
  } | null> | null;
};

export type SelectFragmentFragment = {
  __typename: 'ComponentFormSelect';
  field_id: string;
  id: string;
  label?: string | null;
  placeholder?: string | null;
  width: number;
  validation_rules?: Array<{
    __typename: 'ComponentFormValidation';
    id: string;
    type?: Enum_Componentformvalidation_Type | null;
    value?: number | null;
    errorMessage: string;
  } | null> | null;
};

export type UploadFileFragmentFragment = {
  __typename: 'UploadFile';
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  formats?: any | null;
  hash: string;
  ext?: string | null;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: any | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  publishedAt?: any | null;
};

export type ValidationRulesFragment = {
  __typename: 'ComponentFormValidation';
  id: string;
  type?: Enum_Componentformvalidation_Type | null;
  value?: number | null;
  errorMessage: string;
};

export type GetPageQueryQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  url: Scalars['String']['input'];
}>;

export type GetPageQueryQuery = {
  __typename?: 'Query';
  pages: Array<{
    __typename?: 'Page';
    sections?: Array<
      | {
          __typename: 'ComponentSectionsAdressMapSection';
          id: string;
          contacts?: Array<{
            __typename: 'ComponentSharedContactWithLocation';
            id: string;
            title?: string | null;
            column_one?: any | null;
            column_two?: any | null;
            map?: {
              __typename: 'ComponentSharedMap';
              id: string;
              latitude: number;
              longitude: number;
              mapPlacement: Enum_Componentsharedmap_Mapplacement;
              allowFullscreen?: boolean | null;
              scaleControl: boolean;
              navigationControl: boolean;
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'ComponentSectionsArticleSection';
          id: string;
          content?: any | null;
        }
      | {
          __typename: 'ComponentSectionsContactSection';
          form?: {
            __typename: 'Form';
            documentId: string;
            form_id: string;
            title: string;
            content?: any | null;
            inputs?: Array<
              | {
                  __typename: 'ComponentFormCheckbox';
                  field_id: string;
                  id: string;
                  label?: string | null;
                  width: number;
                  default_checked: boolean;
                  validation_rules?: Array<{
                    __typename: 'ComponentFormValidation';
                    id: string;
                    type?: Enum_Componentformvalidation_Type | null;
                    value?: number | null;
                    errorMessage: string;
                  } | null> | null;
                }
              | {
                  __typename: 'ComponentFormInput';
                  field_id: string;
                  id: string;
                  label?: string | null;
                  placeholder?: string | null;
                  type: Enum_Componentforminput_Type;
                  width: number;
                  validation_rules?: Array<{
                    __typename: 'ComponentFormValidation';
                    id: string;
                    type?: Enum_Componentformvalidation_Type | null;
                    value?: number | null;
                    errorMessage: string;
                  } | null> | null;
                }
              | {
                  __typename: 'ComponentFormSelect';
                  field_id: string;
                  id: string;
                  label?: string | null;
                  placeholder?: string | null;
                  width: number;
                  validation_rules?: Array<{
                    __typename: 'ComponentFormValidation';
                    id: string;
                    type?: Enum_Componentformvalidation_Type | null;
                    value?: number | null;
                    errorMessage: string;
                  } | null> | null;
                }
              | { __typename?: 'Error' }
              | null
            > | null;
            buttons: Array<
              | {
                  __typename: 'ComponentUiButton';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  btnType: Enum_Componentuibutton_Btntype;
                  url?: string | null;
                  variant?: Enum_Componentuibutton_Variant | null;
                  btnStyle: Enum_Componentuibutton_Btnstyle;
                }
              | { __typename?: 'Error' }
              | null
            >;
            mailSettings: {
              __typename: 'ComponentFormMailSettings';
              subject: string;
              title: string;
              subtitle?: string | null;
              mailList: Array<{
                __typename?: 'ComponentSharedEmail';
                id: string;
                name?: string | null;
                email: string;
              } | null>;
            };
          } | null;
        }
      | {
          __typename: 'ComponentSectionsContactWithModalSection';
          title?: string | null;
          id: string;
          content?: any | null;
          formInModal?: {
            __typename: 'Form';
            documentId: string;
            form_id: string;
            title: string;
            content?: any | null;
            inputs?: Array<
              | {
                  __typename: 'ComponentFormCheckbox';
                  field_id: string;
                  id: string;
                  label?: string | null;
                  width: number;
                  default_checked: boolean;
                  validation_rules?: Array<{
                    __typename: 'ComponentFormValidation';
                    id: string;
                    type?: Enum_Componentformvalidation_Type | null;
                    value?: number | null;
                    errorMessage: string;
                  } | null> | null;
                }
              | {
                  __typename: 'ComponentFormInput';
                  field_id: string;
                  id: string;
                  label?: string | null;
                  placeholder?: string | null;
                  type: Enum_Componentforminput_Type;
                  width: number;
                  validation_rules?: Array<{
                    __typename: 'ComponentFormValidation';
                    id: string;
                    type?: Enum_Componentformvalidation_Type | null;
                    value?: number | null;
                    errorMessage: string;
                  } | null> | null;
                }
              | {
                  __typename: 'ComponentFormSelect';
                  field_id: string;
                  id: string;
                  label?: string | null;
                  placeholder?: string | null;
                  width: number;
                  validation_rules?: Array<{
                    __typename: 'ComponentFormValidation';
                    id: string;
                    type?: Enum_Componentformvalidation_Type | null;
                    value?: number | null;
                    errorMessage: string;
                  } | null> | null;
                }
              | { __typename?: 'Error' }
              | null
            > | null;
            buttons: Array<
              | {
                  __typename: 'ComponentUiButton';
                  id: string;
                  title?: string | null;
                  subtitle?: string | null;
                  btnType: Enum_Componentuibutton_Btntype;
                  url?: string | null;
                  variant?: Enum_Componentuibutton_Variant | null;
                  btnStyle: Enum_Componentuibutton_Btnstyle;
                }
              | { __typename?: 'Error' }
              | null
            >;
            mailSettings: {
              __typename: 'ComponentFormMailSettings';
              subject: string;
              title: string;
              subtitle?: string | null;
              mailList: Array<{
                __typename?: 'ComponentSharedEmail';
                id: string;
                name?: string | null;
                email: string;
              } | null>;
            };
          } | null;
          button?: {
            __typename: 'ComponentUiButton';
            id: string;
            title?: string | null;
            subtitle?: string | null;
            btnType: Enum_Componentuibutton_Btntype;
            url?: string | null;
            variant?: Enum_Componentuibutton_Variant | null;
            btnStyle: Enum_Componentuibutton_Btnstyle;
          } | null;
        }
      | {
          __typename: 'ComponentSectionsDescriptionSection';
          id: string;
          type?: Enum_Componentsectionsdescriptionsection_Type | null;
          content?: any | null;
          imagePlacement: Enum_Componentsectionsdescriptionsection_Imageplacement;
          image?: {
            __typename: 'UploadFile';
            documentId: string;
            name: string;
            alternativeText?: string | null;
            caption?: string | null;
            width?: number | null;
            height?: number | null;
            formats?: any | null;
            hash: string;
            ext?: string | null;
            mime: string;
            size: number;
            url: string;
            previewUrl?: string | null;
            provider: string;
            provider_metadata?: any | null;
            createdAt?: any | null;
            updatedAt?: any | null;
            publishedAt?: any | null;
          } | null;
        }
      | {
          __typename: 'ComponentSectionsGridSection';
          id: string;
          cards?: Array<{
            __typename?: 'ComponentCardsCommonCard';
            id: string;
            title?: string | null;
            description?: any | null;
            type?: Enum_Componentcardscommoncard_Type | null;
            url?: string | null;
            image?: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            } | null;
            button?: {
              __typename: 'ComponentUiButton';
              id: string;
              title?: string | null;
              subtitle?: string | null;
              btnType: Enum_Componentuibutton_Btntype;
              url?: string | null;
              variant?: Enum_Componentuibutton_Variant | null;
              btnStyle: Enum_Componentuibutton_Btnstyle;
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'ComponentSectionsHeroSection';
          id: string;
          title?: string | null;
          subtitle?: string | null;
          button?: {
            __typename: 'ComponentUiButton';
            id: string;
            title?: string | null;
            subtitle?: string | null;
            btnType: Enum_Componentuibutton_Btntype;
            url?: string | null;
            variant?: Enum_Componentuibutton_Variant | null;
            btnStyle: Enum_Componentuibutton_Btnstyle;
          } | null;
          image?: {
            __typename: 'UploadFile';
            documentId: string;
            name: string;
            alternativeText?: string | null;
            caption?: string | null;
            width?: number | null;
            height?: number | null;
            formats?: any | null;
            hash: string;
            ext?: string | null;
            mime: string;
            size: number;
            url: string;
            previewUrl?: string | null;
            provider: string;
            provider_metadata?: any | null;
            createdAt?: any | null;
            updatedAt?: any | null;
            publishedAt?: any | null;
          } | null;
          mobileImage?: {
            __typename: 'UploadFile';
            documentId: string;
            name: string;
            alternativeText?: string | null;
            caption?: string | null;
            width?: number | null;
            height?: number | null;
            formats?: any | null;
            hash: string;
            ext?: string | null;
            mime: string;
            size: number;
            url: string;
            previewUrl?: string | null;
            provider: string;
            provider_metadata?: any | null;
            createdAt?: any | null;
            updatedAt?: any | null;
            publishedAt?: any | null;
          } | null;
        }
      | {
          __typename: 'ComponentSectionsServiceSection';
          id: string;
          columnOne?: Array<{
            __typename?: 'ComponentCardsServiceCard';
            id: string;
            title?: string | null;
            image?: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            } | null;
            url?: {
              __typename?: 'ComponentUiLink';
              id: string;
              title?: string | null;
              url: string;
              isExternal: boolean;
            } | null;
          } | null> | null;
          columnTwo?: Array<{
            __typename?: 'ComponentCardsServiceCard';
            id: string;
            title?: string | null;
            image?: {
              __typename: 'UploadFile';
              documentId: string;
              name: string;
              alternativeText?: string | null;
              caption?: string | null;
              width?: number | null;
              height?: number | null;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
              previewUrl?: string | null;
              provider: string;
              provider_metadata?: any | null;
              createdAt?: any | null;
              updatedAt?: any | null;
              publishedAt?: any | null;
            } | null;
            url?: {
              __typename?: 'ComponentUiLink';
              id: string;
              title?: string | null;
              url: string;
              isExternal: boolean;
            } | null;
          } | null> | null;
        }
      | {
          __typename: 'ComponentSectionsTitleSection';
          id: string;
          title?: string | null;
          subtitle?: string | null;
          alignText: Enum_Componentsectionstitlesection_Aligntext;
        }
      | { __typename: 'Error'; code: string; message?: string | null }
      | null
    > | null;
  } | null>;
};

export type GetTechniclaQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetTechniclaQuery = {
  __typename?: 'Query';
  footer?: {
    __typename: 'Footer';
    documentId: string;
    descriptions?: Array<
      | {
          __typename?: 'ComponentUiParagraph';
          id: string;
          paragraph?: any | null;
        }
      | { __typename?: 'Error' }
      | null
    > | null;
    links?: Array<
      | {
          __typename?: 'ComponentUiLink';
          id: string;
          title?: string | null;
          url: string;
          isExternal: boolean;
        }
      | { __typename?: 'Error' }
      | null
    > | null;
    socials?: Array<
      | {
          __typename?: 'ComponentSocialSocial';
          id: string;
          url: string;
          image: {
            __typename: 'UploadFile';
            documentId: string;
            name: string;
            alternativeText?: string | null;
            caption?: string | null;
            width?: number | null;
            height?: number | null;
            formats?: any | null;
            hash: string;
            ext?: string | null;
            mime: string;
            size: number;
            url: string;
            previewUrl?: string | null;
            provider: string;
            provider_metadata?: any | null;
            createdAt?: any | null;
            updatedAt?: any | null;
            publishedAt?: any | null;
          };
        }
      | { __typename?: 'Error' }
      | null
    > | null;
  } | null;
  header?: {
    __typename: 'Header';
    documentId: string;
    links?: Array<
      | {
          __typename?: 'ComponentUiLink';
          id: string;
          title?: string | null;
          url: string;
          isExternal: boolean;
        }
      | { __typename?: 'Error' }
      | null
    > | null;
  } | null;
};
