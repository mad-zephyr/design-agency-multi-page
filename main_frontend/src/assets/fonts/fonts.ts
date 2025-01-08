import { Jost } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
export const jost = Jost({
  variable: '--font-main',
  subsets: ['latin'],
  display: 'swap',
});
