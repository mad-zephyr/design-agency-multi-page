import { ReactNode } from 'react';

import {
  ComponentCardsCommonCard,
  ComponentCardsServiceCard,
  ComponentSharedContactWithLocation,
  Enum_Componentcardscommoncard_Type,
  Enum_Componentsectionsdescriptionsection_Type,
  Enum_Componentsharedmap_Mapplacement,
  Maybe,
  Page,
} from '@/types/types';

import { populateFormWithData } from '../forms/formHelpers';
import {
  AccentSection,
  ArticleSection,
  ContactLocationSection,
  ContactSection,
  DescriptionSection,
  GetinTouchSection,
  GridSection,
  HeroSection,
  ServiceSection,
  TitleSection,
} from '../sections';
import { PreviewCard } from '../sections/components';
import { FeatureCard } from '../sections/components/featureCard/featureCard';
import type { TContactWithLocation } from '../sections/contactLocationSection/components';
import type { TServiceCard } from '../sections/serviceSection/components';
import { getUiGenericButtonProps } from './getGenericButtonProps';
import { uiUploadfile } from './uiUploadfile';

type TPage = { sections: ReactNode[] };

const getUiServiceSectionColumn = (
  column?: Maybe<Maybe<ComponentCardsServiceCard>[]>
): TServiceCard[] => {
  if (!column) {
    return [];
  }

  return column
    .filter((item) => !!item)
    .map((item) => ({
      image: uiUploadfile(item.image),
      title: item.title,
      link: item.url,
    }));
};

const getGridSectionCards = (
  cards?: Maybe<Maybe<ComponentCardsCommonCard>[]>
) => {
  if (!cards) {
    return [];
  }

  return cards
    .filter((card) => !!card)
    .map((card) => {
      if (card.type === Enum_Componentcardscommoncard_Type.Feature) {
        return (
          <FeatureCard
            key={card.id}
            image={uiUploadfile(card.image)}
            title={card.title}
            description={card.description}
            button={getUiGenericButtonProps(card.button)}
          />
        );
      }

      if (card.type === Enum_Componentcardscommoncard_Type.Preview) {
        return (
          <PreviewCard
            key={card.id}
            image={uiUploadfile(card.image)}
            title={card.title}
            description={card.description}
            link={card.url ?? '/'}
          />
        );
      }
    });
};

const getDataLocationMap = (
  contacts?: Maybe<Maybe<ComponentSharedContactWithLocation>[]>
): TContactWithLocation[] => {
  if (!contacts) {
    return [];
  }

  return contacts
    .filter((data) => !!data)
    .map((item) => ({
      data: {
        title: item.title || '',
        contents: [item.column_one, item.column_two],
      },
      mapPlacement:
        item.map?.mapPlacement &&
        item.map?.mapPlacement === Enum_Componentsharedmap_Mapplacement.Left
          ? 'left'
          : 'right',
      map: {
        allowFullscreen: item.map?.allowFullscreen || false,
        latitude: item.map?.latitude || 0,
        longitude: item.map?.longitude || 0,
        scaleControl: !!item.map?.scaleControl,
        navigationControl: !!item.map?.navigationControl,
      },
    }));
};

export const getUiPageSections = (serverResponse: Page) => {
  const sections = serverResponse?.sections;

  const page: TPage = {
    sections: [],
  };

  if (!sections) {
    return page;
  }

  const data = sections.filter((section) => !!section);

  data.forEach((section, index) => {
    if (section.__typename === 'ComponentSectionsHeroSection') {
      page.sections.push(
        <HeroSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          image={uiUploadfile(section.image)}
          imageMobile={uiUploadfile(section.mobileImage)}
          button={getUiGenericButtonProps(section.button)}
        />
      );
    }

    if (section.__typename === 'ComponentSectionsTitleSection') {
      page.sections.push(
        <TitleSection
          key={index}
          title={section.title}
          description={section.subtitle}
          textAlign={section.alignText}
        />
      );
    }

    if (section.__typename === 'ComponentSectionsServiceSection') {
      page.sections.push(
        <ServiceSection
          key={index}
          columnOne={getUiServiceSectionColumn(section.columnOne)}
          columnTwo={getUiServiceSectionColumn(section.columnTwo)}
        />
      );
    }

    if (section.__typename === 'ComponentSectionsGridSection') {
      page.sections.push(
        <GridSection key={index}>
          {getGridSectionCards(section.cards)}
        </GridSection>
      );
    }

    if (
      section.__typename === 'ComponentSectionsDescriptionSection' &&
      section.type === Enum_Componentsectionsdescriptionsection_Type.Accent
    ) {
      page.sections.push(
        <AccentSection
          key={index}
          content={section.content}
          image={uiUploadfile(section.image)}
        />
      );
    }
    if (
      section.__typename === 'ComponentSectionsDescriptionSection' &&
      section.type === Enum_Componentsectionsdescriptionsection_Type.Description
    ) {
      page.sections.push(
        <DescriptionSection
          key={index}
          content={section.content}
          image={uiUploadfile(section.image)}
          imagePlacement={section.imagePlacement}
        />
      );
    }

    if (section.__typename === 'ComponentSectionsAdressMapSection') {
      page.sections.push(
        <ContactLocationSection
          key={index}
          data={getDataLocationMap(section.contacts)}
        />
      );
    }

    if (section.__typename === 'ComponentSectionsContactWithModalSection') {
      page.sections.push(
        <GetinTouchSection
          key={index}
          title={section.title}
          content={section.content}
          button={getUiGenericButtonProps(section.button)}
          form={populateFormWithData(section.formInModal)}
          formDescription={section.formInModal?.content}
        />
      );
    }
    if (section.__typename === 'ComponentSectionsContactSection') {
      page.sections.push(
        <ContactSection
          key={index}
          form={populateFormWithData(section.form)}
          formDescription={section.form?.content}
        />
      );
    }

    if (section.__typename === 'ComponentSectionsArticleSection') {
      page.sections.push(
        <ArticleSection key={index} content={section.content} />
      );
    }
  });

  return page;
};
