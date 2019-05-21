export const pipe = (...fns) => x => fns.reduce((f, g) => g(f), x);
