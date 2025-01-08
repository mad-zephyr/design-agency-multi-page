'use client';

import { useCallback, useEffect, useState } from 'react';

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = useCallback((query: string): boolean | undefined => {
    if (window && typeof window !== undefined) {
      return window.matchMedia(query).matches;
    }
  }, []);

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return !!getMatches(query);
    }
    return defaultValue;
  });

  const handleChange = useCallback(() => {
    setMatches(!!getMatches(query));
  }, [getMatches, query]);

  // Handles the change event of the media query.

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [handleChange, query]);

  return matches;
}
