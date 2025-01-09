export const getBasePath = () => {
  return process.env.NODE_ENV === 'production'
    ? process.env.NEXT_API_PROD || process.env.NEXT_PUBLIC_API_PROD
    : process.env.NEXT_API_DEV || process.env.NEXT_PUBLIC_API_DEV;
};
