import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: ['src/**/*.ts'],
  overwrite: true,

  generates: {
    './src/libs/graphql/gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
    },
    './src/types/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  hooks: {
    afterAllFileWrite: 'prettier --write',
  },
  config: {
    withHOC: false,
    withComponent: true,
    withHooks: false,
  },
};
export default config;
