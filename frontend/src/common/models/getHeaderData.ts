import { Header, HeaderLinksDynamicZone } from '@/types/types';

import { THeaderData } from '../modules';

export const getLinks = (link: HeaderLinksDynamicZone) => {
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

export const getUiHeaderData = (data: Header): THeaderData => {
  const filteredLinks = data?.links?.filter((link) => !!link) || [];

  const links = filteredLinks
    .map((link) => ({ ...getLinks(link) }))
    .filter((link) => !!link);

  return {
    links,
  };
};
