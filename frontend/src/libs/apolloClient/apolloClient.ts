import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

import { getBasePath } from '../helpers';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  const basePath = getBasePath();

  const cache = new InMemoryCache({ resultCaching: false });

  const link = new HttpLink({
    uri: `${basePath}/graphql`,
    headers: {
      'Cache-Control': 'no-cache',
    },
    // fetchOptions: { cache: 'no-store' },
    fetch: function (uri, options) {
      return fetch(uri, {
        ...(options ?? {}),
        headers: {
          ...(options?.headers ?? {}),
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
        next: {
          revalidate: 0,
        },
      });
    },
  });

  return new ApolloClient({
    cache: cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
    link,
  });
});
