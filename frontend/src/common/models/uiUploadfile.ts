import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

import { Maybe, UploadFile } from '@/types/types';

import { placeholderShimmer } from '../ui';

export type TUploadFile = UploadFile & {
  placeholder: PlaceholderValue;
};

export const uiUploadfile = (
  upload?: Maybe<UploadFile>
): TUploadFile | undefined => {
  if (!upload) {
    return;
  }

  return {
    ...upload,
    placeholder: placeholderShimmer(),
    url: `http://localhost:1337${upload.url}`,
  };
};
