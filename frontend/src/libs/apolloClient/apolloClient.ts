import { HttpLink, InMemoryCacheConfig } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

import { getBasePath } from '../helpers';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  const basePath = getBasePath();

  const inMemoryConfig: InMemoryCacheConfig = {};
  const cache = new InMemoryCache(inMemoryConfig);

  const fethCache: RequestCache = 'reload';

  const link = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: `${basePath}/graphql`,
    headers: {
      'Cache-Control': 'no-cache',
    },
    fetchOptions: { cache: fethCache },

    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    // fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
    link,
  });
});
