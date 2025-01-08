// Import the TextSplitter class for handling text splitting.
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RefObject, useEffect, useState } from 'react';
import SplitType from 'split-type';

const lettersAndSymbols = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '-',
  '_',
  '+',
  '=',
  ';',
  ':',
  '<',
  '>',
  ',',
];
const randomColors = ['#22a3a9', '#4ca922', '#a99222', '#1d2619']; // Example colors

export function useTextAnimator(
  textElement: RefObject<HTMLSpanElement | null>
) {
  const [splitter, setSplitter] = useState<SplitType>();
  const [originalChars, setOriginalChars] = useState<string[]>();
  const [originalColors, setOriginalColors] = useState<string[]>();

  useEffect(() => {
    if (!textElement.current) {
      return;
    }

    const splitter = new SplitType(textElement.current, {
      split: 'chars,words',
    });

    const chars = splitter.chars?.map((char) => char.innerHTML);
    const collors = splitter.chars?.map((char) => getComputedStyle(char).color);

    setSplitter(splitter);
    setOriginalChars(chars);
    setOriginalColors(collors);
  }, [textElement]);

  const { contextSafe } = useGSAP({
    scope: textElement,
  });

  const reset = contextSafe(() => {
    const chars = splitter?.chars;
    chars
      ?.filter((char) => !!char)
      .forEach((char, index) => {
        gsap.killTweensOf(char); // Ensure no ongoing animations
        if (originalChars?.[index] && originalColors?.[index]) {
          char.innerHTML = originalChars?.[index];
          char.style.color = originalColors?.[index]; // Reset the color
        }
      });
  });

  const animateV3 = contextSafe(() => {
    // Reset any ongoing animations
    reset();
    // Query all individual characters in the line for animation.
    const chars = splitter?.chars;
    chars?.forEach((char: HTMLElement, position: number) => {
      const initialHTML = char.innerHTML;
      const initialColor = getComputedStyle(char).color;
      gsap.timeline().fromTo(
        char,
        {
          opacity: 0,
          transformOrigin: '50% 0%',
        },
        {
          duration: 0.03,
          ease: 'none',
          onComplete: () => {
            gsap.set(char, {
              innerHTML: initialHTML,
              color: initialColor,
              delay: 0.03,
            });
          },
          repeat: 3,
          repeatRefresh: true,
          repeatDelay: 0.1, // delay between repeats
          delay: (position + 1) * 0.08, // delay between chars
          innerHTML: () => {
            const randomChar =
              lettersAndSymbols[
                Math.floor(Math.random() * lettersAndSymbols.length)
              ];
            const randomColor =
              randomColors[Math.floor(Math.random() * randomColors.length)];
            gsap.set(char, { color: randomColor });
            return randomChar;
          },
          opacity: 1,
        }
      );
    });
  });

  const animateV4 = contextSafe(() => {
    reset();

    const width = textElement.current?.clientWidth || 0;

    // Query all individual characters in the line for animation.
    const chars = splitter?.chars;

    chars?.forEach((char, position) => {
      const initialHTML = char.innerHTML;

      gsap.fromTo(
        char,
        {
          opacity: 0,
        },
        {
          duration: 0.03,
          onComplete: () => {
            gsap.set(char, { innerHTML: initialHTML, delay: 0.1 });
          },
          repeat: 2,
          repeatRefresh: true,
          repeatDelay: 0.05, // delay between repeats
          delay: (position + 1) * 0.06, // delay between chars
          innerHTML: () =>
            lettersAndSymbols[
              Math.floor(Math.random() * lettersAndSymbols.length)
            ],
          opacity: 1,
        }
      );
    });

    gsap.fromTo(
      textElement.current,
      {
        '--anim': 0,
      },
      {
        duration: 1,
        ease: 'expo',
        '--anim': 1,
        width: `${width}px`,
      }
    );
  });

  const animateV4Back = contextSafe(() => {
    const width = textElement.current?.clientWidth || 0;

    gsap.killTweensOf(textElement.current); // Ensure no ongoing animations
    gsap.to(textElement.current, {
      duration: 0.6,
      ease: 'power4',
      '--anim': 0,
      width: `${width}px`,
    });
  });

  return { animateV3, animateV4: [animateV4, animateV4Back] };
}
