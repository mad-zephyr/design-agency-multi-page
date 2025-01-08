'use client';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import { useTextAnimator } from '@/common/hooks';

import styles from './stules.module.sass';

export const AnimatedText: FC<PropsWithChildren> = ({ children }) => {
  const target = useRef<HTMLSpanElement>(null);

  const { animateV4 } = useTextAnimator(target);

  const [animateIn, animateOut] = animateV4;

  useEffect(() => {
    const currentTarget = target.current;

    currentTarget?.addEventListener('mouseenter', animateIn);
    currentTarget?.addEventListener('mouseleave', animateOut);

    return () => {
      currentTarget?.removeEventListener('mouseenter', animateIn);
      currentTarget?.removeEventListener('mouseleave', animateOut);
    };
  }, [animateIn, animateOut, target]);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <span className={styles.container} ref={target} style={{ '--anim': 0 }}>
      <span className={styles.animated}>{children}</span>
    </span>
  );
};
