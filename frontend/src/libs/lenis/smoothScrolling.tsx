'use client';

import gsap from 'gsap';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import { LenisRef, ReactLenis } from './react-lenis';

export const SmoothScrolling: FC<PropsWithChildren> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: DOMHighResTimeStamp) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
};
