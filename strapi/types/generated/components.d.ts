import type { Schema, Struct } from '@strapi/strapi';

export interface CardsCommonCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_common_cards';
  info: {
    description: '';
    displayName: 'commonCard';
    icon: 'file';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['feature', 'preview', 'service']>;
    url: Schema.Attribute.String;
  };
}

export interface CardsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_feature_cards';
  info: {
    displayName: 'featureCard';
    icon: 'crown';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CardsPreviewCards extends Struct.ComponentSchema {
  collectionName: 'components_cards_preview_cards';
  info: {
    description: '';
    displayName: 'previewCard';
    icon: 'command';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Component<'ui.link', false>;
  };
}

export interface CardsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_service_cards';
  info: {
    displayName: 'ServiceCard';
    icon: 'calendar';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Component<'ui.link', false>;
  };
}

export interface FormCheckbox extends Struct.ComponentSchema {
  collectionName: 'components_form_checkboxes';
  info: {
    displayName: 'Checkbox';
    icon: 'check';
  };
  attributes: {
    default_checked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    field_id: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    validation_rules: Schema.Attribute.Component<'form.validation', true>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 25;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
  };
}

export interface FormInput extends Struct.ComponentSchema {
  collectionName: 'components_form_inputs';
  info: {
    description: '';
    displayName: 'input';
    icon: 'expand';
  };
  attributes: {
    field_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<' '>;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['text', 'textarea', 'number', 'email', 'tel', 'url']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
    validation_rules: Schema.Attribute.Component<'form.validation', true>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 25;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
  };
}

export interface FormMailSettings extends Struct.ComponentSchema {
  collectionName: 'components_form_mail_settings';
  info: {
    displayName: 'mailSettings';
    icon: 'connector';
  };
  attributes: {
    footer: Schema.Attribute.String;
    mailList: Schema.Attribute.Component<'shared.email', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    subject: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormOption extends Struct.ComponentSchema {
  collectionName: 'components_form_options';
  info: {
    displayName: 'option';
    icon: 'command';
  };
  attributes: {
    field_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormSelect extends Struct.ComponentSchema {
  collectionName: 'components_form_selects';
  info: {
    displayName: 'Select';
    icon: 'filter';
  };
  attributes: {
    field_id: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    options: Schema.Attribute.Component<'form.option', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    placeholder: Schema.Attribute.String;
    validation_rules: Schema.Attribute.Component<'form.validation', true>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 25;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
  };
}

export interface FormValidation extends Struct.ComponentSchema {
  collectionName: 'components_form_validations';
  info: {
    displayName: 'validation';
    icon: 'connector';
  };
  attributes: {
    errorMessage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'error message'>;
    type: Schema.Attribute.Enumeration<['required', 'min', 'max']>;
    value: Schema.Attribute.Integer;
  };
}

export interface OtherColumnOne extends Struct.ComponentSchema {
  collectionName: 'components_other_column_ones';
  info: {
    displayName: 'columnOne';
    icon: 'dashboard';
  };
  attributes: {};
}

export interface SectionsAdressMapSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_adress_map_sections';
  info: {
    description: '';
    displayName: 'AdressMapSection';
    icon: 'earth';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'shared.contact-with-location', true>;
  };
}

export interface SectionsArticleSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_article_sections';
  info: {
    displayName: 'ArticleSection';
    icon: 'pencil';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'ContactSection';
    icon: 'envelop';
  };
  attributes: {
    form: Schema.Attribute.Relation<'oneToOne', 'api::form.form'>;
  };
}

export interface SectionsContactWithModalSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_with_modal_sections';
  info: {
    displayName: 'ContactWithModalSection';
    icon: 'envelop';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    content: Schema.Attribute.Blocks;
    formInModal: Schema.Attribute.Relation<'oneToOne', 'api::form.form'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'  '>;
  };
}

export interface SectionsDescriptionSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_description_sections';
  info: {
    description: '';
    displayName: 'DescriptionSection';
    icon: 'archive';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    imagePlacement: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    type: Schema.Attribute.Enumeration<['accent', 'description']> &
      Schema.Attribute.DefaultTo<'accent'>;
  };
}

export interface SectionsGridSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_grid_sections';
  info: {
    description: '';
    displayName: 'GridSection';
    icon: 'dashboard';
  };
  attributes: {
    cards: Schema.Attribute.Component<'cards.common-card', true>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'crown';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    image: Schema.Attribute.Media<'images'>;
    mobileImage: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_sections';
  info: {
    displayName: 'serviceSection';
    icon: 'crop';
  };
  attributes: {
    columnOne: Schema.Attribute.Component<'cards.service-card', true>;
    columnTwo: Schema.Attribute.Component<'cards.service-card', true>;
  };
}

export interface SectionsTitleSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_title_sections';
  info: {
    description: '';
    displayName: 'TitleSection';
  };
  attributes: {
    alignText: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'center'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactWithLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_with_locations';
  info: {
    displayName: 'ContactWithLocation';
    icon: 'apps';
  };
  attributes: {
    column_one: Schema.Attribute.Blocks;
    column_two: Schema.Attribute.Blocks;
    map: Schema.Attribute.Component<'shared.map', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedEmail extends Struct.ComponentSchema {
  collectionName: 'components_shared_emails';
  info: {
    displayName: 'email';
    icon: 'user';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    name: Schema.Attribute.String;
  };
}

export interface SharedMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_maps';
  info: {
    description: '';
    displayName: 'map';
    icon: 'expand';
  };
  attributes: {
    allowFullscreen: Schema.Attribute.Boolean;
    latitude: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 90;
          min: -90;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    longitude: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 180;
          min: -180;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    mapPlacement: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    navigationControl: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    scaleControl: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    og_description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    og_image: Schema.Attribute.Media<'images'>;
    og_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    og_type: Schema.Attribute.String;
    og_url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SocialSocial extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    btnStyle: Schema.Attribute.Enumeration<['moving', 'standard']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'standard'>;
    btnType: Schema.Attribute.Enumeration<
      ['nav_internal', 'nav_external', 'download', 'submit', 'form']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'nav_internal'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface UiParagraph extends Struct.ComponentSchema {
  collectionName: 'components_ui_paragraphs';
  info: {
    description: '';
    displayName: 'paragraph';
    icon: 'bulletList';
  };
  attributes: {
    paragraph: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.common-card': CardsCommonCard;
      'cards.feature-card': CardsFeatureCard;
      'cards.preview-cards': CardsPreviewCards;
      'cards.service-card': CardsServiceCard;
      'form.checkbox': FormCheckbox;
      'form.input': FormInput;
      'form.mail-settings': FormMailSettings;
      'form.option': FormOption;
      'form.select': FormSelect;
      'form.validation': FormValidation;
      'other.column-one': OtherColumnOne;
      'sections.adress-map-section': SectionsAdressMapSection;
      'sections.article-section': SectionsArticleSection;
      'sections.contact-section': SectionsContactSection;
      'sections.contact-with-modal-section': SectionsContactWithModalSection;
      'sections.description-section': SectionsDescriptionSection;
      'sections.grid-section': SectionsGridSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.service-section': SectionsServiceSection;
      'sections.title-section': SectionsTitleSection;
      'shared.contact-with-location': SharedContactWithLocation;
      'shared.email': SharedEmail;
      'shared.map': SharedMap;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'social.social': SocialSocial;
      'ui.button': UiButton;
      'ui.link': UiLink;
      'ui.paragraph': UiParagraph;
    }
  }
}
