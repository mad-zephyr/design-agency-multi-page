import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const nextIntlMiddleware = createMiddleware(routing);

export default async function middleware(
  request: NextRequest
): Promise<Promise<NextResponse>> {
  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|de|ro|es)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
