import { Metadata } from 'next';

import { uiUploadfile } from '@/common/models';
import { routing } from '@/i18n/routing';
import { ComponentSharedSeo, Maybe } from '@/types/types';

import { getBasePath } from './getBasePath';

const baseSeo = {
  title: 'Designo web app',
  descr: 'Award-Winning Custom Designs and Digital Branding Solutions',
  keywords: 'designo, web design, application design',
  robots: 'index, follow',
  canonicalURL: 'designo.nx.md',
  imgAltText: 'alternativeText',
  type: 'website',
};

export const generateSeo = async (
  seo?: Maybe<ComponentSharedSeo>
): Promise<Metadata> => {
  if (!seo) {
    return {
      title: baseSeo.title,
      description: baseSeo.descr,
    };
  }

  const image = uiUploadfile(seo.metaImage);
  const basePath = getBasePath() || '';
  const languages = routing.locales.reduce((langArr, lang) => {
    return {
      ...langArr,
      [lang]: `${basePath}/${lang}`,
    };
  }, {});

  return {
    title: seo.metaTitle || baseSeo.title,
    description: seo.metaDescription || baseSeo.descr,
    keywords: seo.keywords || baseSeo.keywords,
    robots: seo.metaRobots || baseSeo.robots,

    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: seo.canonicalURL || baseSeo.canonicalURL,
      images: image
        ? [
            {
              url: image?.formats?.large?.url || image.url,
              width: 1200,
              height: 630,
              alt: image.alternativeText || baseSeo.imgAltText,
            },
          ]
        : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle || baseSeo.title,
      description: seo.metaDescription || baseSeo.descr,
      images: image
        ? [
            {
              url: image?.formats?.large?.url || image.url,
              width: 1200,
              height: 630,
              alt: image.alternativeText || baseSeo.imgAltText,
            },
          ]
        : [],
      // images: seo.openGraph?.og_type ===
      //   ?.filter((social) => social?.socialNetwork === 'Twitter')
      //   ?.map((social) => ({
      //     url: uiUploadfile(social?.image).url,
      //   })),
    },
    alternates: {
      canonical: basePath,
      languages: languages,
      types: { ['website']: basePath },
    },

    appleWebApp: {
      capable: true,
      title: baseSeo.title,
      statusBarStyle: 'black-translucent',
    },
    other: {
      'og:logo': 'images/icons/512x512.png',
      'og:type': 'website',
      'application/ld+json': seo.structuredData,
    },
  };
};
