const MAX_AGE = 60;

export default ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: "production" !== env("NODE_ENV") ? true : false,
        introspection: true,
        persistedQueries: { ttl: 10 * MAX_AGE },
        cacheControl: { defaultMaxAge: MAX_AGE },
      },
    },
  },
  seo: {
    enabled: true,
  },
});
