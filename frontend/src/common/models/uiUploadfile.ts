import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

import { getBasePath } from '@/libs/helpers';
import { Maybe, UploadFile } from '@/types/types';

import { placeholderShimmer } from '../ui';

export type TUploadFile = UploadFile & {
  placeholder: PlaceholderValue;
};

const getFileUrl = (path: string) => {
  if (path && !path?.startsWith('https')) {
    return `${getBasePath()}${path}`;
  }

  return path;
};

export const uiUploadfile = (
  upload?: Maybe<UploadFile>
): TUploadFile | undefined => {
  if (!upload) {
    return;
  }

  const url = getFileUrl(upload?.url);

  return {
    ...upload,
    placeholder: placeholderShimmer(),
    url,
  };
};
