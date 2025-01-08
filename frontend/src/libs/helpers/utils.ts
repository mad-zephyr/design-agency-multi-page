export const debounce = (
  func: { apply: (arg0: undefined, arg1: unknown[]) => void },
  timeout = 300
) => {
  let timer: NodeJS.Timeout;

  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const lerp = (start: number, end: number, damping: number) =>
  start * (1 - damping) + end * damping;
