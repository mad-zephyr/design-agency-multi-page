import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

import { getBasePath } from '../helpers';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  const basePath = getBasePath();

  const cache = new InMemoryCache();

  const link = new HttpLink({
    uri: `${basePath}/graphql`,
    fetchOptions: { cache: 'no-store' },
  });

  return new ApolloClient({
    cache: cache,
    link,
  });
});
