'use client';

import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

export const useLockScroll = ({
  isScrollLocked,
}: {
  isScrollLocked: boolean;
}) => {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) {
      return;
    }

    if (isScrollLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      if (lenis) {
        lenis.start();
      }
    };
  }, [lenis, isScrollLocked]);
};
