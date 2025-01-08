import {
  Footer,
  FooterDescriptionsDynamicZone,
  FooterLinksDynamicZone,
  FooterSocialsDynamicZone,
  Maybe,
} from '@/types/types';

import { TFooter } from '../modules';
import { TSocial } from '../modules/footer/components';
import { uiUploadfile } from './uiUploadfile';

export const getLinks = (link: FooterLinksDynamicZone) => {
  if (link.__typename == 'ComponentUiLink') {
    return {
      url: link?.url || '/',
      title: link?.title || '',
      isExternal: !!link?.isExternal,
    };
  }
  return {
    url: '/',
    title: '',
    isExternal: false,
  };
};

const getFooterLinks = (data?: Maybe<Maybe<FooterLinksDynamicZone>[]>) => {
  const filteredLinks = data?.filter((link) => !!link) || [];

  const links = filteredLinks.filter((link) => !!link);

  return links.map((link) => getLinks(link)).filter((link) => !!link);
};

const getFooterDescription = (
  data?: Maybe<Maybe<FooterDescriptionsDynamicZone>[]>
) => {
  const filteredDescr = data?.filter((block) => !!block) || [];

  return filteredDescr
    .filter((block) => block.__typename === 'ComponentUiParagraph')
    .map((block) => {
      if (block.__typename === 'ComponentUiParagraph') {
        return block.paragraph;
      }
    });
};

const getSocials = (
  data?: Maybe<Maybe<FooterSocialsDynamicZone>[]>
): TSocial[] => {
  const filteredSocials = data?.filter((block) => !!block) || [];

  return filteredSocials
    .filter((social) => !!social)
    .map<TSocial | undefined>((social) => {
      if (social.__typename === 'ComponentSocialSocial') {
        return { url: social.url, image: uiUploadfile(social.image) };
      }
    })
    .filter((social) => !!social);
};

export const getFooterData = (data: Footer): TFooter => {
  const links = getFooterLinks(data?.links);
  const info = getFooterDescription(data?.descriptions);
  const social = getSocials(data?.socials);

  return { info, links, social };
};
