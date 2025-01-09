export const calculateDecorPosition = (
  posX?: 'left' | 'right' | 'center',
  posY?: 'top' | 'bottom'
) => {
  return posX || posY
    ? {
        posX,
        posY,
      }
    : undefined;
};
