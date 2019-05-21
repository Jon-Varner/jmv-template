export const memoize = fn => {
  const cache = {};

  return (...args) => {
    if (cache[args] === undefined) cache[args] = fn.apply(null, args);
    return cache[args];
  };
};
