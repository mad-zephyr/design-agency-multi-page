'use client';

import { FC, PropsWithChildren } from 'react';

import { useLockScroll, usePortal } from '@/common/hooks';

type TModalWrapper = {
  isOpen?: boolean;
  rootId: string;
};

export const ModalWrapper: FC<PropsWithChildren<TModalWrapper>> = ({
  rootId,
  isOpen,
  children,
}) => {
  useLockScroll({ isScrollLocked: !!isOpen });
  const portal = usePortal({ rootId });

  return portal && isOpen ? portal(children) : <></>;
};
