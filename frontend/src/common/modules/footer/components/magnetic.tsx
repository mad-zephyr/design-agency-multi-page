'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { cloneElement, FC, PropsWithChildren, useRef } from 'react';

export const Magnetic: FC<PropsWithChildren> = ({ children }) => {
  const magnetic = useRef<HTMLLIElement>(null);

  useGSAP((context, contextSafe) => {
    if (!contextSafe || !magnetic || !magnetic.current) {
      return;
    }

    const xTo = contextSafe(
      gsap.quickTo(magnetic.current, 'x', {
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      })
    );

    const yTo = contextSafe(
      gsap.quickTo(magnetic.current, 'y', {
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      })
    );

    const mouseMove = contextSafe((e: MouseEvent) => {
      if (!magnetic || !magnetic.current) {
        return;
      }
      const { clientX, clientY } = e;

      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x);
      yTo(y);
    });

    const mouseLeave = contextSafe(() => {
      gsap.to(magnetic.current, { x: 0, duration: 1 });
      gsap.to(magnetic.current, { y: 0, duration: 1 });

      xTo(0);
      yTo(0);
    });

    magnetic.current.addEventListener('mousemove', mouseMove);
    magnetic.current.addEventListener('mouseleave', mouseLeave);

    return () => {
      magnetic.current?.removeEventListener('mousemove', mouseMove);
      magnetic.current?.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  if (!children) {
    return <></>;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return cloneElement(children, { ref: magnetic });
};
